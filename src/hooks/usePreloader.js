import { useState, useEffect, useRef } from 'react';
import { useLenis } from '@/context/LenisContext';

const MAX_DURATION = 6000;
const MIN_DURATION = 800;

const usePreloader = (criticalPromises = []) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { lenis } = useLenis();

  // Stop lenis immediately on mount, not on state change
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'wait';
    lenisRef.current?.stop();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const criticalKey = JSON.stringify(criticalPromises.map((_, i) => i));

  useEffect(() => {
    let isMounted = true;
    let currentProgress = 0;

    const smoothTo = (target, duration = 400) => {
      const start = currentProgress;
      const diff = target - start;
      const startTime = performance.now();

      const tick = (now) => {
        if (!isMounted) return;
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        // ease out
        const eased = 1 - Math.pow(1 - t, 3);
        const next = start + diff * eased;
        currentProgress = next;
        setProgress(Math.floor(next));
        if (t < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const windowLoadPromise = new Promise(resolve => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', () => resolve(), { once: true });
    });

    const fontsPromise = document.fonts
      ? document.fonts.ready.then(() => undefined)
      : Promise.resolve();

    const timeoutPromise = new Promise(resolve =>
      setTimeout(resolve, MAX_DURATION)
    );

    // Stage 1: fonts ready → 40%
    fontsPromise.then(() => {
      if (isMounted) smoothTo(40, 600);
    });

    // Stage 2: window load → 80%
    windowLoadPromise.then(() => {
      if (isMounted) smoothTo(80, 500);
    });

    // Stage 3: all done → 100%
    Promise.all([
      new Promise(resolve => setTimeout(resolve, MIN_DURATION)),
      Promise.race([
        Promise.all([windowLoadPromise, fontsPromise, ...criticalPromises]),
        timeoutPromise,
      ]),
    ]).then(() => {
      if (!isMounted) return;
      smoothTo(100, 300);
      setTimeout(() => {
        if (isMounted) {
          setIsLoading(false);
          document.body.style.overflow = '';
          document.body.style.cursor = '';
          lenisRef.current?.start();
        }
      }, 650); // enough time for smoothTo(100) + UI to show 100%
    });

    return () => {
      isMounted = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [criticalKey]);

  return { isLoading, progress: Math.floor(progress) };
};

export default usePreloader;