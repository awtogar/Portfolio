import React from 'react';
import { CreativeButton } from '../../../components';
import BaseSection from '../BaseSection';


const HeroSections = () => {
  return (
    <BaseSection containerID="hero" sectionClassName="section-padding-hero">
      <div className="flex flex-col">
        <div className="flex flex-col gap-s600">
          <h1 className="text-h100 ts-100">A Good things its was made not born.</h1>
          <p className="text-base ">A multidisciplinary creative developer with designs and development background. Interested to explore and learn new things.</p>
        </div>
        <div className="flex items-center gap-s400 pt-s600">
          <div className="flex-1">
            <CreativeButton to="/contact" variant={'fill'}>
              Get in touch
            </CreativeButton>
          </div>
          <div className="flex-shrink-0">
            <CreativeButton
              href="https://drive.google.com/drive/folders/1FQxb0go777UcmJ2PuAbwEmcLEZdM7QEQ?usp=sharing"
              variant={'transparent'}
              target="_blank"
              rel="noopener noreferrer"
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
