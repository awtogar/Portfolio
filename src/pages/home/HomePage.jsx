import { HeroSection, ShowreelSection, WhoamiSection, ServicesSection, StatSection, ProcessSection, SelectedWorksSection, LetterScrollSection, TestimonialSection } from './sections';

const HomePage = () => {
  return (
    <main className="page-container">
      <HeroSection /> {/* Done */}
      <ShowreelSection /> {/* Done */}
      <WhoamiSection /> {/* Done */}
      <ServicesSection /> {/* H-04 */}
      <StatSection />
      <ProcessSection /> {/* H-06 */}
      <SelectedWorksSection /> {/* H-07 */}
      <LetterScrollSection/>
      <TestimonialSection /> {/* H-08 */}
    </main>
  );
};

export default HomePage;
