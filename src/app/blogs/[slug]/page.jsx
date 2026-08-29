import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllBlogs, getBlogBySlug } from '@/lib/blogs';
import NotFoundPage from '@/components/sections/404';
import { BaseSection, TextReveal } from '@/components';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.data.title} — Awaluddin Togar`,
    description: blog.data.description ?? '',
  };
}

export function generateStaticParams() {
  return getAllBlogs().map(blog => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) return <NotFoundPage />;

  return (
    <BaseSection sectionID="blog-detail" sectionClassName="section-padding-xy" containerClassName="max-w-[680px]">
      <div className="flex flex-col pt-s600">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 mb-s600 text-base-sm font-[450] leading-body tracking-body text-primary-muted">
          <Link href="/blogs" className="hover:text-primary transition-colors duration-200">
            Writing
          </Link>
          <span className="text-primary/30">/</span>
          <span className="text-primary">{blog.data.title}</span>
        </nav>

        {/* Title */}
        <TextReveal
          as="h1"
          className="text-h300 font-serif font-[600] leading-heading tracking-heading mb-s600"
        >
          {blog.data.title}
        </TextReveal>

        {/* Body */}
        <div className="prose-blog">
          <MDXRemote source={blog.content} />
        </div>
      </div>
    </BaseSection>
  );
}
