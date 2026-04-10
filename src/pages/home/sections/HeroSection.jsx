import React from 'react';
import { CreativeButton } from '../../../components';
import BaseSection from '../../../components/common/BaseSection';
import { useCursorHoverContent } from '@/hooks/useCursorInteraction';

const HeroSection = () => {
  const contactRef = useCursorHoverContent('arrow');
  const resumeRef = useCursorHoverContent('arrow');

  return (
    <BaseSection containerID="hero" sectionClassName="section-padding-hero">
      <div className="flex flex-col gap-s700 md:gap-s800">
        <div className="flex flex-col gap-s500">
          <h1 className="text-h100 leading-heading tracking-heading max-w-[18ch]">A Good things its was made not born.</h1>
          <p className="text-base text-primary/60 leading-body">
            A multidisciplinary creative developer with designs and development background. Interested to explore and learn new things.
          </p>
        </div>

        <div className="flex items-center gap-s400">
          <div className="flex-1 lg:flex-none lg:min-w-[200px]">
            <CreativeButton to="/contact" variant="fillReverse" ref={contactRef}>
              Get in touch
            </CreativeButton>
          </div>
          <div className="flex-shrink-0">
            <CreativeButton
              href="https://drive.google.com/drive/folders/1FQxb0go777UcmJ2PuAbwEmcLEZdM7QEQ?usp=sharing"
              variant="transparent"
              target="_blank"
              rel="noopener noreferrer"
              ref={resumeRef}
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
