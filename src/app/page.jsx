"use client";

import {
  Hero,
  Showreel,
  About,
  Services,
  Process,
  SelectedWorks,
  Stack,
} from "@/components/sections";
import PageLayout from "@/components/PageLayout";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Showreel />
      <About />
      <Services />
      {/* <Process /> */}
      <SelectedWorks />
      <Stack />
      <Footer />
    </PageLayout>
  );
}
