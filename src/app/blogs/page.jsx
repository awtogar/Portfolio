import Link from 'next/link';
import { getAllBlogs } from '@/lib/blogs';
import { BaseSection, TextReveal } from '@/components';
import { RiArrowRightLine } from '@remixicon/react';

export const metadata = {
  title: 'Blogs — Awaluddin Togar',
  description: 'Thoughts, notes, and ideas on design, engineering, and the things in between.',
};

export default function BlogsPage() {
  const blogs = getAllBlogs();
  const latest = blogs[0] ?? null;

  return (
    <BaseSection sectionID="blogs" sectionClassName="section-padding-xy" containerClassName="max-w-[680px]">
      <div className="flex flex-col gap-0 pt-s600">
        {/* Latest */}
        {latest && (
          <div className="mb-s700">
            <TextReveal
              as="span"
              className="block text-base-xs font-[450] leading-body tracking-body text-primary-muted uppercase font-mono mb-s400"
            >
              Latest
            </TextReveal>

            <Link
              href={`/blogs/${latest.slug}`}
              className="group block"
              data-cursor
              data-cursor-content="read"
              data-cursor-fill="primary"
              data-cursor-text-color="secondary"
              data-cursor-size="large"
            >
              <TextReveal
                as="h1"
                startDelay={0.05}
                className="text-h400 font-serif font-[600] leading-heading tracking-heading mb-s200 group-hover:opacity-70 transition-opacity duration-300"
              >
                {latest.title}
              </TextReveal>

              <TextReveal
                as="p"
                startDelay={0.1}
                className="text-base-xs font-mono font-[450] text-primary-muted leading-body tracking-body mb-s300"
              >
                {latest.created
                  ? new Date(latest.created).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                  : '—'}
                {latest.readingTime ? ` · ${latest.readingTime} minute read` : ''}
              </TextReveal>

              {latest.description && (
                <TextReveal
                  as="p"
                  startDelay={0.12}
                  className="text-base-sm leading-body tracking-body text-primary-muted group-hover:text-primary transition-colors duration-300"
                >
                  {latest.description}
                  <span className="inline-flex items-center gap-1 ml-1 text-primary-muted group-hover:text-primary">
                    Keep reading <RiArrowRightLine size={13} />
                  </span>
                </TextReveal>
              )}
            </Link>
          </div>
        )}

        <hr className="border-primary/10 mb-s700" />

        {/* Writing list */}
        <div>
          <TextReveal
            as="span"
            className="block text-base-xs font-[450] leading-body tracking-body text-primary-muted uppercase font-mono mb-s400"
          >
            Writing
          </TextReveal>

          {blogs.length === 0 ? (
            <TextReveal
              as="p"
              className="text-base-sm text-primary-muted leading-body"
            >
              No posts yet — stay tuned.
            </TextReveal>
          ) : (
            <ul className="flex flex-col">
              {blogs.map((blog, i) => (
                <li key={blog.slug ?? i}>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="group flex items-baseline gap-s500 py-s200 hover:bg-primary/[0.03] transition-colors duration-150 -mx-2 px-2 rounded-sm"
                    data-cursor
                    data-cursor-content="read"
                    data-cursor-fill="primary"
                    data-cursor-text-color="secondary"
                    data-cursor-size="large"
                  >
                    <TextReveal
                      as="span"
                      startDelay={0.03 * i}
                      className="shrink-0 text-base-xs font-mono font-[450] leading-body tracking-body text-primary-muted tabular-nums w-[5.5rem]"
                    >
                      {blog.created
                        ? (() => {
                          const d = new Date(blog.created);
                          return `${d.getFullYear()} · ${String(d.getMonth() + 1).padStart(2, '0')}`;
                        })()
                        : '—'}
                    </TextReveal>

                    <TextReveal
                      as="span"
                      startDelay={0.03 * i + 0.03}
                      className="text-base-sm leading-body tracking-body font-[450] underline underline-offset-2 decoration-primary/20 group-hover:decoration-primary/60 transition-all duration-200"
                    >
                      {blog.title}
                    </TextReveal>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </BaseSection>
  );
}
