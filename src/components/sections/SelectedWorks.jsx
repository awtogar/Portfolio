import React from 'react';
import { projects } from '@/data/data';
import { TextReveal, BaseSection } from '@/components';
import AnimatedCard, { CardMeta } from '@/components/AnimatedCard';
import Link from 'next/link';
import { cursorPresets } from '@/cursor';

import { RiArrowRightSLine } from '@remixicon/react';

const SelectedWorks = () => {
  const selectedWorks = projects.filter(project => project.selected);

  return (
    <BaseSection sectionID="works" sectionClassName="overflow-hidden relative section-padding-xy">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <TextReveal as="span">
            <span className="text-base display-bold uppercase text-fg">(SELECTED)</span>
          </TextReveal>
        </div>
        <div className="flex items-end justify-between w-full md:grid md:grid-cols-12 md:gap-4 lg:gap-6">
          <div className="md:col-span-6 lg:col-span-6 items-start justify-start">
            <TextReveal as="h2" style={{ lineHeight: '1.6', fontWeight: '600', letterSpacing: '-2%' }} className="text-display display-heading">
              WORK
            </TextReveal>
          </div>
          <div className="md:col-span-6 lg:col-span-6 flex items-end justify-end">
            <TextReveal as="h2" style={{ lineHeight: '1.6', fontWeight: '600', letterSpacing: '-2%' }} className="text-display display-heading">
              '25
            </TextReveal>
          </div>
        </div>
      </div>
      <ul className="flex flex-col w-full gap-2 pb-s500 lg:flex-row lg:gap-4 lg:pb-s600">
        {selectedWorks.map(work => (
          <AnimatedCard
            key={work.id}
            as="li"
            className="w-full lg:w-1/2"
            thumbnail={work.thumbnail}
            alt={work.title}
            reels={work.reels}
            to={`/projects/${work.slug}`}
            LinkComponent={Link}
          >
            <CardMeta client={work.client} type={work.type} year={work.date?.year} tags={work.tags} logo={work.logo} />
          </AnimatedCard>
        ))}
      </ul>

      <Link href="/projects" className="flex text-base items-center justify-center cursor-pointer group">
        <div {...cursorPresets.view} className="gap-1 flex items-center">
          <span>See all</span>
          <RiArrowRightSLine size={24} />
        </div>
      </Link>
    </BaseSection>
  );
};

export default SelectedWorks;
