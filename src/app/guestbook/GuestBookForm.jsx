'use client';

import { useEffect, useRef, useState } from 'react';
import { submitEntry, deleteEntry, toggleLike } from './action';
import { RiCloseLine, RiHeartLine, RiHeartFill } from '@remixicon/react';

const MAX = 250;

const formatDate = value => new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

function Avatar({ src, name, size, className = '' }) {
  if (src) {
    return <img src={src} alt={name} className={`${size} rounded-full object-cover ${className}`} />;
  }
  return <span className={`${size} rounded-full bg-current/10 flex items-center justify-center text-[11px] font-medium ${className}`}>{name?.[0]?.toUpperCase() ?? '?'}</span>;
}

export default function GuestBookForm({ user, entries, currentUserId }) {
  const [value, setValue] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const formRef = useRef(null);

  const name = user?.user_metadata?.user_name || user?.user_metadata?.preferred_username || 'you';
  const avatar = user?.user_metadata?.avatar_url;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim() || pending) return;
    setPending(true);
    setError(null);

    try {
      const result = await submitEntry(null, new FormData(formRef.current));
      if (result?.error) {
        setError(result.error);
        return;
      }
      setValue('');
    } catch {
      setError('Your note didnt post. Check your connection and try again.');
    } finally {
      setPending(false);
    }
  }

  async function handleDelete(id) {
    setDeletingId(id);
    try {
      const result = await deleteEntry(id);
      if (result?.error) setError(result.error);
    } catch {
      setError('That note could not be deleted. Try again.');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    // comment input form
    <form ref={formRef} onSubmit={handleSubmit} className="rounded-2xl bg-current/[0.04] p-5 md:p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm">
          <Avatar src={avatar} name={name} size="w-6 h-6" />
          <span className="opacity-50">Posting as @{name}</span>
        </div>
        <span className="text-sm tabular-nums opacity-30">
          {value.length} / {MAX}
        </span>
      </div>

      <textarea
        name="message"
        value={value}
        onChange={e => setValue(e.target.value.slice(0, MAX))}
        placeholder="Your thoughts..."
        rows={2}
        required
        className="block w-full resize-none bg-transparent border-0 py-2 font-serif text-xl md:text-2xl leading-[1.5] tracking-[0em] placeholder:text-current/25 focus:outline-none [field-sizing:content] min-h-[3.5rem]"
      />

      <div className="flex items-center justify-end">
        <button
          type="submit"
          disabled={pending || !value.trim()}

          className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-neutral-50 flex items-center justify-center transition-opacity duration-300 disabled:opacity-20 disabled:pointer-events-none hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label={pending ? 'Posting…' : 'Post note'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-500">
          {error}
        </p>
      )}
    </form>
  );
}

export function GuestBookEntries({ entries, currentUserId }) {
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);
  const [likingId, setLikingId] = useState(null);
  const [likes, setLikes] = useState(() => Object.fromEntries(entries.map(e => [e.id, { count: e.likeCount, liked: e.isLiked }])));

  useEffect(() => {
    setLikes(Object.fromEntries(entries.map(e => [e.id, { count: e.likeCount, liked: e.isLiked }])));
  }, [entries]);

  async function handleLike(id) {
    if (likingId === id) return;
    setLikingId(id);
    const prev = likes[id];
    setLikes(l => ({
      ...l,
      [id]: { count: prev.liked ? prev.count - 1 : prev.count + 1, liked: !prev.liked },
    }));
    try {
      const result = await toggleLike(id);
      if (result?.error) {
        setLikes(l => ({ ...l, [id]: prev }));
        setError(result.error);
      }
    } catch {
      setLikes(l => ({ ...l, [id]: prev }));
      setError('Could not update like.');
    } finally {
      setLikingId(null);
    }
  }

  async function handleDelete(id) {
    setDeletingId(id);
    try {
      const result = await deleteEntry(id);
      if (result?.error) setError(result.error);
    } catch {
      setError('That note could not be deleted. Try again.');
    } finally {
      setDeletingId(null);
    }
  }

  //   handle the case when there are no entries comments or notes yet
  if (!entries || entries.length === 0) {
    return <p className="py-16 font-serif text-2xl opacity-40">No notes yet. Write the first one.</p>;
  }

  return (
    <div className="flex flex-col">
      {error && (
        <p role="alert" className="text-sm text-red-500 py-2">
          {error}
        </p>
      )}
      {entries.map(entry => (
        // comment list item each user
        <article key={entry.id} className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-current/10 pt-2 pb-4 md:pt-4 md:pb-6">
          <Avatar src={entry.avatar_url} name={entry.github_username} size="w-8 h-8" />
          <div className="flex flex-col gap-2 md:gap-2 min-w-0">
            <div className="flex items-center justify-between gap-4 text-sm">
              <div className="flex flex-col items-baseline">
                <span className="font-medium">@{entry.github_username}</span>
                <time className="text-base-sm opacity-40">{formatDate(entry.created_at)}</time>
              </div>

              <div className="flex items-center gap-1">
                {currentUserId === entry.user_id && (
                  <button
                    onClick={() => handleDelete(entry.id)}
                    disabled={deletingId === entry.id}
                    className="cursor-pointer p-1 rounded-full text-current/50 hover:text-red-500 disabled:opacity-40 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
                    aria-label="Delete note"
                  >
                    <RiCloseLine className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => handleLike(entry.id)}
                  disabled={likingId === entry.id}
                  className={`cursor-pointer p-1 flex items-center gap-1 opacity-75 md:opacity-0 md:group-hover:opacity-75 focus-visible:opacity-75 transition-opacity disabled:opacity-40 ${
                    likes[entry.id]?.liked ? 'text-red-500' : 'text-current/50 hover:text-red-500'
                  }`}
                  aria-label={likes[entry.id]?.liked ? 'Unlike this comment' : 'Like this comment'}
                >
                  {likes[entry.id]?.liked ? <RiHeartFill className="w-4 h-4" /> : <RiHeartLine className="w-4 h-4" />}
                  {likes[entry.id]?.count > 0 && <span className="text-base-sm tabular-nums">{likes[entry.id].count}</span>}
                </button>
              </div>
            </div>

            <p className="font-serif text-base leading-body tracking-body">{entry.message}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
