import React from 'react';
import { CreativeButton } from '../../../components';
import BaseSection from '../BaseSection';
import { useCursorHover } from '../../../hooks/useCursorEffect';


const HeroSections = () => {
  const contactRef = useCursorHover('arrow');
  const resumeRef = useCursorHover('arrow');

  return (
    <BaseSection containerID="hero" sectionClassName="section-padding-hero">
      <div className="flex flex-col">
        <div className="flex flex-col gap-s600">
          <h1 className="text-h100">A Good things its was made not born.</h1>
          <p>A multidisciplinary creative developer with designs and development background. Interested to explore and learn new things.</p>
        </div>
        <div className="flex items-center gap-s400 pt-s600">
          <div className="flex-1 lg:flex-none lg:min-w-[200px]">
            <CreativeButton to="/contact" variant={'fill'} ref={contactRef}>
              Get in touch
            </CreativeButton>
          </div>
          <div className="flex-shrink-0">
            <CreativeButton
              href="https://drive.google.com/drive/folders/1FQxb0go777UcmJ2PuAbwEmcLEZdM7QEQ?usp=sharing"
              variant={'transparent'}
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

export default HeroSections;
