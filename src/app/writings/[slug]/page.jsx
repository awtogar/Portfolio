import { notFound } from "next/navigation";
import { BaseSection } from "@/components";
import { Article, DetailLayout } from "@/components/sections/writings";
import { getAllWritings, getWritingBySlug } from "@/lib/writings";

export function generateStaticParams() {
  return getAllWritings().map((writing) => ({ slug: writing.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);

  if (!writing) return {};

  return {
    title: `${writing.title} | Awaluddin Togar`,
    description: writing.description,
    openGraph: {
      title: writing.title,
      description: writing.description,
      images: writing.thumbnail ? [writing.thumbnail] : undefined,
    },
  };
}

export default async function WritingPage({ params }) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);

  if (!writing) notFound();

  return (
    <main>
      <BaseSection sectionClassName="section-padding-x pt-[clamp(8rem,14vw,14rem)]">
        <DetailLayout
          writing={writing}
          article={<Article writing={writing} />}
        />
      </BaseSection>
    </main>
  );
}
