'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function DevBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('dev_banner_dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('dev_banner_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: [0.7, 0, 0.3, 1] }}
          className="fixed top-1/2 -translate-y-1/2 right-0 z-[990] flex flex-col items-center gap-4 py-4 px-2.5 bg-neutral-900/90 text-white backdrop-blur-md border border-r-0 border-white/10 shadow-2xl font-sans"
        >
          <button
            onClick={handleDismiss}
            aria-label="Dismiss banner"
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2 [writing-mode:vertical-lr] rotate-180 text-xs tracking-widest font-medium uppercase text-neutral-300 py-1">
            <span>Site Under Development</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
