'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useLoading } from '@/context';
import { useInitialLoad } from '@/hooks';
import { CountUp } from '@/components'



const Preloader = () => {
  useInitialLoad();
  const { isInitialLoading, setIsReady } = useLoading();
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        requestAnimationFrame(() => requestAnimationFrame(() => setIsReady(true)));
      }}
    >
      {isInitialLoading && <CountUp key="preloader" />}
    </AnimatePresence>
  );
};

export default Preloader;
