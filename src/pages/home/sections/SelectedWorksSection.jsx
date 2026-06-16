import React from 'react';
import { projects } from '@/data/projects';
import { TransitionLink, CreativeButton, TextReveal, BaseSection } from '@/components';
import AnimatedCard, { CardMeta } from '@/components/ui/AnimatedCard';

const SelectedWorksSection = () => {
  const selectedWorks = projects.filter(project => project.selected);
  const CURSOR_CONFIG = {
    content: 'view',
    size: 'large',
    textColor: 'text-primary',
    fill: 'secondary',
  };

  return (
    <BaseSection containerID="selected-works" sectionClassName="section-padding-xy relative overflow-hidden">
      <div className="flex flex-col mb-s200">
        <div className="flex items-center justify-between">
          <TextReveal preset="fadeUp" as="span" startDelay={0.25}>
            <span className="font-mono text-base-sm tracking-[0.12em] uppercase text-primary-muted">(selected)</span>
          </TextReveal>
        </div>
        <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            WORK
          </TextReveal>
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal as="h2" className="text-h100 heading-display font-bold">
              '25
            </TextReveal>
          </div>
        </div>
      </div>
      <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full pb-s600 lg:pb-s800">
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

      <div className="flex items-center justify-center">
        <CreativeButton
          data-cursor
          data-cursor-content="view"
          data-cursor-fill="primary"
          data-cursor-text-color="secondary"
          data-cursor-size="large"
          variant="transparent"
          to="/projects"
        >
          <span>See all projects</span>
        </CreativeButton>
      </div>
    </BaseSection>
  );
};

export default SelectedWorksSection;
