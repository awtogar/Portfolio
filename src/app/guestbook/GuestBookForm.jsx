"use client";

import { useRef, useState, useTransition } from "react";
import { deleteEntry, signIn, submitEntry, toggleLike } from "./action";
import {
  RiArrowRightUpLine,
  RiCloseLine,
  RiGithubFill,
  RiGoogleFill,
  RiHeartLine,
  RiHeartFill,
} from "@remixicon/react";
import { useCursorTarget } from "@/cursor";

const MAX = 250;

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

function Avatar({ src, name, size, className = "" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name ? `${name}'s avatar` : "Guest avatar"}
        className={`${size} rounded-full object-cover ${className}`}
      />
    );
  }
  return (
    <span
      className={`${size} rounded-full bg-neutral-400/50 flex items-center justify-center text-sm font-bold ${className}`}
    >
      {name?.[0]?.toUpperCase() ?? "?"}
    </span>
  );
}

function getIdentity(user) {
  const meta = user?.user_metadata ?? {};
  return {
    name:
      meta.full_name ||
      meta.name ||
      meta.user_name ||
      meta.preferred_username ||
      "Guest",
    avatar: meta.avatar_url || meta.picture || null,
    provider: user?.app_metadata?.provider ?? null,
  };
}

export default function GuestBookForm({ user }) {
  const [value, setValue] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [isSigningIn, startSignInTransition] = useTransition();
  const formRef = useRef(null);
  const cursorSubmitFormTarget = useCursorTarget({ label: "Submit" });

  const identity = getIdentity(user);

  function handleSignIn(provider) {
    startSignInTransition(async () => {
      await signIn(provider, "/guestbook");
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user || !value.trim() || pending) return;
    setPending(true);
    setError(null);

    try {
      const result = await submitEntry(null, new FormData(formRef.current));
      if (result?.error) {
        setError(result.error);
        return;
      }
      setValue("");
    } catch {
      setError("Failed to post. Check your connection.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-2xl bg-neutral-100 p-5 md:p-6 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm">
          <Avatar src={identity.avatar} name={identity.name} size="w-6 h-6" />
          <span className="text-neutral-500 font-medium">
            {user ? identity.name : "Guest"}
          </span>
        </div>
        <span className="text-sm tabular-nums text-neutral-500 font-medium">
          {value.length} / {MAX}
        </span>
      </div>

      <textarea
        name="message"
        value={value}
        disabled={!user}
        spellCheck={false}
        onChange={(e) => setValue(e.target.value.slice(0, MAX))}
        placeholder={
          user ? "Write your thoughts..." : "Sign in to leave a note"
        }
        rows={4}
        required
        className="block w-full resize-none border-0 py-2 font-serif text-base md:text-2xl leading-body tracking-body placeholder:text-current/25 focus:outline-none [field-sizing:content] min-h-[calc(4*1.5rem)] disabled:opacity-30"
      />

      <div className="flex items-center justify-end gap-3">
        {user ? (
          <button
            type="submit"
            {...cursorSubmitFormTarget}
            disabled={pending || !value.trim()}
            className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-bg transition-all duration-300 hover:bg-neutral-700 disabled:pointer-events-none disabled:opacity-20 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <span>{pending ? "Sending..." : "Submit"}</span>
            <RiArrowRightUpLine size={15} />
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={isSigningIn}
              onClick={() => handleSignIn("github")}
              className="cursor-pointer flex items-center gap-2 rounded-full bg-neutral-900 text-neutral-50 px-4 py-2 text-sm transition-opacity duration-300 hover:opacity-80 disabled:opacity-40"
            >
              <RiGithubFill className="h-4 w-4" />
              <span>GitHub</span>
            </button>
            <button
              type="button"
              disabled={isSigningIn}
              onClick={() => handleSignIn("google")}
              className="cursor-pointer flex items-center gap-2 rounded-full border border-current/15 px-4 py-2 text-sm transition-opacity duration-300 hover:opacity-70 disabled:opacity-40"
            >
              <RiGoogleFill className="h-4 w-4" />
              <span>Google</span>
            </button>
          </div>
        )}
      </div>

      {error && <p className="text-sm text-neutral-900">{error}</p>}
    </form>
  );
}

export function GuestBookEntries({ entries, currentUserId }) {
  const [deletingId, setDeletingId] = useState(null);
  const [likingId, setLikingId] = useState(null);
  const [likes, setLikes] = useState(() =>
    Object.fromEntries(
      entries.map((e) => [e.id, { count: e.likeCount, liked: e.isLiked }])
    )
  );

  async function handleLike(id) {
    if (likingId === id || !currentUserId) return;
    setLikingId(id);
    const prev = likes[id];
    setLikes((l) => ({
      ...l,
      [id]: {
        count: prev.liked ? prev.count - 1 : prev.count + 1,
        liked: !prev.liked,
      },
    }));
    try {
      await toggleLike(id);
    } catch {
      setLikes((l) => ({ ...l, [id]: prev }));
    } finally {
      setLikingId(null);
    }
  }

  async function handleDelete(id) {
    setDeletingId(id);
    try {
      await deleteEntry(id);
    } finally {
      setDeletingId(null);
    }
  }

  if (!entries?.length) {
    return (
      <p className="py-16 font-serif text-2xl opacity-40">
        No notes yet. Be the first one to leave a note!
      </p>
    );
  }

  return (
    <div className="flex flex-col">
      {entries.map((entry) => {
        const like = likes[entry.id];
        return (
          <article
            key={entry.id}
            className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-fg/10 pt-2 pb-4 md:pt-4 md:pb-6"
          >
            <Avatar
              src={entry.avatar_url}
              name={entry.display_name}
              size="w-8 h-8"
            />
            <div className="flex flex-col gap-2 min-w-0">
              <div className="flex items-start md:items-center justify-between gap-12">
                <div className="flex flex-col items-baseline leading-body tracking-body">
                  <span className="min-w-0 font-[450] leading-[1.5]">
                    @{entry.display_name}
                  </span>
                  <time className="shrink-0 text-xs opacity-40 lowercase">
                    {formatDate(entry.created_at)}
                  </time>
                </div>

                <div className="flex shrink-0 items-center gap-x-1">
                  {currentUserId ? (
                    <button
                      onClick={() => handleLike(entry.id)}
                      disabled={likingId === entry.id}
                      className={`flex items-center gap-x-1 transition-opacity opacity-100 lg:opacity-0 lg:group-hover:opacity-100 focus-visible:opacity-100 ${
                        like?.liked
                          ? "text-neutral-900"
                          : "text-current/50 hover:text-neutral-900"
                      }`}
                      aria-label={like?.liked ? "Unlike" : "Like"}
                    >
                      {like?.count > 0 && (
                        <span className="text-xs leading-none tabular-nums">
                          {like.count}
                        </span>
                      )}
                      {like?.liked ? (
                        <RiHeartFill className="w-4 h-4" />
                      ) : (
                        <RiHeartLine className="w-4 h-4" />
                      )}
                    </button>
                  ) : (
                    like?.count > 0 && (
                      <span className="p-1 flex items-center gap-1 text-current/30">
                        <RiHeartLine className="w-4 h-4" />
                        <span className="text-base-sm tabular-nums">
                          {like.count}
                        </span>
                      </span>
                    )
                  )}
                  {currentUserId === entry.user_id && (
                    <button
                      onClick={() => handleDelete(entry.id)}
                      disabled={deletingId === entry.id}
                      aria-label="Delete"
                      className="cursor-pointer flex items-center justify-center p-1 text-current/50 hover:text-current disabled:opacity-40"
                    >
                      <RiCloseLine className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              <p className="font-serif text-base leading-body tracking-body">
                {entry.message}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
