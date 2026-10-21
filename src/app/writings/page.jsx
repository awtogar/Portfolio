import Image from 'next/image';
import Link from 'next/link';
import { BaseSection } from '@/components';
import WritingsInteractive from '@/components/sections/writings-detail/WritingsInteractive';
import { getAllWritings } from '@/lib/writings';

export const metadata = {
  title: 'Writings | Awaluddin Togar',
  description: 'Notes, reflections, and breakdowns on design and development.',
};

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
  img: ({ src = '', alt = '' }) => <Image className="mdx-img" src={src} alt={alt} width={1200} height={675} sizes="(min-width: 768px) 720px, 100vw" />,
  video: props => <video className="mdx-video" {...props} />,
};

export default function WritingsPage() {
  const writings = getAllWritings();

  return (
    <main>
      <BaseSection
        sectionClassName="section-padding-x py-[clamp(8rem,14vw,14rem)]"
        containerClassName="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,2fr)] lg:gap-12"
      >
        <WritingsInteractive writings={writings} />
      </BaseSection>
    </main>
  );
}
