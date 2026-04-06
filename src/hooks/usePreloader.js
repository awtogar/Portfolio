import { useState, useEffect } from 'react';
import { useLenis } from '@/context/LenisContext';

const MIN_DURATION = 800; // minimum ms for animation to play

const usePreloader = (criticalPromises = []) => {
  const [isLoading, setIsLoading] = useState(true);
  const { lenis } = useLenis();

  useEffect(() => {
    let isMounted = true;

    const minTimePromise = new Promise(resolve => setTimeout(resolve, MIN_DURATION));

    const windowLoadPromise = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve, { once: true });
      }
    });

    const fontsPromise = document.fonts ? document.fonts.ready : Promise.resolve();

    Promise.allSettled([minTimePromise, windowLoadPromise, fontsPromise, ...criticalPromises]).then(() => {
      if (isMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      document.body.style.cursor = 'wait';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      document.body.style.cursor = 'default';
      lenis?.start();
    }
  }, [isLoading, lenis]);

  return isLoading;
};

export default usePreloader;
