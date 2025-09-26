import React from 'react';
import { CreativeButton } from '../../../components';

const HeroSections = () => {
  return (
    <section id="hero" className="z-10 section-padding-hero">
      <div className="m-auto w-full lg:max-w-[1408px]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-s600">
            <h1 className="text-h100">A Good things is was made not born</h1>
            <p>I’m a multidisciplinary person within design and development background. Always interested to explore and learn new things.</p>
          </div>
          <div className="flex items-center gap-s400 pt-s600">
            <div className="flex-1">
              <CreativeButton to="/contact" variant={'fill'}>
                Get in touch
              </CreativeButton>
            </div>
            <div className="flex-shrink-0">
              <CreativeButton href="https://www.linkedin.com/in/awaluddintogar/" variant="outline" target="_blank" rel="noopener noreferrer">
                My resume
              </CreativeButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
