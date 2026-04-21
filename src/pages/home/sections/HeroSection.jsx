import React from 'react';
import { CreativeButton } from '../../../components';
import BaseSection from '../../../components/common/BaseSection';
import { useCursorHoverContent } from '@/hooks/useCursorInteraction';

const HeroSection = () => {
  const contactRef = useCursorHoverContent('arrow');
  const resumeRef = useCursorHoverContent('arrow');

  return (
    <BaseSection containerID="hero" sectionClassName="pt-section pb-s200 section-padding-x">
      <div className="flex flex-col gap-s700 md:gap-s800">
        <div className="flex flex-col gap-s500">
          <h1 className="text-display-sm leading-heading tracking-heading max-w-[18ch] font-[600] uppercase">A Good things its was made not born.</h1>
          <p className="text-base text-primary/60 leading-body">
            A multidisciplinary creative developer with designs and development background. Interested to explore and learn new things.
          </p>
        </div>

        <div className="flex flex-row items-center gap-4 md:gap-s400">
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
    </BaseSection>
  );
};

export default HeroSection;
