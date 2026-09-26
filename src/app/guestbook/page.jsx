import { signInWithGithub } from './action';
import { BaseSection, TextReveal } from '@/components';
import { createClient } from '@/lib/supabase/server';
import GuestBookForm, { GuestBookEntries } from './GuestBookForm';
import { cursorPresets } from '@/cursor';

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
                        <span className="w-10 h-10 rounded-full bg-current/10 flex items-center justify-center text-[11px] font-medium">{entry.github_username?.[0]?.toUpperCase() ?? '?'}</span>
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

    const { data: { user } } = await supabase.auth.getUser();

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
        <BaseSection sectionID="guestbook" sectionClassName="section-padding-hero">
            <div className="md:grid md:grid-cols-[3fr_2fr] md:items-start md:gap-[2rem]">
                {/* Left column */}
                <div className="md:sticky md:top-[8rem]">
                    <div className="flex flex-col md:gap-10">
                        {/* header */}
                        <div className="md:flex md:flex-col gap-4">
                            <TextReveal as="span" startDelay="0.5">
                                <span className="text-base leading-heading tracking-body font-[450] uppercase text-primary-muted">(Guestbook)</span>
                            </TextReveal>
                            <h1 className="font-serif text-[clamp(3rem,8vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.04em] uppercase">SAY SOMETHING</h1>
                            <p className="max-w-[75%] text-sm md:text-base leading-relaxed opacity-60">Leave a message, share feedback, or just say hello.</p>
                        </div>

                        <div>
                            {user ? (
                                <GuestBookForm user={user} />
                            ) : (
                                <form action={signInWithGithub}>
                                    <button
                                        type="submit"
                                        {...cursorPresets.signIn}
                                        className="group flex w-full cursor-pointer items-center justify-center gap-4 rounded-2xl bg-current/[0.04] px-6 py-8 md:py-10 text-center transition-colors duration-300 hover:bg-current/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4"
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="shrink-0 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                                        >
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        <span className="font-serif text-base md:text-lg tracking-[-0.01em]">Sign in to leave a note</span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right column — comments */}
                <div className="md:pl-6">
                    <div className="md:flex md:justify-between md:mb-4">
                        <div className="">
                            <span className="text-h400">People said</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-base tabular-nums opacity-40">
                                {count} {count === 1 ? 'note' : 'notes'}
                            </span>
                        </div>
                    </div>
                    {user ? <GuestBookEntries entries={entriesWithLikes} currentUserId={user.id} /> : <GuestEntries entries={entries} />}
                </div>
            </div>
        </BaseSection>
    );
}
