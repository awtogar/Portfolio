import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx/MdxComponents';

export default function WritingArticle({ writing }) {
  return (
    <div className="mdx">
      <MDXRemote source={writing.content} components={mdxComponents} />
    </div>
  );
}
