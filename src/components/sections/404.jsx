'use client';
import { motion } from 'motion/react';
import { cursorPresets } from '@/cursor';
import { BaseSection, CreativeButton } from '@/components';

export default function NotFoundPage() {
  return (
    <BaseSection
      sectionClassName="section-padding-x bg-neutral-100"
      containerClassName="flex flex-col items-center justify-center text-center h-screen py-12 md:py-20"
    >
      <div className="flex flex-col items-center max-w-[500px]">
        <motion.h2
          className="text-h500 text-primary font-[500] uppercase leading-[1.2] -tracking-[0.02em] mb-2 md:mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          (404 Error)
        </motion.h2>

        <motion.h1
          className="text-h400 md:text-h200 text-primary font-[500] uppercase leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Page not found
        </motion.h1>

        <motion.p
          className="text-base text-primary-muted leading-body max-w-[40ch] mt-3 md:mt-4 mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          The page you're looking for doesn't exist, has been removed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <CreativeButton
            variant="primary"
            {...cursorPresets.view}
            to="/"
            className="px-6 py-3 text-base-sm"
          >
            Back to Home
          </CreativeButton>
        </motion.div>
      </div>
    </BaseSection>
  );
}

