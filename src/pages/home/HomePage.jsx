import { HomeHeroSection, HomeIntroSection, HomeWhatIdoSection, HomeSelectedWorksSection } from './sections';

const HomePage = () => {
  return (
    <main className="page-container">
      <HomeHeroSection />
      <HomeIntroSection />
      <HomeWhatIdoSection />
      <HomeSelectedWorksSection />
    </main>
  );
};

export default HomePage;
