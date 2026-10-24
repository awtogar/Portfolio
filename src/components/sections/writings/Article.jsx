import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/sections/writings/mdx/MdxComponents';

export default function Article({ writing }) {
  return (
    <div className="mdx">
      <MDXRemote source={writing.content} components={mdxComponents} />
    </div>
  );
}
