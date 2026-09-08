import React from 'react';
import { projects } from '@/data/data';
import { CreativeButton, TextReveal, BaseSection, TransitionLink, HeadLineLabel } from '@/components';
import AnimatedCard, { CardMeta } from '@/components/ui/AnimatedCard';

import { RiArrowRightSLine } from '@remixicon/react';

const SelectedWorks = () => {
  const selectedWorks = projects.filter(project => project.selected);

  return (
    <BaseSection sectionID="works" sectionClassName="overflow-hidden relative section-padding-xy">
      <HeadLineLabel label="(SELECTED)" headline="WORK" headlineSuffix="'25" />
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
            LinkComponent={TransitionLink}
          >
            <CardMeta client={work.client} type={work.type} year={work.year} tags={work.tags} logo={work.logo} />
          </AnimatedCard>
        ))}
      </ul>

      <TransitionLink
        data-cursor
        data-cursor-content="view"
        data-cursor-fill="primary"
        data-cursor-text-color="secondary"
        to="/projects"
        className="flex items-center justify-center gap-1 cursor-pointer group"
      >
        <span>See all</span>
        <RiArrowRightSLine size={24} />
      </TransitionLink>
    </BaseSection>
  );
};

export default SelectedWorks;
