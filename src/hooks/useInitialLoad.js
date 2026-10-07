'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'motion/react';
import { useLenis, usePreloader } from '@/context';

const MAX_DURATION = 6000;
const MIN_DURATION = 500;

const useInitialLoad = (criticalPromises = []) => {
  const { setIsLoading, progress } = usePreloader();
  const { lenis } = useLenis();

  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'wait';
    lenisRef.current?.stop();

    return () => {
      document.body.style.overflow = '';
      document.body.style.cursor = '';
    };
  }, []);

  const criticalKey = criticalPromises.length;

  useEffect(() => {
    let isMounted = true;
    let controls = animate(progress, 99, { duration: MIN_DURATION / 1000, ease: 'linear' });

    const windowLoadPromise = new Promise(resolve => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve, { once: true });
    });

    const fontsPromise = document.fonts?.ready ?? Promise.resolve();

    const timeoutPromise = new Promise(resolve => setTimeout(resolve, MAX_DURATION));

    Promise.all([
      new Promise(resolve => setTimeout(resolve, MIN_DURATION)),
      Promise.race([Promise.all([windowLoadPromise, fontsPromise, ...criticalPromises]), timeoutPromise]),
    ]).then(() => {
      if (!isMounted) return;

      controls = animate(progress, 100, { duration: 0.3, ease: [0.33, 1, 0.68, 1] });

      setTimeout(() => {
        if (!isMounted) return;
        setIsLoading(false);
        document.body.style.overflow = '';
        document.body.style.cursor = '';
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        lenisRef.current?.scrollTo(0, { immediate: true });
        lenisRef.current?.start();
      }, 500);
    });

    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [criticalKey, progress, setIsLoading]);
};

export default useInitialLoad;