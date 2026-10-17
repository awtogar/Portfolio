'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cursorPresets } from '@/cursor';
import { BaseSection, CreativeButton } from '@/components';

export default function LabsPage() {
  return (
    <main>
      <BaseSection sectionClassName="section-padding-x" containerClassName="flex flex-col items-center justify-center text-center h-screen py-12 md:py-20">
        <div className="flex flex-col items-center max-w-[520px]">
          <motion.h2
            className="text-h500 text-fg font-[500] uppercase leading-[1.2] -tracking-[0.02em] mb-2 md:mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            (In Progress)
          </motion.h2>

          <motion.h1
            className="text-h400 md:text-h200 text-fg font-[500] uppercase leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Experiments & Prototypes
          </motion.h1>

          <motion.p
            className="text-base text-fg font-[450] leading-body max-w-[42ch] mt-3 md:mt-4 mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A dedicated playground where I experiment with creative code, animations, and interactive ideas. Prototypes coming soon.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <CreativeButton variant="primary" {...cursorPresets.view} to="/projects" className="px-6 py-3 text-base-sm">
              Explore Projects
            </CreativeButton>
          </motion.div>
        </div>
      </BaseSection>
    </main>
  );
}
