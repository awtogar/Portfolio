'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useCursor } from './CursorProvider';

export function CursorHover() {
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
      className="fixed top-0  left-0 w-16 h-16 pointer-events-none z-[1000] flex items-center justify-center overflow-visible"
    >
      <AnimatePresence mode="wait">
        {activeSubscription?.label && (
          <motion.span
            key={activeSubscription.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="text-white text-sm font-bold uppercase tracking-widest whitespace-nowrap"
          >
            {activeSubscription.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
