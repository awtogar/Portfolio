import React from 'react';
import { CreativeButton, TextReveal, BaseSection, ParallaxImage, HeroBentoGrid } from '../../../components';
import { useCursorHoverContent } from '@/cursor';
import { site1 } from '../../../assets';

const HomeHeroSection = () => {
  const contactRef = useCursorHoverContent('arrow');
  const resumeRef = useCursorHoverContent('arrow');
  const HeroTextSplit = ['Well Good', 'Things', 'Dont Last'];

  return (
    <BaseSection containerID="welcome" sectionClassName="section-padding-hero">
      <div className="flex flex-col gap-s700 md:grid md:grid-cols-[55fr_40fr] md:gap-s200">
        <div className="flex flex-col gap-s700 md:gap-s800">
          <div className="flex flex-col gap-4">
            <TextReveal as="h1" lines={HeroTextSplit} className="text-display-sm leading-heading tracking-heading max-w-[18ch] font-[600] uppercase" />
            <TextReveal
              as="p"
              lines={['A multidisciplinary creative developer with designs and development background. Interested to explore and learn new things.']}
              className="text-base text-primary/60 leading-body"
              staggerDelay={0.2}
              startDelay={0.05}
            />
          </div>
          <div className="flex flex-row items-center gap-4 pb-4 md:gap-s400">
            <div className="w-full md:w-auto">
              <CreativeButton to="/contact" variant="fillReverse" ref={contactRef} size="lg" className="w-full md:w-auto min-w-[200px]">
                Get in touch
              </CreativeButton>
            </div>
            <div className="w-full md:w-auto flex justify-center">
              <CreativeButton
                href="https://drive.google.com/drive/folders/1FQxb0go777UcmJ2PuAbwEmcLEZdM7QEQ?usp=sharing"
                variant="transparent"
                target="_blank"
                rel="noopener noreferrer"
                ref={resumeRef}
                className="w-full md:w-auto"
              >
                <span>My Resume</span>
              </CreativeButton>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:h-full md:self-stretch">
          <ParallaxImage src={site1} alt="Hero" containerClassName="w-full h-full min-h-[70vh] rounded-2xl" scrollRange={['-5vh', '5vh']} />
        </div>
      </div>
    </BaseSection>
  );
};

export default HomeHeroSection;
