import React from 'react';
import { RiGeminiFill } from '@remixicon/react';
import { HoverVideoCard, CircularText, TextReveal, CreativeButton, BaseSection } from '@/components';
import { aboutHeroImg } from '@/assets';
import { useCursorHoverContent } from '@/cursor';

const HeroSection = () => {
  const resumeRef = useCursorHoverContent('arrow');

  return (
    <BaseSection sectionClassName="pt-section pb-s200 section-padding-x">
      <div className="flex flex-col gap-s700 md:gap-s800 md:pt-12">
        <div className="relative overflow-hidden">
          <HoverVideoCard
            src={aboutHeroImg}
            scrollRange={['0%', '15%']}
            alt="About — portrait"
            containerClassName="w-full h-[428px] md:h-[682px] lg:h-[912px] rounded-2xl overflow-hidden"
            imageClassName="object-cover object-top w-full h-full rounded-2xl"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden">
            <CircularText
              text="MADE*NOT*BORN*"
              onHover="slowDown"
              className="text-secondary dark:text-primary"
              centerClassName="bg-neutral-100"
              centerIcon={<RiGeminiFill className="text-secondary dark:text-primary" size={48} />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-s500">
          <TextReveal as="h1" lines={['A Creative Developer', '& Web Designer']} className="text-display-sm leading-heading tracking-heading max-w-[18ch] font-[600] uppercase" />
          <TextReveal
            as="p"
            lines={['I help global brands bring their ideas to life with impactful solutions and keep their brand identity.']}
            className="text-base text-primary/60 leading-body"
            staggerDelay={0.2}
            startDelay={0.05}
          />
        </div>

        <div className="flex flex-row items-center gap-4 md:gap-s400">
          <div className="w-full md:w-auto">
            <CreativeButton ref={resumeRef} to="/contact" variant="fillReverse" size="lg" className="w-full md:w-auto min-w-[200px]">
              See my resume
            </CreativeButton>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default HeroSection;
