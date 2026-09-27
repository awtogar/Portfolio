'use client';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { cursorPresets } from '@/cursor';
import { BaseSection, CreativeButton } from '@/components';

export default function NotFoundPage() {
  return (
    <BaseSection sectionClassName="section-padding-x" containerClassName="flex-col h-[85svh] lg:h-[95svh]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-s400 lg:gap-s600">
        <motion.h1
          className="font-serif text-h1 text-center leading-[1.1] tracking-[-0.05em] uppercase lg:text-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Page not found
        </motion.h1>

        <motion.p
          className="max-w-[280px] text-sm text-center text-primary/40 lg:max-w-xs lg:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
          <CreativeButton
            {...cursorPresets.view}
            to="/"
            className="px-5 py-2.5 text-sm font-light bg-surface-invert outline outline-1 outline-surface-invert rounded-full lg:px-6 lg:py-3 lg:text-base"
            fillColor1="bg-surface-invert"
            fillColor2="bg-neutral-100"
            textcolor1="text-secondary"
            textcolor2="text-primary"
          >
            Go Home
          </CreativeButton>
        </motion.div>
      </div>
    </BaseSection>
  );
}
