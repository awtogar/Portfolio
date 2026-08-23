'use client';

import BaseSection from './BaseSection';
import HoverRotate from '@/components/ui/HoverRotate';
import Bento from '@/components/ui/Bento';
import { useLenis } from '@/context';
import { contact_info } from '@/data/data';
import { RiArrowUpSLine } from '@remixicon/react';

function CTASection() {
  const { lenis } = useLenis();

  return (
    // when cursor hit this base section they should fill with bg-surface
    <BaseSection className="bg-surface-invert inverted text-secondary px-6 md:px-16 lg:px-20 pt-8 md:pt-14 pb-8 md:pb-14 font-sans border-t border-white/10">
      <div className="flex items-center justify-center min-h-[40vh] md:min-h-[60vh] text-center">
        <div className="flex flex-col">
          <span className="text-3xl md:text-6xl lg:text-7xl font-medium leading-tight ">Have an idea?</span>

          <HoverRotate
            data-cursor
            data-cursor-content="Email"
            data-cursor-fill="primary"
            data-cursor-text-color="secondary"
            data-cursor-size="small"
            as="a"
            href={`mailto:${contact_info.email}`}
          >
            <span className="text-3xl md:text-6xl lg:text-7xl font-medium leading-tight decoration-1">Tell us about it</span>
          </HoverRotate>
        </div>
      </div>
      <div className="flex flex-row items-start md:items-center justify-between gap-4 md:gap-6 pt-4">
        <div className="flex items-center gap-6 text-xs md:text-sm text-primary/50 font-normal">
          <span>
            {contact_info.credits} {contact_info.copyright}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            data-cursor
            data-cursor-content="UP"
            data-cursor-fill="primary"
            data-cursor-text-color="secondary"
            data-cursor-size="small"
            className="bg-neutral-200 md:w-12 md:h-12 rounded-full flex items-center justify-center"
            data-cursor-magnetic
            data-cursor-sticky
            onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
            aria-label="Scroll to top"
          >
            <RiArrowUpSLine className="w-6 h-6  text-primary/40 transition-colors" />
          </button>
        </div>
      </div>
    </BaseSection>
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
