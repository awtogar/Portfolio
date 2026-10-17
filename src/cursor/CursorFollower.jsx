'use client';

import { motion } from 'motion/react';
import { useCursor } from './CursorProvider';

export function CursorFollower() {
  const { isSupported, smoothX, smoothY, activeSubscription } = useCursor();

  if (!isSupported) return null;

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: activeSubscription ? 64 : 12,
        height: activeSubscription ? 64 : 12,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="fixed top-0 left-0 bg-neutral-50 rounded-full pointer-events-none z-[999] mix-blend-difference"
    />
  );
}
