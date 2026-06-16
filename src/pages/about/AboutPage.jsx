import React from 'react';

import { AboutHeroSection, AboutApproachSection, AboutSkillsSection, AboutImageRevealSection, AboutEducationSection, AboutCurrentlySection, AboutExperienceSection} from './sections';

const AboutPage = () => {
  return (
    <main className="page-container">
      <AboutHeroSection /> {/* A-01 */}
      <AboutApproachSection /> {/* A-02 */}
      <AboutSkillsSection /> {/* A-03 */}
      <AboutImageRevealSection /> {/* DECORATION */}
      <AboutEducationSection /> {/* A-04 */}
      <AboutCurrentlySection /> {/* A-05 */}
      <AboutExperienceSection /> {/* A-07 */}
    </main>
  );
};

export default AboutPage;
