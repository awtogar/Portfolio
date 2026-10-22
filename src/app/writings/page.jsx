import { BaseSection } from '@/components';
import { WritingLayout } from '@/components/sections/writings-detail';
import { getAllWritings } from '@/lib/writings';

export const metadata = {
  title: 'Writings | Awaluddin Togar',
  description: 'Notes, reflections, and breakdowns on design and development.',
};

export default function WritingsPage() {
  const writings = getAllWritings();

  return (
    <main>
      <BaseSection
        sectionClassName="section-padding-x py-[clamp(8rem,14vw,14rem)]"
        containerClassName="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,2fr)] lg:gap-12"
      >
        <WritingLayout writings={writings} />
      </BaseSection>
    </main>
  );
}
