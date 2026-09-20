'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useLoading } from '@/context';

const PreloaderSlideUp = {
  initial: { top: 0 },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const CountUp = () => {
  const { initialProgress: progress } = useLoading();
  const numberRef = useRef(null);

  useEffect(() => {
    if (!numberRef.current) return;
    const clamped = Math.min(Math.round(progress), 100);
    numberRef.current.textContent = clamped;

    if (clamped >= 100) {
      gsap.to(numberRef.current, {
        y: '-120%',
        duration: 0.35,
        ease: 'power4.in',
      });
    }
  }, [progress]);

  return (
    <motion.div
      variants={PreloaderSlideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-9999 flex items-center justify-center bg-primary text-primary"
      style={{ height: '100vh', width: '100vw' }}
    >
      <motion.div initial={{ scale: 1 }} transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }} className="absolute z-10 text-center">
        <div className="overflow-hidden">
          <span ref={numberRef} className="inline-block text-base font-semibold tracking-body leading-body text-secondary" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CountUp;
