import React from 'react';
import { projects } from '@/data/projects';
import { TransitionLink, CreativeButton, TextReveal, AnimatedCard } from '../../../components';
import BaseSection from '../../../components/common/BaseSection';
import { useCursorInteraction } from '@/cursor';

const MarqueeTags = ({ tags = [], speed = 20 }) => {
  const tagsIndex = tags.join(', ') + ', ';
  return (
    <div className="flex items-center h-4 md:h-4.5 overflow-hidden relative w-full">
      <div className="absolute left-0 h-full w-8 lg:w-10 bg-gradient-to-r from-neutral-900 dark:from-neutral-50 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 h-full w-8 lg:w-10 bg-gradient-to-l from-neutral-900 dark:from-neutral-50 to-transparent pointer-events-none z-10" />
      <div className="flex whitespace-nowrap animate-marquee" style={{ '--marquee-speed': `${speed}s` }}>
        {[0, 1].map(copy => (
          <span key={copy} className="text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase shrink-0 pr-1.5">
            {tagsIndex.repeat(5)}
          </span>
        ))}
      </div>
    </div>
  );
};

const WorkCardMeta = ({ work }) => {
  const LogoComponent = work.logo;
  const isLogoComponent = typeof LogoComponent === 'function' || typeof LogoComponent === 'object';

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-6 h-6 md:w-10 md:h-10 px-1 py-1 md:px-2 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-100 overflow-hidden text-primary dark:text-primary">
            {LogoComponent ? (
              isLogoComponent ? (
                <LogoComponent className="w-full h-full" />
              ) : (
                <img src={LogoComponent} alt={`${work.client} logo`} className="w-full h-full object-contain" />
              )
            ) : (
              <span className="text-xs text-neutral-100">{work.client?.charAt(0) || 'W'}</span>
            )}
          </div>
          <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-100 tracking-wide">{work.client || work.title}</p>
        </div>
        <div className="flex gap-3 lg:gap-5">
          <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-300 tracking-wide">{work.type || work.role || 'Portfolio'}</p>
          <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-300 tracking-wide">{work.year || '2025'}</p>
        </div>
      </div>
      <MarqueeTags tags={work.tags || []} />
    </div>
  );
};

const cursorConfig = {
  content: 'view',
  size: 'medium',
  textColor: 'text-primary',
  fill: 'bg-neutral-200',
};

const SelectedWorksSection = () => {
  const selectedWorks = projects.filter(project => project.selected);
  const { targetRef: seeAllButtonRef } = useCursorInteraction(cursorConfig);

  return (
    <BaseSection containerID="selected-works" sectionClassName="section-padding-xy relative overflow-hidden">
      <div className="flex flex-col gap-s300 mb-s600 lg:mb-s700">
        <div className="flex items-center justify-between">
          <span className="text-base">(selected)</span>
        </div>
        <div className="flex items-end justify-between w-full">
          <TextReveal
            lines={['WORK']}
            style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}
            className="font-[700] tracking-[-0.03em] leading-[0.85] uppercase"
            staggerDelay={0.06}
            startDelay={0.1}
            as="span"
          />

          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal
              lines={['25']}
              style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}
              className="font-[700] tracking-[-0.03em] leading-[0.85] uppercase"
              staggerDelay={0.06}
              startDelay={0.1}
              as="span"
            />
          </div>
        </div>
        <div className="h-px w-full bg-primary/10" />
      </div>

      <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full mb-s600 lg:mb-s800">
        {selectedWorks.map(work => (
          <AnimatedCard
            key={work.id}
            as="li"
            className="w-full lg:w-1/2"
            thumbnail={work.thumbnail}
            alt={work.title}
            video={work.video}
            to={`/projects/${work.slug}`}
            cursor={cursorConfig}
            LinkComponent={TransitionLink}
          >
            <WorkCardMeta work={work} />
          </AnimatedCard>
        ))}
      </ul>

      <div ref={seeAllButtonRef} className="flex items-center justify-center">
        <CreativeButton to="/projects" variant="transparent" rel="noopener noreferrer">
          <span>See all projects</span>
        </CreativeButton>
      </div>
    </BaseSection>
  );
};

export default SelectedWorksSection;
