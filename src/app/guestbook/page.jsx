import { signInWithGithub } from "./action";
import { BaseSection, TextReveal, Footer } from "@/components";
import { createClient } from "@/lib/supabase/server";
import GuestBookForm, { GuestBookEntries } from "./GuestBookForm";
import { RiGithubFill } from "@remixicon/react";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Guest Book",
  description: "Leave a note so we know you were here.",
};

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function GuestEntries({ entries }) {
  if (!entries || entries.length === 0) {
    return (
      <p className="py-16 font-serif text-2xl opacity-40">
        No notes yet. Sign in and be the first one to leave a note!
      </p>
    );
  }
  return (
    <div className="flex flex-col">
      {entries.map((entry) => (
        <article
          key={entry.id}
          className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-current/10 py-8 md:py-10"
        >
          {entry.avatar_url ? (
            <img
              src={entry.avatar_url}
              alt={entry.github_username}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <span className="w-10 h-10 rounded-full bg-current/10 flex items-center justify-center text-[11px] font-medium">
              {entry.github_username?.[0]?.toUpperCase() ?? "?"}
            </span>
          )}
          <div className="flex flex-col gap-4 min-w-0">
            <div className="flex items-baseline gap-3 text-sm">
              <span className="font-medium">@{entry.github_username}</span>
              <time className="opacity-40">{formatDate(entry.created_at)}</time>
            </div>
            <p className="max-w-[60ch] font-serif text-lg md:text-xl leading-[1.55] whitespace-pre-wrap break-words">
              {entry.message}
            </p>
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
  const { data: entries } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false });

  let entriesWithLikes = entries;
  let count = entries?.length ?? 0;

  if (user) {
    const { data: likes } = await supabase
      .from("guestbook_likes")
      .select("guestbook_id, user_id");

    const likeCounts = {};
    const likedByUser = new Set();
    likes?.forEach((l) => {
      likeCounts[l.guestbook_id] = (likeCounts[l.guestbook_id] || 0) + 1;
      if (l.user_id === user.id) likedByUser.add(l.guestbook_id);
    });

    entriesWithLikes = entries?.map((e) => ({
      ...e,
      likeCount: likeCounts[e.id] || 0,
      isLiked: likedByUser.has(e.id),
    }));
  }

  return (
    <PageLayout>
      <section className="section-padding-x pt-[clamp(8rem,14vw,14rem)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* left column */}
          <div className="lg:sticky lg:col-span-5 lg:top-[clamp(8rem,14vw,14rem)] lg:self-start">
            <div className="">
              <span>Guest</span>
              <h1 className="flex items-start gap-2 text-h100 font-[500] leading-[1.1]">
                Messages <sup className="mt-4 text-h500">({count})</sup>
              </h1>
            </div>
            <div className="mt-6 lg:mt-8">
              <p className="border-b border-current/10 pb-3 text-base-sm uppercase opacity-60">
                About
              </p>
              <p className="mt-2 text-base leading-body opacity-80">
                Feel free to share your thoughts, suggestions, questions, or
                anything else!
              </p>
            </div>
            {/* container */}
            <div className="relative mt-12 hidden w-full lg:block">
              <GuestBookForm user={user} signInWithGithub={signInWithGithub} />
            </div>
          </div>
          {/* right column */}
          <div className="lg:col-span-6 lg:col-start-8 lg:pb-8">
            {user ? (
              <GuestBookEntries
                entries={entriesWithLikes}
                currentUserId={user.id}
              />
            ) : (
              <GuestEntries entries={entries} />
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
