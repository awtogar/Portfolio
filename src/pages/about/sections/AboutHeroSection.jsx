import { placeholder } from '@/assets';
import { BaseSection, TextReveal } from '@/components';
import React from 'react';

const AboutHeroSection = () => {
  return (
    <BaseSection as="section" containerID="about-hero" sectionClassName="h-screen flex items-center justify-center" containerClassName="max-w-[75vw]">
      <div className="flex flex-col items-center justify-center gap-16 w-full">
        <TextReveal isHero as="h1" className="w-full pt-14 text-center text-base-lg text-neutral-600 lg:text-[2.4vw] font-[500]">
          I'm Awaluddin Togar — a 24 year old creative developer building digital experiences that feel the sense of touch not just function.
        </TextReveal>
        <div className="flex justify-center w-full">
          <div className="relative w-[72vw] max-w-[320px] overflow-hidden rounded-sm">
            <img src={placeholder} alt="" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
        <TextReveal isHero as="p" startDelay={0.45} className="text-center text-base-lg text-neutral-600 lg:text-[2.7vw] font-[500]">
          Between design, code, and emotion, I craft projects that leave a trace.
        </TextReveal>
      </div>
    </BaseSection>
  );
};

export default AboutHeroSection;
