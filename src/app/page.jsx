'use client';

import { Hero, Showreel, WhoAmI, Services, Process, SelectedWorks, Stack, Testimonial } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Showreel />
      <WhoAmI />
      <Services />
      <Process />
      <SelectedWorks />
      <Stack />
      {/* <Testimonial /> */}
    </>
  );
}
