import { notFound } from 'next/navigation';
import { BaseSection } from '@/components';
import { getAllWritings, getRelatedWritings, getWritingBySlug } from '@/lib/writings';
import WritingArticle from '../../../components/sections/writings-detail/WritingArticle';

export function generateStaticParams() {
  return getAllWritings().map(writing => ({ slug: writing.slug }));
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

function formatDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateValue;

  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default async function WritingPage({ params }) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);

  if (!writing) notFound();

  const relatedWritings = getRelatedWritings(slug);

  return (
    <main>
      <BaseSection sectionClassName="section-padding-x py-[clamp(8rem,14vw,14rem)]" containerClassName="w-full max-w-[1100px]">
        <header className="max-w-[900px]">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-base-sm uppercase text-fg/60">
            {writing.tags?.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
            <span>{formatDate(writing.date)}</span>
            <span>{writing.readTime}</span>
          </div>

          <h1 className="mt-8 max-w-[900px] text-h300 md:text-h100 font-[600] uppercase leading-[1.05]">{writing.title}</h1>

          <p className="mt-6 max-w-[60ch] text-base leading-body text-fg/70">{writing.description}</p>

          {writing.thumbnail && <img src={writing.thumbnail} alt="" className="mt-12 aspect-[16/9] w-full object-cover" />}
        </header>

        <div className="mx-auto mt-16 max-w-[720px] md:mt-24">
          <WritingArticle writing={writing} />
        </div>

        {relatedWritings.length > 0 && (
          <section className="mt-24 border-t border-fg/20 pt-8 md:mt-40">
            <p className="text-base-sm uppercase text-fg/60">Read more writings</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedWritings.map(related => (
                <a key={related.slug} href={`/writings/${related.slug}`} className="group border-b border-fg/20 pb-5">
                  <p className="text-base-sm uppercase text-fg/60">{formatDate(related.date)}</p>
                  <h2 className="mt-3 text-h500 uppercase leading-[1.1] transition-transform duration-500 group-hover:translate-x-2">{related.title}</h2>
                </a>
              ))}
            </div>
          </section>
        )}
      </BaseSection>
    </main>
  );
}
