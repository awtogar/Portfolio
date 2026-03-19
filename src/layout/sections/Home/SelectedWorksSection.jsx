import React from 'react';
import { works } from '../../../data/data';
import { HoverRotate, TransitionLink } from '../../../components';
import { RiArrowRightUpLine } from '@remixicon/react';
import { ScrollAnimatedImg } from '../../../components';
import BaseSection from '../BaseSection';
import { useCursorHover } from '../../../hooks/useCursorHover';


const WorkCard = ({ work, index }) => {
  const cardRef = useCursorHover('arrow');

  return (
    <article className="group relative">
      <TransitionLink to={`/projects/${work.slug}`} className="block">
        <div ref={cardRef} className="relative overflow-hidden rounded-2xl">
          <ScrollAnimatedImg
            src={work.image}
            alt={work.title}
            containerClassName="w-full aspect-[4/5]"
            imageClassName="object-cover w-full h-full rounded-2xl"
            scrollRange={['0%', '12%']}
            offset={['start end', 'end start']}
          />
        </div>

        <div className="pt-s500 flex flex-col gap-s300">
          <div className="flex items-baseline gap-s300">
            <span className="shrink-0 font-mono text-base-sm tracking-label text-primary/40">
              ({String(index + 1).padStart(2, '0')})
            </span>
            <h3 className="text-h400 text-primary leading-heading tracking-heading">
              {work.title}
            </h3>
          </div>

          <p className="text-base text-primary/55 leading-body">
            {work.description}
          </p>

          <div className="flex items-center justify-between pt-s200 border-t border-border">
            <span className="text-base-sm text-primary/75">
              {work.client || work.title}
            </span>
            <span className="text-base-sm tracking-label uppercase text-primary/40">
              {work.role || 'Creative Developer'}
            </span>
          </div>
        </div>
      </TransitionLink>
    </article>
  );
};

const SelectedWorksSection = () => {
  return (
    <BaseSection containerID="selected-works" sectionClassName="section-padding-xy relative overflow-hidden">
      <div className="flex flex-col gap-s500 mb-s700">
        <div className="flex flex-col gap-s200">
          <span className="hsAccent">(selected)</span>
          <h2 className="text-h200 uppercase leading-heading tracking-heading">
            Works
          </h2>
        </div>

        <p className="text-base max-w-[48ch] text-primary/55 leading-body">
          Explore a curated collection of my recent work, showcasing innovation and craftsmanship.
        </p>
      </div>

      <div className="w-full h-px mb-s700 bg-border" />

      <div className="mb-s800 md:grid md:grid-cols-2 gap-x-s700 lg:gap-x-s800">
        <div className="flex flex-col gap-s800">
          {works
            .filter((_, i) => i % 2 === 0)
            .map((work, index) => (
              <WorkCard key={work.id} work={work} index={index * 2} />
            ))}
        </div>

        <div className="flex flex-col max-md:mt-s700 gap-s800 mt-[clamp(160px,20vw,400px)]">
          {works
            .filter((_, i) => i % 2 === 1)
            .map((work, index) => (
              <WorkCard key={work.id} work={work} index={index * 2 + 1} />
            ))}
        </div>
      </div>

      <div className="w-full h-px mb-s600 bg-border" />

      <div className="flex flex-col items-center gap-s300">
        <span className="text-base-sm text-primary/40 tracking-body">
          Interested in seeing more?
        </span>

        <HoverRotate to="/projects" rel="noopener noreferrer" className="justify-center">
          <span className="text-primary/65">
            View All
          </span>
          <span className="flex items-center gap-1 text-primary">
            <span>Let's go</span>
            <RiArrowRightUpLine size={20} style={{ marginTop: '2px' }} />
          </span>
        </HoverRotate>
      </div>
    </BaseSection>
  );
};

export default SelectedWorksSection;
