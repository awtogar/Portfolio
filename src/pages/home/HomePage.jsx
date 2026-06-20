import {
  HeroSection,
  ShowreelSection,
  WhoamiSection,
  ServicesSection,
  StackSection,
  ProcessSection,
  SelectedWorksSection,
  TestimonialSection,
} from './sections';

const HomePage = () => {
  return (
    <main className="page-container">
      <HeroSection /> {/* Done */}
      <ShowreelSection /> {/* Done */}
      <WhoamiSection /> {/* Done */}
      <ServicesSection /> {/* H-04 */}
      <ProcessSection /> {/* H-06 */}
      <SelectedWorksSection /> {/* H-07 */}
      <StackSection />
      <TestimonialSection /> {/* H-08 */}
    </main>
  );
};

export default HomePage;
