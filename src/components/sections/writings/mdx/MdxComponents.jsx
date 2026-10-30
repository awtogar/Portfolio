import Link from 'next/link';
import Image from 'next/image';

function MdxLink({ href = '', children, ...props }) {
  const isExternal = /^(https?:)?\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

export const mdxComponents = {
  h1: props => <h1 className="mdx-h1" {...props} />,
  h2: props => <h2 className="mdx-h2" {...props} />,
  h3: props => <h3 className="mdx-h3" {...props} />,
  h4: props => <h4 className="mdx-h4" {...props} />,
  p: props => <p className="mdx-p" {...props} />,
  a: props => <MdxLink className="mdx-a" {...props} />,
  code: props => <code className="mdx-code" {...props} />,
  pre: props => <pre className="mdx-pre" {...props} />,
  blockquote: props => <blockquote className="mdx-blockquote" {...props} />,
  ul: props => <ul className="mdx-ul" {...props} />,
  ol: props => <ol className="mdx-ol" {...props} />,
  li: props => <li className="mdx-li" {...props} />,
  hr: props => <hr className="mdx-hr" {...props} />,
  table: props => (
    <div className="mdx-table-wrap">
      <table className="mdx-table" {...props} />
    </div>
  ),
  th: props => <th className="mdx-th" {...props} />,
  td: props => <td className="mdx-td" {...props} />,
  img: ({ src = '', alt = 'Article image' }) => <Image className="mdx-img" src={src} alt={alt} width={1200} height={675} sizes="(min-width: 768px) 720px, 100vw" />,
  video: props => <video className="mdx-video" {...props} />,
};
