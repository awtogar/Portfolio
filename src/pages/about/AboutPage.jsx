import React from 'react';

import { AboutHeroSection, AboutTimelineSection, AboutImageRevealSection } from './sections';

const AboutPage = () => {
  return (
    <main className="page-container">
      <AboutHeroSection />
      <AboutTimelineSection />
      <AboutImageRevealSection />
    </main>
  );
};

export default AboutPage;
