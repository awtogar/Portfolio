import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { RiSunLine, RiMoonLine } from '@remixicon/react';
import { menuSlide } from '../../data/anim';
import { pages_data, social_links } from '../../data/data';
import { useLenis } from '../../context/lenisContext';
import { useTheme } from '../../hooks/useTheme';
import Curve from '../ui/Curve';
import NavLink from './NavLink';
import LinkOnHover from '../ui/HoverRotate';

export default function Nav({ closeMenu }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const { stopScroll, startScroll } = useLenis();

  const { toggleTheme, isDark } = useTheme();

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
  }, [closeMenu, stopScroll, startScroll]);

  return (
    <>
      {/* backdrop reduce content focus area*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-primary/35 dark:bg-neutral-100/35 z-50"
        onClick={closeMenu}
      />
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="!h-[100dvh] w-[100svw] bg-primary fixed right-0 top-0 text-brand-tertiary z-[9997] md:w-[45svw] will-change-transform"
      >
        <div className="box-border !h-full pl-16 pr-6 pt-16 pb-12 flex flex-col justify-between">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="flex flex-col gap-2 mt-s600 h-full"
          >
            <div className="text-brand-tertiary/35 border-b border-brand-tertiary/35">
              <span className="text-xs">NAVIGATION</span>
            </div>
            <div className="flex flex-col space-y-2 h-full">
              {Object.values(pages_data).map((data, index) => {
                return (
                  <NavLink key={index} data={{ ...data, index }} isActive={selectedIndicator === data.href} setSelectedIndicator={setSelectedIndicator} closeMenu={closeMenu} />
                );
              })}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-brand-tertiary/35">Social</span>
              <div className="flex flex-col">
                {social_links.map((data, i) => {
                  return (
                    <LinkOnHover key={i} href={data.href} target="_blank" rel="noopener noreferrer">
                      <span>{data.title}</span>
                    </LinkOnHover>
                  );
                })}
              </div>
            </div>
            <div className="md:hidden flex flex-col items-center space-y-2">
              <span className="text-brand-tertiary/35">Theme</span>
              <button onClick={toggleTheme} className={`flex flex-col w-8 h-full bg-neutral-500 rounded-full`}>
                <div
                  className={`
              w-6 h-6 bg-brand-tertiary rounded-full mx-auto transition-transform duration-150
              flex items-center justify-center shadow-sm
              ${isDark ? 'translate-y-18 transition-colors duration-500' : 'translate-y-0 transition-colors duration-500'}
            `}
                >
                  {isDark ? <RiSunLine className="w-3 h-3 text-primary" /> : <RiMoonLine className="w-3 h-3 text-primary" />}
                </div>
              </button>
            </div>
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
}
