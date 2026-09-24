'use client'

import { useRef, useState } from 'react'
import { submitEntry, deleteEntry } from './action'
import { cursorPresets } from '@/cursor';


const MAX = 250

const formatDate = (value) =>
    new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

function Avatar({ src, name, size }) {
    if (src) {
        return <img src={src} alt={name} className={`${size} rounded-full object-cover`} />
    }
    return (
        <span className={`${size} rounded-full bg-current/10 flex items-center justify-center text-[11px] font-medium`}>
            {name?.[0]?.toUpperCase() ?? '?'}
        </span>
    )
}

export default function GuestBookForm({ user, entries, currentUserId }) {
    const [value, setValue] = useState('')
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)
    const [confirmingId, setConfirmingId] = useState(null)
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
            setError('Your note didnt post. Check your connection and try again.')
        } finally {
            setPending(false)
        }
    }

    async function handleDelete(id) {
        setDeletingId(id)
        try {
            await deleteEntry(id)
        } catch {
            setError('That note couldnt be deleted.Try again.')
        } finally {
            setDeletingId(null)
            setConfirmingId(null)
        }
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-current/[0.04] p-5 md:p-6 flex flex-col gap-4"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm">
                    <Avatar src={avatar} name={name} size="w-7 h-7" />
                    <span className="opacity-50">Posting as @{name}</span>
                </div>
                <span className="text-xs tabular-nums opacity-30">{value.length} / {MAX}</span>
            </div>

            <textarea
                name="message"
                value={value}
                onChange={(e) => setValue(e.target.value.slice(0, MAX))}
                placeholder="Your thoughts..."
                rows={2}
                required
                className="block w-full resize-none bg-transparent border-0 py-2 font-serif text-xl md:text-2xl leading-[1.4] tracking-[-0.01em] placeholder:text-current/25 focus:outline-none [field-sizing:content] min-h-[3.5rem]"
            />

            <div className="flex items-center justify-end">
                <button
                    type="submit"
                    disabled={pending || !value.trim()}
                    {...cursorPresets.click}
                    className="cursor-pointer w-10 h-10 rounded-full bg-primary text-secondary flex items-center justify-center transition-opacity duration-300 disabled:opacity-20 disabled:pointer-events-none hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4"
                    aria-label={pending ? 'Posting…' : 'Post note'}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
            </div>

            {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
        </form>
    )
}

export function GuestBookEntries({ entries, currentUserId }) {
    const [confirmingId, setConfirmingId] = useState(null)
    const [deletingId, setDeletingId] = useState(null)
    const [error, setError] = useState(null)

    async function handleDelete(id) {
        setDeletingId(id)
        try {
            await deleteEntry(id)
        } catch {
            setError('That note couldnt be deleted. Try again.')
        } finally {
            setDeletingId(null)
            setConfirmingId(null)
        }
    }

    if (!entries || entries.length === 0) {
        return <p className="py-16 font-serif text-2xl opacity-40">No notes yet. Write the first one.</p>
    }

    return (
        <div className="flex flex-col">
            {error && <p role="alert" className="text-sm text-red-500 py-2">{error}</p>}
            {entries.map((entry) => (
                <article
                    key={entry.id}
                    className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-current/10 py-8 md:py-10"
                >
                    <Avatar src={entry.avatar_url} name={entry.username} size="w-10 h-10" />
                    <div className="flex flex-col gap-4 min-w-0">
                        <div className="flex items-center justify-between gap-4 text-sm">
                            <div className="flex items-baseline gap-3">
                                <span className="font-medium">@{entry.username}</span>
                                <time className="opacity-40">{formatDate(entry.created_at)}</time>
                            </div>

                            <div className="flex items-center gap-1">
                                {currentUserId === entry.user_id && (
                                    confirmingId === entry.id ? (
                                        <span className="flex items-baseline gap-4">
                                            <button
                                                onClick={() => handleDelete(entry.id)}
                                                disabled={deletingId === entry.id}
                                                className="cursor-pointer text-red-500 hover:underline underline-offset-4 disabled:opacity-40"
                                            >
                                                {deletingId === entry.id ? 'Deleting…' : 'Delete'}
                                            </button>
                                            <button
                                                onClick={() => setConfirmingId(null)}
                                                className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                                            >
                                                Keep
                                            </button>
                                        </span>
                                    ) : (
                                        <button
                                            onClick={() => setConfirmingId(entry.id)}
                                            className="cursor-pointer p-1 opacity-40 hover:opacity-100 md:opacity-0 md:group-hover:opacity-40 md:hover:!opacity-100 focus-visible:opacity-100 transition-opacity"
                                            aria-label="Delete note"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <circle cx="5" cy="12" r="1.5" />
                                                <circle cx="12" cy="12" r="1.5" />
                                                <circle cx="19" cy="12" r="1.5" />
                                            </svg>
                                        </button>
                                    )
                                )}
                                <button className="p-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" aria-label="Like this comment">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <p className="max-w-[60ch] font-serif text-lg md:text-xl leading-[1.55] whitespace-pre-wrap break-words">
                            {entry.message}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    )
}