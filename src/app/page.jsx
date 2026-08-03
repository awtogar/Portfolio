'use client';

import { useInitialLoad } from '@/hooks';
import {
  Hero,
  Showreel,
  WhoAmI,
  Services,
  Process,
  SelectedWorks,
  Stack,
  Testimonial,
} from '@/components/sections';

export default function HomePage() {
  useInitialLoad();

  return (
    <>
      <Hero />
      <Showreel />
      <WhoAmI />
      <Services />
      <Process />
      <SelectedWorks />
      <Stack />
      <Testimonial />
    </>
  );
}
