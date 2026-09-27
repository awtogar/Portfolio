'use client';

import { Hero, Showreel, About, Services, Process, SelectedWorks, Stack } from '@/components/sections';
import { Footer } from '@/components';

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
      <Footer />
    </>
  );
}
