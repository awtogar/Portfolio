import React from 'react';
import { RiGeminiFill } from '@remixicon/react';
import { HoverVideoCard, CircularText, TextReveal, CreativeButton, BaseSection } from '@/components';
import { site1 } from '@/assets';
import { useCursorHoverContent } from '@/cursor';

const AboutHeroSection = () => {
  const resumeRef = useCursorHoverContent('arrow');

  return (
    <BaseSection sectionClassName="section-padding-hero">
      {/* ── Mobile ── */}
      <div className="flex flex-col gap-s400 md:hidden">
        <TextReveal as="h1" lines={['Awaluddin,', 'Togar']} className="text-display-sm leading-heading tracking-heading font-[600] uppercase" />

        <div className="relative overflow-hidden">
          <HoverVideoCard
            src={site1}
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
      <div className="hidden md:flex md:flex-row md:min-h-screen md:items-center">
        {/* Left — takes remaining width, content vertically centered */}
        <div className="flex-1 flex flex-col gap-s400 pr-s600">
          <TextReveal as="h1" lines={['Awaluddin,', 'Togar']} className="text-display-sm leading-heading tracking-heading font-[600] uppercase" />
          <div className="flex flex-col gap-s100 border-t border-primary/10 pt-s300">
            <TextReveal as="p" lines={['(A Creative Developer)']} className="text-sm text-primary/55 leading-body" staggerDelay={0.2} startDelay={0.05} />
            <TextReveal
              as="p"
              lines={['Building at the edge of design and code —', 'fast, intentional, and never generic.']}
              className="text-sm text-primary/55 leading-body max-w-[36ch]"
              staggerDelay={0.2}
              startDelay={0.05}
            />
          </div>
          <div className="flex flex-row items-center justify-between gap-4 border-t border-primary/10 pt-s300">
            <CreativeButton ref={resumeRef} to="/contact" variant="fillReverse" size="lg" className="min-w-[200px]">
              Resume →
            </CreativeButton>
          </div>
        </div>

        {/* Right — image bleeds top and right edge */}
        <div className="relative self-stretch ] w-[46%] shrink-0">
          <div className="relative h-full">
            <HoverVideoCard
              src={site1}
              scrollRange={['0%', '15%']}
              alt="About — portrait"
              containerClassName="w-full rounded-l-2xl overflow-hidden"
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
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutHeroSection;
