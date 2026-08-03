'use client';

import { useInitialLoad } from '@/hooks';
import {
  HeroSection,
  ShowreelSection,
  WhoamiSection,
  ServicesSection,
  ProcessSection,
  SelectedWorksSection,
  StackSection,
  TestimonialSection,
} from '@/components/sections';

export default function HomePage() {
  useInitialLoad();

  return (
    <>
      <HeroSection />
      <ShowreelSection />
      <WhoamiSection />
      <ServicesSection />
      <ProcessSection />
      <SelectedWorksSection />
      <StackSection />
      <TestimonialSection />
    </>
  );
}
