'use client';
import { motion, AnimatePresence } from 'motion/react';
import { usePreloader } from '@/context';
import { useInitialLoad } from '@/hooks';
import { CountUp } from '@/components';

const Preloader = () => {
  useInitialLoad();
  const { isLoading, setIsReady } = usePreloader();
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        requestAnimationFrame(() => requestAnimationFrame(() => setIsReady(true)));
      }}
    >
      {isLoading && <CountUp key="preloader" />}
    </AnimatePresence>
  );
};

export default Preloader;
