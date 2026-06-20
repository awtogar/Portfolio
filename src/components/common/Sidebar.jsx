import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { RiSunLine, RiMoonLine } from '@remixicon/react';
import { menuSlideLeft } from '@/data/anim/nav';
import { pages, socials } from '@/data/navigation';
import { useLenis, usePageFlow } from '@/context';
import { useTheme } from '../../hooks/useTheme';

import { NavigationLink, HoverRotate } from '..';

export default function SideBar({ closeMenu }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const { stopScroll, startScroll } = useLenis();

  const { toggleTheme, isDark } = useTheme();
  const { isTransitioning } = usePageFlow();
  const menuVariants = menuSlideLeft;
  const overlayTransition = { duration: 0.3 };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    stopScroll();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      startScroll();
    };
  }, [closeMenu, stopScroll, startScroll]);

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={overlayTransition}
        className="fixed inset-0 bg-black/35 z-50"
        onClick={closeMenu}
      />
      <motion.div
        variants={menuVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-dvh! bg-neutral-500 fixed right-0 top-0 text-secondary z-[9997] will-change-transform w-full md:w-[50vw] lg:w-[45vw]"
      >
        <div className="box-border !h-full pl-4 pr-6 pt-[8dvh] pb-[8dvh] flex flex-col justify-between">
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
                <NavigationLink
                  key={data.href}
                  data={{ ...data, index }}
                  isActive={selectedIndicator === data.href}
                  setSelectedIndicator={setSelectedIndicator}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2 md:space-y-0 justify-start md:w-full items-start">
              <span className="text-secondary/55 text-sm">Social</span>

              <div className="flex flex-col md:flex-row md:gap-8 items-start w-full">
                {socials.map(data => (
                  <HoverRotate key={data.label} href={data.href} target="_blank" rel="noopener noreferrer">
                    <span>{data.title}</span>
                  </HoverRotate>
                ))}
              </div>
            </div>
            <div className="flex md:hidden flex-col items-center space-y-2">
              <span className="text-secondary/55 text-sm">Theme</span>
              <button
                onClick={toggleTheme}
                className="flex flex-col w-8 h-full bg-neutral-400/75 rounded-full p-[3px]"
                style={{ justifyContent: isDark ? 'flex-end' : 'flex-start' }}
              >
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="relative w-6.5 h-6.5 bg-neutral-100 rounded-full mx-auto shadow-md shadow-primary/55 flex items-center justify-center shrink-0"
                >
                  <RiSunLine
                    className={`absolute w-4 h-4 text-primary transition-all duration-500 ease-in-out ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
                  />
                  <RiMoonLine
                    className={`absolute w-4 h-4 text-primary transition-all duration-500 ease-in-out ${isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
