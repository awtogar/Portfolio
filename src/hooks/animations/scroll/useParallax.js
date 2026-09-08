'use client';

import { useScroll, useTransform } from 'motion/react';

export const useParallax = (ref, { range = ['-10%', '10%'], offset = ['start end', 'end start'] } = {}) => {
  const { scrollYProgress } = useScroll({ target: ref, offset, layoutEffect: false });
  return useTransform(scrollYProgress, [0, 1], range);
};
