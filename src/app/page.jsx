'use client';

import { Hero, Showreel, About, Services, Process, SelectedWorks, Stack } from '@/components/sections';
import { Footer } from '@/components';

export default function HomePage() {
  return (
    <main className='bg-neutral-100'>
      <Hero />
      <Showreel />
      <About />
      <Services />
      <Process />
      <SelectedWorks />
      <Stack />
      <Footer />
    </main>
  );
}
