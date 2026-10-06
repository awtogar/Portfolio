'use client';

import { RiSunLine, RiMoonLine } from '@remixicon/react';
import { motion } from 'motion/react';
import { TextReveal } from '@/components';
import { cursorPresets } from '@/cursor';

const ThemeToggleButton = ({ isActive, toggleTheme, ...props }) => {
  return (
    <motion.div
      className="flex text-white h-[60px] items-center justify-center w-[60px] md:pointer-events-none cursor-pointer"
      animate={{
        opacity: isActive ? 0 : 1,
        pointerEvents: isActive ? 'none' : 'auto',
      }}
      transition={{
        opacity: {
          duration: isActive ? 0.3 : 1.5,
          ease: 'easeInOut',
        },
      }}
    >
      <div
        data-cursor
        data-cursor-magnetic
        data-cursor-sticky
        data-cursor-size="small"
        className={`relative flex items-center justify-center w-full h-full group ${isActive ? 'pointer-events-none' : 'cursor-pointer'}`}
        onClick={isActive ? undefined : toggleTheme}
        aria-label="Toggle dark mode"
        type="button"
      >
        <div className="relative flex h-6 w-6 items-center justify-center" {...cursorPresets.nav}>
          <TextReveal className="block dark:hidden" startDelay={0.55}>
            <RiSunLine className="block dark:hidden transition-transform duration-300 ease-in-out group-hover:-rotate-90" size={24} />
          </TextReveal>
          <TextReveal className="hidden dark:block" startDelay={0.55}>
            <RiMoonLine className="transition-transform duration-300 ease-in-out group-hover:rotate-45" size={24} />
          </TextReveal>
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeToggleButton;
