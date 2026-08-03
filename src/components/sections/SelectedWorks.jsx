import React from 'react';
import { projects } from '@/data/projects';
import { CreativeButton, TextReveal, BaseSection, TransitionLink, HeadLineLabel } from '@/components';
import AnimatedCard, { CardMeta } from '@/components/ui/AnimatedCard';

import { RiArrowRightSLine } from '@remixicon/react';

const SelectedWorks = () => {
  const selectedWorks = projects.filter(project => project.selected);

  const CURSOR_CONFIG = {
    content: 'view',
    size: 'large',
    textColor: 'text-primary',
    fill: 'secondary',
  };

  return (
    <BaseSection sectionID="works" sectionClassName="section-padding-xy relative overflow-hidden">
      <HeadLineLabel label="selected" headline="WORK" headlineSuffix="'25" />
      <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full pb-s500 lg:pb-s600">
        {selectedWorks.map(work => (
          <AnimatedCard
            key={work.id}
            as="li"
            className="w-full lg:w-1/2"
            thumbnail={work.thumbnail}
            alt={work.title}
            video={work.video}
            to={`/projects/${work.slug}`}
            LinkComponent={TransitionLink}
            cursor={CURSOR_CONFIG}
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
        className="flex items-center justify-center gap-1 group cursor-pointer"
      >
        <span>See all</span>
        <RiArrowRightSLine size={24} />
      </TransitionLink>
    </BaseSection>
  );
};

export default SelectedWorks;
