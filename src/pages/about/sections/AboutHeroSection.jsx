import { placeholder } from '@/assets';
import { BaseSection, TextReveal } from '@/components';
import React from 'react';

const AboutHeroSection = () => {
  return (
    <BaseSection as="section" containerID="about-hero" sectionClassName="min-h-svh flex items-center justify-center px-4 py-16" containerClassName="max-w-[620px]">
      <div className="flex flex-col items-center justify-center gap-20 w-full">
        <TextReveal isHero as="h1" className="w-full text-center text-base-lg text-neutral-600 lg:text-[2.7vw] leading-[0.92] tracking-[-0.045em] font-[500] uppercase">
          I'm Awaluddin Togar — a 24 year old creative developer building digital experiences that feel the sense of touch — not just function.
        </TextReveal>
        <div className="flex justify-center w-full">
          <div className="relative w-[72vw] max-w-[320px] overflow-hidden rounded-sm">
            <img src={placeholder} alt="" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
        <TextReveal isHero as="p" startDelay={0.45} className="text-center text-base-lg text-neutral-600 lg:text-[2.7vw] leading-[0.92] tracking-[-0.045em] font-[500] uppercase">
          Between design, code, and emotion, I craft projects that leave a trace. Currently freelancing, always exploring.
        </TextReveal>
      </div>
    </BaseSection>
  );
};

export default AboutHeroSection;
