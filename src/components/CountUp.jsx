'use client';

import { motion, useTransform } from 'motion/react';
import { usePreloader } from '@/context';

export const CountUp = () => {
  const { progress } = usePreloader();
  const label = useTransform(progress, (v) => `${Math.min(Math.round(v), 100)}%`);

  return (
    <motion.div
      exit={{ y: '-100%', transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
      className="fixed inset-0 z-[9999] flex items-end justify-start bg-primary p-8 text-secondary"
    >
      <motion.span className="text-[15vw] font-medium leading-none tracking-tighter tabular-nums">
        {label}
      </motion.span>
    </motion.div>
  );
};