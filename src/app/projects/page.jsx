'use client';

import React from 'react';
import { projects } from '@/data/data';
import { BaseSection, TextReveal, TransitionLink } from '@/components';
import AnimatedCard, { CardMeta } from '@/components/ui/AnimatedCard';


export default function ProjectsPage() {
  return (
    <BaseSection sectionClassName="section-padding-hero lg:min-h-screen pt-4 lg:pt-6">
      <div className="flex flex-col gap-s700 lg:gap-s900 px-4 lg:px-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <TextReveal as="span" className="text-base" replayOnLoad startDelay={0.1}>
              (recent)
            </TextReveal>
          </div>
          <div className="flex items-end justify-between w-full flex-wrap">
            <TextReveal
              className="text-[clamp(3.5rem,8vw,6rem)] md:text-[clamp(5rem,7vw,8rem)] font-[700] tracking-[-0.03em] leading-[0.85] uppercase"
              as="span"
              replayOnLoad
              startDelay={0.2}
            >
              Project
            </TextReveal>
            <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
              <TextReveal
                className="text-[clamp(3.5rem,8vw,6rem)] md:text-[clamp(5rem,7vw,8rem)] font-[700] tracking-[-0.03em] leading-[0.85] uppercase"
                as="span"
                replayOnLoad
                startDelay={0.35}
              >
                25
              </TextReveal>
            </div>
          </div>
          <div className="h-px w-full bg-primary/10" />
        </div>
      </div>

      <div className="px-2 lg:px-4 pt-6 lg:py-4">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
          {projects.map(project => (
            <AnimatedCard
              key={project.id}
              as="li"
              // this reels are the video that showing over the card when hover
              reels={project.reels}
              thumbnail={project.thumbnail}
              alt={project.client}
              to={`/projects/${project.slug}`}
              LinkComponent={TransitionLink}
              imageContainerClassName="aspect-4/3 md:aspect-video lg:aspect-square"
            >
              <CardMeta client={project.client} type={project.type} year={project.year} tags={project.tags} logo={project.logo} />
            </AnimatedCard>
          ))}
        </ul>
      </div>
    </BaseSection>
  );
}
