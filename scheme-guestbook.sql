-- Tables
create table public.guestbook (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  github_username text not null,
  avatar_url text,
  message text not null check (
    char_length(trim(message)) >= 1
    and char_length(message) <= 500
  ),
  created_at timestamptz not null default now()
);

create table public.guestbook_likes (
  id uuid primary key default gen_random_uuid(),
  guestbook_id uuid not null references public.guestbook(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (guestbook_id, user_id)
);

-- Enable RLS
alter table public.guestbook enable row level security;
alter table public.guestbook_likes enable row level security;

-- Policies: guestbook
create policy "Anyone can read guest comments"
on public.guestbook for select
to anon, authenticated
using (true);

create policy "Authenticated users can create comments"
on public.guestbook for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can delete their own comments"
on public.guestbook for delete
to authenticated
using (auth.uid() = user_id);

-- Policies: guestbook_likes
create policy "Only authenticated users can read likes"
on public.guestbook_likes for select
to authenticated
using (true);

create policy "Authenticated users can like"
on public.guestbook_likes for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can remove their own likes"
on public.guestbook_likes for delete
to authenticated
using (auth.uid() = user_id);