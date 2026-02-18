import React from 'react';
import { works } from '../../../data/data';
import { CreativeButton, HoverRotate } from '../../../components';
import { RiArrowRightUpLine, RiCalendarLine, RiCodeSSlashLine } from '@remixicon/react';
import { ScrollAnimatedImg } from '../../../components';
import BaseSection from '../BaseSection';

const SelectedWorksSection = () => {
  return (
    <BaseSection id="selected-works" className="relative overflow-hidden">
      <div className="flex w-full flex-col gap-s500 text-primary mb-s500">
        <div className="flex flex-col gap-2">
          <span className="hsAccent">(selected)</span>
          <h2 className="text-h200">WORKS</h2>
        </div>
        <p>Explore a curated collection of my recent work, showcasing innovation and craftsmanship.</p>
      </div>
      {/* Masonry Two-Column Grid */}
      <div className="mb-8 md:mb-15 xl:mb-20 md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-15 xl:gap-x-20">
        {/* Left Column */}
        <div className="flex flex-col gap-y-10 lg:gap-y-20">
          {works
            .filter((_, i) => i % 2 === 0)
            .map((work, index) => (
              <article key={index} className="group relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <ScrollAnimatedImg
                    src={work.image}
                    alt={work.title}
                    containerClassName="w-full aspect-[4/5]"
                    imageClassName="object-cover w-full h-full rounded-2xl"
                    scrollRange={['0%', '12%']}
                    offset={['start end', 'end start']}
                  />
                </div>
                <div className="pt-s500 space-y-s300">
                  <h3 className="text-primary text-h400 leading-tight">{work.title}</h3>
                  <p className="text-primary/60 leading-relaxed">{work.description}</p>
                  <div className="pt-s200">
                    <p className="text-primary/80 font-medium">{work.client || work.title}</p>
                    <p className="text-primary/50 text-sm">{work.role || 'Creative Developer'}</p>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Right Column — offset downward to create stagger */}
        <div className="flex flex-col gap-y-10 lg:gap-y-20 mt-[clamp(200px,25vw,500px)] max-md:mt-10">
          {works
            .filter((_, i) => i % 2 === 1)
            .map((work, index) => (
              <article key={index} className="group relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <ScrollAnimatedImg
                    src={work.image}
                    alt={work.title}
                    containerClassName="w-full aspect-[4/5]"
                    imageClassName="object-cover w-full h-full rounded-2xl"
                    scrollRange={['0%', '12%']}
                    offset={['start end', 'end start']}
                  />
                </div>
                <div className="pt-s500 space-y-s300">
                  <h3 className="text-primary text-h400 leading-tight">{work.title}</h3>
                  <p className="text-primary/60 leading-relaxed">{work.description}</p>
                  <div className="pt-s200">
                    <p className="text-primary/80 font-medium">{work.client || work.title}</p>
                    <p className="text-primary/50 text-sm">{work.role || 'Creative Developer'}</p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>

      {/* CTA to View All Projects */}
      <div className="flex flex-col items-center">
        <div className="text-center items-center gap-s400">
          <span className="text-primary-muted/50 py-4 text-base-sm">Interested in seeing more?</span>
          <HoverRotate to="/projects" target="_blank" rel="noopener noreferrer" className="justify-center">
            <span className="text-primary/75">View All</span>
            <span className="flex items-center justify-center gap-1 text-primary">
              <span>Let's go</span>
              <RiArrowRightUpLine className="pt-1.5" size={26} />
            </span>
          </HoverRotate>
        </div>
      </div>
    </BaseSection>
  );
};

export default SelectedWorksSection;
