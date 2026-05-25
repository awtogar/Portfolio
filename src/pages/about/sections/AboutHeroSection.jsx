import React from 'react';
import { RiGeminiFill } from '@remixicon/react';
import { Card, CircularText, TextReveal, CreativeButton, BaseSection } from '@/components';
import { site22 } from '../../../assets';
import { useCursorHoverContent } from '@/cursor';

const AboutHeroSection = () => {
  const resumeRef = useCursorHoverContent('arrow');

  return (
    <BaseSection sectionClassName="section-padding-hero">
      {/* ── Mobile ── */}
      <div className="flex flex-col gap-s400 md:hidden">
        <TextReveal as="h1" lines={['Awaluddin,', 'Togar']} className="text-display-sm leading-heading tracking-heading font-[600] uppercase" />
        <div className="relative overflow-hidden">
          <Card
            src={site22}
            scrollRange={['0%', '15%']}
            alt="About — portrait"
            containerClassName="w-full h-[60svh] md:h-[50svh] rounded-none overflow-hidden"
            imageClassName="object-cover object-top w-full h-full"
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

        <div className="border-t border-primary/10 pt-s300">
          <CreativeButton ref={resumeRef} to="/contact" variant="fillReverse" size="lg" className="w-full">
            Resume →
          </CreativeButton>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex md:flex-col">
        {/* top */}
        <div className="flex items-center justify-center gap-s200">
          <TextReveal as="h1" lines={['Awaluddin']} className="text-display leading-heading tracking-heading font-[600] uppercase" lineClassName="pb-[0.15em]" />
          <TextReveal as="h1" lines={['Togar']} className="text-display leading-heading tracking-heading font-[600] uppercase" lineClassName="pb-[0.15em]" />
        </div>
        <div className="flex gap-s300 pt-s400 items-stretch">
          <div className="flex flex-col justify-between max-w-1/2">
            <div className="flex flex-col gap-s150 w-full pt-6">
              <TextReveal as="p" lines={['(A Creative Developer)']} className="text-base text-primary/50" />
              <TextReveal as="p" lines={['Building at the edge of design and code fast, intentional, and never generic.']} className="text-base-lg text-primary/60 leading-body" />
            </div>
            <div className="w-full pt-s600">
              <CreativeButton ref={resumeRef} to="/contact" variant="fillReverse" size="lg" className="min-w-[180px]">
                Resume
              </CreativeButton>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden flex max-w-1/2">
            <Card src={site22} scrollRange={['0%', '15%']} alt="About — portrait" />
            <div className="absolute bottom-4 right-4 scale-75 opacity-80">
              <CircularText
                text="MADE*NOT*BORN*"
                onHover="slowDown"
                className="text-secondary dark:text-primary"
                centerClassName="bg-neutral-100"
                centerIcon={<RiGeminiFill className="text-secondary dark:text-primary" size={32} />}
              />
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutHeroSection;
