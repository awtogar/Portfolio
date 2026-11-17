create table public.guestbook (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references auth.users(id) on delete cascade,
    display_name text not null default 'Guest',
    provider text not null default 'github',
    avatar_url text,
    message text not null,
    created_at timestamptz not null default now(),
    constraint guestbook_message_check
        check (char_length(trim(message)) between 1 and 250)
);

create table public.guestbook_likes (
    id uuid primary key default gen_random_uuid(),
    guestbook_id uuid not null
        references public.guestbook(id) on delete cascade,
    user_id uuid not null
        references auth.users(id) on delete cascade,
    created_at timestamptz not null default now(),
    constraint guestbook_likes_unique
        unique (guestbook_id, user_id)
);

create index guestbook_created_at_idx
    on public.guestbook (created_at desc);
create index guestbook_likes_guestbook_id_idx
    on public.guestbook_likes (guestbook_id);

create or replace function public.handle_guestbook_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    identity_data jsonb;
    identity_provider text;
begin
    if auth.uid() is null then
        raise exception 'Authentication required';
    end if;

    new.user_id := auth.uid();

    select i.identity_data, i.provider
    into identity_data, identity_provider
    from auth.identities i
    where i.user_id = auth.uid()
    -- Prefer the identity used for the current session when a user has several.
    order by (i.provider = (auth.jwt() -> 'app_metadata' ->> 'provider')) desc,
             i.created_at
    limit 1;

    new.display_name := coalesce(
        identity_data->>'full_name',
        identity_data->>'name',
        identity_data->>'user_name',
        identity_data->>'preferred_username',
        'Guest'
    );

    new.provider := coalesce(identity_provider, 'github');

    new.avatar_url := coalesce(
        identity_data->>'avatar_url',
        identity_data->>'picture'
    );

    return new;
end;
$$;

create trigger on_guestbook_insert
before insert on public.guestbook
for each row
execute function public.handle_guestbook_insert();


alter table public.guestbook enable row level security;
alter table public.guestbook_likes enable row level security;

create policy "Anyone can read guestbook"
on public.guestbook
for select
to anon, authenticated
using (true);

create policy "Authenticated users can create entries"
on public.guestbook
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can delete their own entries"
on public.guestbook
for delete
to authenticated
using (auth.uid() = user_id);

create policy "Users can read their own likes"
on public.guestbook_likes
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can create their own likes"
on public.guestbook_likes
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can delete their own likes"
on public.guestbook_likes
for delete
to authenticated
using (auth.uid() = user_id);

-- Intentionally NOT security_invoker: the view runs with the owner's rights so
-- like_count can be aggregated without exposing guestbook_likes to anon.
-- liked_by_me is still scoped to the caller through auth.uid().
create view public.guestbook_entries
as
select
    g.id,
    g.user_id,
    g.display_name,
    g.provider,
    g.avatar_url,
    g.message,
    g.created_at,

    (
        select count(*)
        from public.guestbook_likes l
        where l.guestbook_id = g.id
    ) as like_count,

    exists (
        select 1
        from public.guestbook_likes l
        where l.guestbook_id = g.id
          and l.user_id = (select auth.uid())
    ) as liked_by_me

from public.guestbook g;

grant select on public.guestbook_entries to anon, authenticated;