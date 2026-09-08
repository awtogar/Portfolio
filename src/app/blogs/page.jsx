import Link from 'next/link';
import { getAllBlogs } from '@/lib/blogs';
import { BaseSection, TextReveal, TransitionLink } from '@/components';
import { cursorPresets } from '@/cursor';
import { RiArrowRightLine } from '@remixicon/react';

export const metadata = {
  title: 'Blogs',
  description: 'Thoughts, notes, and ideas on design, engineering, and the things in between.',
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <BaseSection sectionID="blogs" sectionClassName="section-padding-xy">
      {/* layout on mobile */}
      {/* Writing list */}
      <div className="flex flex-col gap-0">
        <div>
          <TextReveal as="span" className="block text-base-xs font-[450] leading-body tracking-body text-primary-muted uppercase font-mono mb-s400">
            Writing
          </TextReveal>

          {blogs.length === 0 ? (
            <TextReveal as="p" className="text-base-sm text-primary-muted leading-body">
              No posts yet — stay tuned.
            </TextReveal>
          ) : (
            <ul className="flex flex-col">
              {blogs.map((blog, i) => (
                <li key={blog.slug ?? i}>
                  <TransitionLink
                    to={`/blogs/${blog.slug}`}
                    className="group flex items-baseline gap-s500 py-s200 hover:bg-primary/[0.03] transition-colors duration-150 -mx-2 px-2 rounded-sm"
                    {...cursorPresets.read}
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
                  </TransitionLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </BaseSection>
  );
}
