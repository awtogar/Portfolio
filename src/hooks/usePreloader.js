import { useEffect, useRef } from 'react';
import { useLenis } from '@/context/LenisContext';
import { useLoading } from '@/context/LoadingProvider';

const MAX_DURATION = 6000;
const MIN_DURATION = 2000;

const usePreloader = (criticalPromises = []) => {
  const { setIsInitialLoading, setInitialProgress } = useLoading();
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
    let rafId = null;

    const smoothTo = (target, duration = 400, easeFn = t => 1 - Math.pow(1 - t, 3)) => {
      if (rafId) cancelAnimationFrame(rafId);

      const start = currentProgress;
      const diff = target - start;
      const startTime = performance.now();

      const tick = now => {
        if (!isMounted) return;
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);

        // Apply easing function
        const eased = easeFn(t);
        const next = start + diff * eased;

        currentProgress = next;
        setInitialProgress(Math.floor(next));

        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    const windowLoadPromise = new Promise(resolve => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', () => resolve(), { once: true });
    });

    const fontsPromise = document.fonts ? document.fonts.ready.then(() => undefined) : Promise.resolve();

    const timeoutPromise = new Promise(resolve => setTimeout(resolve, MAX_DURATION));

    // 1. Kickstart a steady, linearly-eased progress count up to 99 over the MIN_DURATION.
    smoothTo(99, MIN_DURATION, t => t);

    // 2. We wait until ALL real crucial data (window, fonts, custom critical promises) is truly loaded.
    Promise.all([
      new Promise(resolve => setTimeout(resolve, MIN_DURATION)),
      Promise.race([Promise.all([windowLoadPromise, fontsPromise, ...criticalPromises]), timeoutPromise]),
    ]).then(() => {
      if (!isMounted) return;

      // 3. Complete the final 1% quickly now that we confirmed data is loaded!
      smoothTo(100, 300);

      setTimeout(() => {
        if (isMounted) {
          setIsInitialLoading(false);
          document.body.style.overflow = '';
          document.body.style.cursor = '';
          lenisRef.current?.start();
        }
      }, 500); // UI slide away delay once hitting 100
    });

    return () => {
      isMounted = false;
      if (rafId) cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [criticalKey]);
};

export default usePreloader;
