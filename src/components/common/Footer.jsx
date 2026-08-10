'use client';

import BaseSection from './BaseSection';
import Bento from '@/components/ui/Bento';
import { useLenis, useLoading } from '@/context';
import { pages, socials, contact_info } from '@/data/navigation';
import { RiArrowUpSLine } from '@remixicon/react';

function CTASection() {
  const { lenis } = useLenis();
  const { navigateTo, scrollToSection } = useLoading();

  const handleNavClick = (e, page) => {
    e.preventDefault();
    if (page.sectionId) {
      scrollToSection(page.sectionId, lenis);
    } else if (page.href === '/') {
      lenis?.scrollTo(0, { duration: 1.2 });
    } else {
      navigateTo(page.href);
    }
  };

  return (
    <section className="bg-black text-white px-6 md:px-16 lg:px-20 pt-8 md:pt-14 pb-8 md:pb-14 font-sans border-t border-white/10">
      <div className="flex items-center justify-center min-h-[40vh] md:min-h-[60vh] text-center">
        <div className="flex flex-col">
          <span className="text-3xl md:text-6xl lg:text-7xl font-medium leading-tight">Have an idea?</span>
          <span className="text-3xl md:text-6xl lg:text-7xl font-medium leading-tight underline underline-offset-4 md:underline-offset-8 decoration-1">Tell us about it</span>
        </div>
      </div>

      {/* Bottom footer bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 pt-4">
        <div className="flex items-center gap-6 text-xs md:text-sm text-neutral-400 font-normal">
          <span>
            {contact_info.credits} {contact_info.copyright}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => lenis?.scrollTo(0, { duration: 1.2 })} aria-label="Scroll to top">
            <RiArrowUpSLine className="w-6 h-6 text-neutral-400 hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <BaseSection as="footer" sectionID="contact" sectionClassName="pt-section">
      <div className="relative">
        <Bento />
        <CTASection />
      </div>
    </BaseSection>
  );
}
