'use client'

import { useRef, useState } from 'react'
import { submitEntry, deleteEntry } from './action'

const MAX = 500

export default function GuestBookForm({ user, entries, currentUserId }) {
    const [value, setValue] = useState('')
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)
    const [deletingId, setDeletingId] = useState(null)
    const formRef = useRef(null)

    const name = user?.user_metadata?.user_name || user?.user_metadata?.preferred_username || 'you'
    const avatar = user?.user_metadata?.avatar_url

    async function handleSubmit(e) {
        e.preventDefault()
        if (!value.trim() || pending) return
        setPending(true)
        setError(null)

        try {
            await submitEntry(new FormData(formRef.current))
            setValue('')
        } catch {
            setError('Failed to post. Try again.')
        } finally {
            setPending(false)
        }
    }

    async function handleDelete(id) {
        if (!confirm('Delete this comment?')) return
        setDeletingId(id)
        try {
            await deleteEntry(id)
        } catch {
            alert('Failed to delete. Try again.')
        } finally {
            setDeletingId(null)
        }
    }

    return (
        <div className="flex flex-col gap-s500">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-8 h-8 rounded-full object-cover border border-primary/15" />
                    ) : (
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-semibold">
                            {name[0]?.toUpperCase()}
                        </span>
                    )}
                    <span className="text-base-sm font-mono text-primary font-medium">@{name}</span>
                </div>

                <div className="flex flex-col gap-2.5">
                    <textarea
                        name="message"
                        value={value}
                        onChange={e => setValue(e.target.value.slice(0, MAX))}
                        placeholder="Leave a note…"
                        className="w-full bg-primary/[0.03] border border-primary/15 rounded-xl p-4 text-base font-sans text-primary placeholder:text-primary-muted/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all resize-y min-h-[110px]"
                        rows={3}
                        required
                    />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {error && <span className="text-xs font-sans text-red-500">{error}</span>}
                            <span className="text-xs font-mono text-primary-muted">{value.length}/{MAX}</span>
                        </div>
                        <button
                            type="submit"
                            disabled={pending || !value.trim()}
                            className="px-5 py-2 rounded-full bg-surface-invert text-on-invert-primary font-sans text-base-sm font-medium hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                        >
                            {pending ? 'Posting…' : 'Post'}
                        </button>
                    </div>
                </div>
            </form>
        {/* list of entries guestbook comment */}
            <div className="flex flex-col divide-y divide-primary/10">
                {!entries || entries.length === 0 ? (
                    <p className="text-base-sm text-primary-muted py-12 text-center font-sans">No notes yet. Be the first.</p>
                ) : (
                    entries.map((entry) => (
                        // entry comment section
                        <article key={entry.id} className="py-6 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
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
                                {currentUserId === entry.user_id && (
                                    <button
                                        onClick={() => handleDelete(entry.id)}
                                        disabled={deletingId === entry.id}
                                        className="text-xs font-mono text-primary-muted/60 hover:text-red-500 transition-colors cursor-pointer disabled:opacity-40"
                                        aria-label="Delete comment"
                                    >
                                        {deletingId === entry.id ? '…' : 'Delete'}
                                    </button>
                                )}
                            </div>
                            <p className="text-base font-sans text-primary/90 leading-relaxed whitespace-pre-wrap break-words">
                                {entry.message}
                            </p>
                        </article>
                    ))
                )}
            </div>
        </div>
    )
}

