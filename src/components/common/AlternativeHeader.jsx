'use client';

import { motion } from 'motion/react';
import { LogoLink, ThemeToggleButton } from '@/components';
import { useTheme } from '@/hooks';

const AlternativeHeader = () => {
  const { toggleTheme } = useTheme();

  return (
    <header>
      <motion.div
        className="px-2 md:px-4 lg:px-6 pt-8 top-0 fixed w-full z-[9998] mix-blend-difference"
        initial={{ opacity: 0, translateY: -16 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-[1920px] flex justify-between items-center">
          <div className="flex items-center font-bold tracking-tighter justify-center md:text-2xl antialiased px-4 h-[60px] mix-blend-difference">
            <LogoLink startDelay={0.1} />
          </div>
          <ThemeToggleButton toggleTheme={toggleTheme} />
        </div>
      </motion.div>
    </header>
  );
};

export default AlternativeHeader;
