'use client';

import { Hero, Showreel, About, Services, Process, SelectedWorks, Stack, Testimonial } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Showreel />
      <About />
      <Services />
      <Process />
      <SelectedWorks />
      <Stack />
      {/* <Testimonial /> */}
    </>
  );
}
