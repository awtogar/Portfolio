import { signInWithGithub } from "./action";
import { createClient } from "@/lib/supabase/server";
import GuestBookForm, { GuestBookEntries } from "./GuestBookForm";
import PageLayout from "@/components/PageLayout";
import { BaseSection } from "@/components";

export const metadata = {
  title: "Guest Book",
  description: "Leave a note so we know you were here.",
};

export default async function GuestBook() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: entries } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false });

  const count = entries?.length ?? 0;

  const { data: likes } = await supabase
    .from("guestbook_likes")
    .select("guestbook_id, user_id");

  const likeCounts = {};
  const likedByUser = new Set();
  likes?.forEach((l) => {
    likeCounts[l.guestbook_id] = (likeCounts[l.guestbook_id] || 0) + 1;
    if (user && l.user_id === user.id) likedByUser.add(l.guestbook_id);
  });

  const entriesWithLikes = entries?.map((e) => ({
    ...e,
    likeCount: likeCounts[e.id] || 0,
    isLiked: likedByUser.has(e.id),
  }));

  return (
    <PageLayout>
      <BaseSection sectionClassName="relative z-10 w-full pt-[clamp(8rem,14vw,14rem)] ">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
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
            <div className="relative mt-12 w-full block">
              <GuestBookForm user={user} signInWithGithub={signInWithGithub} />
            </div>
          </div>
          {/* right column */}
          <div className="lg:col-span-6 lg:col-start-8 lg:pb-8">
            <GuestBookEntries
              entries={entriesWithLikes}
              currentUserId={user?.id ?? null}
            />
          </div>
        </div>
      </BaseSection>
    </PageLayout>
  );
}
