import { signInWithGithub } from './action';
import { BaseSection, TextReveal, Footer } from '@/components';
import { createClient } from '@/lib/supabase/server';
import GuestBookForm, { GuestBookEntries } from './GuestBookForm';
import { cursorPresets } from '@/cursor';
import { RiGithubFill } from '@remixicon/react';

export const metadata = {
  title: 'Guest Book',
  description: 'Leave a note so we know you were here.',
};

const formatDate = value => new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

function GuestEntries({ entries }) {
  if (!entries || entries.length === 0) {
    return <p className="py-16 font-serif text-2xl opacity-40">No notes yet. Sign in and be the first one to leave a note!</p>;
  }
  return (
    <div className="flex flex-col">
      {entries.map(entry => (
        <article key={entry.id} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-current/10 py-8 md:py-10">
          {entry.avatar_url ? (
            <img src={entry.avatar_url} alt={entry.github_username} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <span className="w-10 h-10 rounded-full bg-current/10 flex items-center justify-center text-[11px] font-medium">
              {entry.github_username?.[0]?.toUpperCase() ?? '?'}
            </span>
          )}
          <div className="flex flex-col gap-4 min-w-0">
            <div className="flex items-baseline gap-3 text-sm">
              <span className="font-medium">@{entry.github_username}</span>
              <time className="opacity-40">{formatDate(entry.created_at)}</time>
            </div>
            <p className="max-w-[60ch] font-serif text-lg md:text-xl leading-[1.55] whitespace-pre-wrap break-words">{entry.message}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default async function GuestBook() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: entries } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false });

  let entriesWithLikes = entries;
  let count = entries?.length ?? 0;

  if (user) {
    const { data: likes } = await supabase.from('guestbook_likes').select('guestbook_id, user_id');

    const likeCounts = {};
    const likedByUser = new Set();
    likes?.forEach(l => {
      likeCounts[l.guestbook_id] = (likeCounts[l.guestbook_id] || 0) + 1;
      if (l.user_id === user.id) likedByUser.add(l.guestbook_id);
    });

    entriesWithLikes = entries?.map(e => ({
      ...e,
      likeCount: likeCounts[e.id] || 0,
      isLiked: likedByUser.has(e.id),
    }));
  }

  return (
    <BaseSection sectionID="guestbook" sectionClassName="">
      <div className="flex flex-col">
        <div className="relative section-padding-hero">
          <div className="md:grid md:grid-cols-[3fr_2fr] md:items-start md:gap-[2rem]">
            <div className="pb-4 md:sticky md:pr-6 md:top-[8rem]">
              <div className="flex flex-col gap-8 md:gap-10">
                {/* header */}
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <TextReveal as="span" startDelay="0.5">
                      <span className="text-base tracking-body font-[450] uppercase text-primary-muted mb-2 md:mb-3 block">(Guestbook)</span>
                    </TextReveal>
                    <h1 className="font-serif text-h100 uppercase">Messages</h1>
                  </div>
                  <p className="max-w-[95%] text-sm md:text-base leading-relaxed opacity-60 mt-4 md:mt-6">
                    Feel free to share your thoughts, suggestions, questions, or anything else!
                  </p>
                </div>

                {/* entries & form */}
                {user ? (
                  // authenticated user fields form
                  <GuestBookForm user={user} />
                ) : (
                  // unauthenticated user to sign with github
                  <form action={signInWithGithub}>
                    <button
                      type="submit"
                      {...cursorPresets.signIn}
                      className="group flex w-full cursor-pointer items-center justify-center gap-4 rounded-2xl bg-current/[0.04] px-6 py-8 md:py-10 text-center transition-colors duration-300 hover:bg-current/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      <RiGithubFill className="h-6 w-6 text-current transition-colors duration-300 group-hover:text-primary" />
                      <span className="font-serif text-base md:text-lg tracking-[-0.01em]">Sign in to leave a note</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right column — comments */}
            <div className="flex flex-col gap-2 md:gap-4 md:pt-4">
              <div className="flex justify-between items-center mb-2 md:mb-4">
                <span className="text-h600 text-[450] uppercase">What people left</span>
                <div className="block">
                  <span className="text-base tabular-nums opacity-40">
                    {count} {count === 1 ? 'note' : 'notes'}
                  </span>
                </div>
              </div>
              {user ? <GuestBookEntries entries={entriesWithLikes} currentUserId={user.id} /> : <GuestEntries entries={entries} />}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </BaseSection>
  );
}
