import { signInWithGithub } from './action'
import { BaseSection } from '@/components'
import { createClient } from '@/lib/supabase/server'
import GuestBookForm from './GuestBookForm'

export const metadata = {
    title: 'Guest Book',
    description: 'Leave a note for Awtogar.',
}

function GuestEntries({ entries }) {
    if (!entries || entries.length === 0) {
        return <p className="text-base-sm text-primary-muted py-12 text-center font-sans">No notes yet. Be the first.</p>
    }
    return (
        <div className="flex flex-col divide-y divide-primary/10">
            {entries.map((entry) => (
                <article key={entry.id} className="py-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        {entry.avatar_url ? (
                            <img src={entry.avatar_url} alt={entry.username} className="w-7 h-7 rounded-full object-cover border border-primary/15" />
                        ) : (
                            <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-semibold">
                                {entry.username?.[0]?.toUpperCase() ?? '?'}
                            </span>
                        )}
                        <div className="flex items-center gap-2">
                            <span className="text-base-sm font-mono font-medium text-primary">@{entry.username}</span>
                            <span className="text-primary-muted/40 font-mono text-xs">•</span>
                            <time className="text-xs font-mono text-primary-muted">
                                {new Date(entry.created_at).toLocaleDateString('en-US', {
                                    month: 'short', day: 'numeric', year: 'numeric',
                                })}
                            </time>
                        </div>
                    </div>
                    <p className="text-base font-sans text-primary/90 leading-relaxed whitespace-pre-wrap break-words">{entry.message}</p>
                </article>
            ))}
        </div>
    )
}

export default async function GuestBook() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    const { data: entries } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <BaseSection sectionClassName="section-padding-hero min-h-screen" sectionID="guestbook">
            <div className="max-w-2xl mx-auto w-full flex flex-col">
                <div className="flex flex-col">
                    <span className="text-base-sm font-mono uppercase tracking-wider text-primary-muted">(GUESTBOOK)</span>
                    <h1 className="mt-2 text-h100 font-serif font-bold tracking-heading leading-heading text-primary uppercase">Leave a note.</h1>
                </div>
                {/* Guest Entries */}
                {!user ? (
                    <div className="flex flex-col gap-s500">
                        <div className="rounded-2xl border border-primary/10 bg-primary/[0.02] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <p className="text-base font-sans text-primary-muted">
                                Sign in
                            </p>
                            <form action={signInWithGithub}>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-surface-invert text-on-invert-primary font-sans text-base-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shrink-0"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    Sign in with GitHub
                                </button>
                            </form>
                        </div>

                        <div className="h-px w-full bg-primary/10" />

                        <GuestEntries entries={entries} />
                    </div>
                ) : (
                    <GuestBookForm
                        user={user}
                        entries={entries}
                        currentUserId={user.id}
                    />
                )}
            </div>
        </BaseSection>
    )
}