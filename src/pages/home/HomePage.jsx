import { HomeHeroSection, HomeIntroSection, HomeStatementSection, HomeWhatIdoSection, HomeSelectedWorksSection } from './sections';

const HomePage = () => {
  return (
    <main className="page-container">
      <HomeHeroSection />
      <HomeIntroSection />
      <HomeStatementSection />
      <HomeWhatIdoSection />
      <HomeSelectedWorksSection />
    </main>
  );
};

export default HomePage;
