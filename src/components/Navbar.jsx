'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { cursorPresets } from '@/cursor';
import { HoverRotate } from '@/components';

import NavHomeRouteImages from '@/assets/images/Home.webp';
import NavLabsRouteImages from '@/assets/images/Labs.webp';
import NavProjectsRouteImages from '@/assets/images/Projects.webp';
import NavWritingsRouteImages from '@/assets/images/Writings.webp';
import { navReels } from '@/assets';

const tags = ['LEARN, IMPLEMENT, IMPROVE, REPEAT'];

export const MarqueeTags = ({ tags = [], speed = 16 }) => {
  const tagsIndex = tags.join(', ') + ', ';
  return (
    <div className="flex items-center h-4 md:h-4.5 overflow-hidden relative w-full">
      <div className="absolute left-0 h-full w-8 lg:w-10 bg-gradient-to-r from-surface-invert to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 h-full w-8 lg:w-10 bg-gradient-to-l from-surface-invert to-transparent pointer-events-none z-10" />
      <div className="flex whitespace-nowrap animate-marquee" style={{ '--marquee-speed': `${speed}s` }}>
        {[0, 1].map(copy => (
          <span key={copy} className="text-sm tracking-widest text-neutral-300 uppercase shrink-0 pr-1.5">
            {tagsIndex.repeat(5)}
          </span>
        ))}
      </div>
    </div>
  );
};

const links = [
  { label: 'Home', href: '/', thumb: NavHomeRouteImages },
  { label: 'Labs', href: '/labs', thumb: NavLabsRouteImages },
  { label: 'Projects', href: '/projects', thumb: NavProjectsRouteImages },
  { label: 'Writings', href: '/writings', thumb: NavWritingsRouteImages },
];

const ease = [0.32, 0.72, 0, 1];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(v => !v);

  // garis  0% 100%, 100% 100%, 100% 100%, 0% 100%

  return (
    <motion.nav
      style={{ viewTransitionName: 'navbar' }}
      initial={{ clipPath: 'polygon( 0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
      animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      exit={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }}
      className="navbar fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-[420px]"
    >
      <div className="bg-[#131313] rounded-lg shadow-2xl border border-white/5 overflow-hidden">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-3 p-2">
                {links.map((item, i) => (
                  <motion.li key={item.label} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, ease, delay: 0.05 * i }}>
                    <Link href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-4 group">
                      <div className="w-[60px] h-[60px] shrink-0 rounded-lg overflow-hidden bg-white">
                        <Image src={item.thumb} alt={item.label} width={60} height={60} className="w-full h-full object-cover" />
                      </div>
                      <HoverRotate as="span" className="text-white text-base font-[500]">
                        {item.label}
                      </HoverRotate>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mx-4 h-px bg-white/10" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-2 pr-6 flex items-center justify-between">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="w-14 h-14 shrink-0 bg-black rounded-lg overflow-hidden flex items-center justify-center">
              <video src={navReels} width={54} height={54} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-secondary text-base font-[500] uppercase leading-tight tracking-wide truncate">Awaluddin Togar</span>
              <div className="text-[#888888] mt-1 w-full [mask-image:linear-gradient(to_right,white_60%,transparent_100%)]">
                <MarqueeTags tags={tags} speed={32} />
              </div>
            </div>
          </div>

          <button
            {...cursorPresets.view}
            onClick={toggle}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="shrink-0 ml-2 flex flex-col gap-[5px] p-2 cursor-pointer outline-none mix-blend-difference group"
          >
            <motion.span
              initial={false}
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3.5 : 0, width: isOpen ? 24 : 18 }}
              transition={{ duration: 0.3, ease }}
              className="block self-center h-[2px] bg-white rounded-full group-hover:bg-neutral-300"
            />
            <motion.span
              initial={false}
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3.5 : 0, width: isOpen ? 24 : 18 }}
              transition={{ duration: 0.3, ease }}
              className="block self-center h-[2px] bg-white rounded-full group-hover:bg-neutral-300"
            />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
