import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { menuSlide } from '../../anim';
import Link from './Link/link';
import Curve from './Curve/curve';
import { useLenis } from '../../Scroller/SmoothScrollLenis';
import { RiSunLine, RiMoonLine } from '@remixicon/react';
import { navigationLinks } from '../../../data/data';

export default function Nav({ closeMenu }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const { stopScroll, startScroll } = useLenis();
  
  const handleToggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    
    // Stop Lenis scrolling when menu is open
    stopScroll();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Resume Lenis scrolling when menu closes
      startScroll();
    };
  }, [closeMenu, stopScroll, startScroll]
  
);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-primary/35 dark:bg-neutral-100/35 z-[48]"
        onClick={closeMenu}
      />
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="
          !h-[100dvh] w-[100svw] bg-primary fixed right-0 top-0 text-neutral-500 z-[49] md:w-[45svw]"
      >
        <div
          className="
          box-border !h-full pl-16 pr-6 pt-16 pb-12 flex flex-col justify-between
        "
        >
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="
              flex flex-col text-[4rem] gap-2 mt-18
              lg:text-[56px] lg:gap-3 lg:mt-20
            "
          >
            <div className="flex items-center w-full md:block">
              <div className="text-neutral-100 uppercase text-[0.6rem] border-b border-neutral-100">
                <p>Theme</p>
              </div>

              <div className="flex-1 border-b border-neutral-100 mx-4 md:hidden"></div>

              <div
                className="md:hidden flex items-center justify-center text-[1rem] group cursor-pointer dark:text-neutral-500"
                onClick={handleToggleTheme}
                aria-label="Toggle dark mode"
              >
                <div className="relative border-b border-neutral-100">
                  <div className="inline dark:hidden transition-transform duration-300 ease-in-out text-neutral-500 uppercase text-[0.6rem]">
                    <span>[ dark ]</span>
                  </div>
                  <div className="hidden dark:inline transition-transform duration-300 ease-in-out text-neutral-500 uppercase text-[0.6rem]">
                    <span>[ light ]</span>
                  </div>
                </div>
              </div>
            </div>
            {navigationLinks.map((data, index) => {
              return <Link key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator} closeMenu={closeMenu} />;
            })}
          </div>
          <div
            className="
            flex w-full justify-between text-[0.6rem] gap-[0.6rem] flex-wrap
            lg:text-xs lg:gap-10 md:justify-between md:flex-nowrap
          "
          >
            <a>Instagram</a>
            <a>Dribble</a>
            <a>LinkedIn</a>
            <a>Github</a>
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
}
