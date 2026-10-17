'use client';

import { motion } from 'motion/react';
import { useCursor } from './CursorProvider';

export function CursorFollower() {
  const { isSupported, smoothX, smoothY } = useCursor();

  if (!isSupported) return null;

  return (
    <motion.div style={{ left: smoothX, top: smoothY }} className="fixed top-0 left-0 w-3 h-3 bg-neutral-100 rounded-full pointer-events-none z-[9999] mix-blend-difference" />
  );
}
