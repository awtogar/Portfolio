import React from 'react';
import { RiGeminiFill, RiHand } from '@remixicon/react';
import BaseSection from '../../../components/commons/BaseSection';
import { CustomCard, CircularText, CreativeButton } from '../../../components';
import { aboutHeroImg } from '@/assets';
import { useCursorHoverContent } from '../../../hooks/useCursorHoverContent';

const AboutHero = () => {
  const resumeRef = useCursorHoverContent('arrow');

  return (
    <BaseSection sectionClassName="section-padding-hero">
      <div className="flex flex-col gap-s700 lg:gap-s800">
        <div className="relative overflow-hidden">
          <CustomCard
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

        <div className="flex flex-col gap-s600 max-w-3xl">
          <p className="flex items-center gap-s200 text-base text-primary/55">
            Hey! It's me Togar,
            <RiHand size={20} />
          </p>

          <div className="flex flex-col gap-s400">
            <h1 className="text-h200 leading-heading tracking-heading">A Creative Developer &amp; Web Designer</h1>
            <p className="text-base max-w-[42ch] text-primary/55 leading-body">
              I help global brands bring their ideas to life with impactful solutions and keep their brand identity.
            </p>
          </div>

          <div className="w-full max-w-[200px]">
            <CreativeButton ref={resumeRef} to="/contact" variant="outline">
              See my resume
            </CreativeButton>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutHero;
