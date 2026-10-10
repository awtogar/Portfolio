'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { contact_info, socials } from '@/data/data';
import { BaseSection } from '.';
import { cursorPresets } from '@/cursor';
import { useParallax } from '@/hooks/animations';
import Link from 'next/link';

const cardClass =
  'flex items-end p-4 lg:p-6 bg-neutral-300/20 backdrop-blur-[0.5rem] rounded-lg lg:rounded-xl text-base-sm font-medium leading-tight cursor-pointer hover:bg-neutral-300/35 hover:backdrop-blur-xs transition-all duration-500';

export default function Bento() {
  const ref = useRef(null);
  const y = useParallax(ref);

  return (
    <BaseSection as="footer" sectionID="contact">
      <section ref={ref} className="bg-neutral-100 px-2 lg:px-4 pt-8 lg:pt-16 pb-8 lg:pb-8 grid grid-cols-12 gap-2 lg:gap-4 relative">
        <motion.h2
          style={{ y, fontSize: 'clamp(40px, 16vw, 250px)' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold tracking-tight whitespace-nowrap leading-none pointer-events-none"
        >
          AWTOGAR
        </motion.h2>

        <Link {...cursorPresets.view} href="/guestbook" className={`col-span-12 lg:col-span-8 h-[200px] lg:h-[350px] ${cardClass}`}>
          Guestbook
        </Link>

        <Link {...cursorPresets.view} href="/writing" className={`col-span-12 lg:col-span-4 h-[200px] lg:h-[350px] ${cardClass}`}>
          Writing
        </Link>

        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4">
          <a {...cursorPresets.view} href={`mailto:${contact_info.email}`} className={`lg:col-span-12 h-[120px] lg:h-full ${cardClass}`}>
            Contact
          </a>
          <a
            {...cursorPresets.view}
            href={socials.find(s => s.label === 'github')?.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`lg:col-span-12 h-[120px] lg:h-full ${cardClass}`}
          >
            Github
          </a>
        </div>

        <a
          {...cursorPresets.view}
          href={socials.find(s => s.label === 'instagram')?.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`col-span-6 lg:col-span-4 h-[120px] lg:h-[350px] ${cardClass}`}
        >
          Instagram
        </a>

        <a
          {...cursorPresets.view}
          href={socials.find(s => s.label === 'linkedin')?.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`col-span-6 lg:col-span-4 h-[120px] lg:h-[350px] ${cardClass}`}
        >
          LinkedIn
        </a>
      </section>
    </BaseSection>
  );
}
