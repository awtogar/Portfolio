import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { RiSunLine, RiMoonLine } from '@remixicon/react';
import { menuSlideLeft } from '../../data/anim';
import { pages, socials } from '../../data/data';
import { useLenis } from '../../context/LenisContext';
import { useTheme } from '../../hooks/useTheme';

import { Curve, NavLink, HoverRotate } from '../../components';

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
        variants={menuSlideLeft}
        initial="initial"
        animate="enter"
        exit="exit"
        className="!h-[100dvh] w-[100dvw] bg-neutral-500 fixed right-0 top-0 text-secondary z-[9997] md:w-[45svw] will-change-transform"
      >
        <div className="box-border !h-full pl-16 pr-6 pt-[8dvh] pb-[8dvh] flex flex-col justify-between">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="flex flex-col gap-2 mt-s600 h-full"
          >
            <div className="text-secondary/55 border-b border-secondary/35">
              <span className="text-xs">NAVIGATION</span>
            </div>
            <div className="flex flex-col space-y-2 h-full mb-s400 pt-s400">
              {Object.values(pages).map((data, index) => (
                  <NavLink key={data.href} data={{ ...data, index }} isActive={selectedIndicator === data.href} setSelectedIndicator={setSelectedIndicator} closeMenu={closeMenu} />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-secondary/55 text-sm">Social</span>
              <div className="flex flex-col">
                {socials.map(data => (
                    <HoverRotate key={data.label} href={data.href} target="_blank" rel="noopener noreferrer">
                      <span>{data.title}</span>
                    </HoverRotate>
                ))}
              </div>
            </div>
            <div className="flex md:hidden flex-col items-center space-y-2">
              <span className="text-secondary/55 text-sm">Theme</span>
              <button onClick={toggleTheme} className={`flex flex-col w-8 h-full bg-neutral-400/75 rounded-full`}>
                <div
                  className={`
              w-6.5 h-6.5 bg-neutral-100 rounded-full mx-auto transition-transform duration-150 shadow-md shadow-primary/55
              flex items-center justify-center
              ${isDark ? 'translate-y-16 transition-colors duration-500' : 'translate-y-1 transition-colors duration-500'}
            `}
                >
                  {isDark ? (
                    <RiSunLine className="w-4 h-4 text-primary transition-transform duration-500 ease-in-out rotate-180" />
                  ) : (
                    <RiMoonLine className="w-4 h-4 text-primary transition-transform duration-500 ease-in-out rotate-0" />
                  )}
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
