import { useEffect, useRef } from 'react';
import { useLenis, useLoading } from '@/context';

const MAX_DURATION = 6000;
const MIN_DURATION = 500;

/**
 * Runs the first-visit asset preload sequence and drives PageFlow preloader state.
 * Mount once in App (not per-page).
 */
const useInitialLoad = (criticalPromises = []) => {
  const { setIsInitialLoading, setInitialProgress } = useLoading();
  const { lenis } = useLenis();

  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'wait';
    lenisRef.current?.stop();

    // Force scroll to top immediately before the preloader sequence starts.
    // This runs synchronously before any async asset loading, overriding
    // whatever position the browser may have restored from session history.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    return () => {
      document.body.style.overflow = '';
      document.body.style.cursor = '';
    };
  }, []);

  const criticalKey = criticalPromises.length;

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

    smoothTo(99, MIN_DURATION, t => t);

    Promise.all([
      new Promise(resolve => setTimeout(resolve, MIN_DURATION)),
      Promise.race([Promise.all([windowLoadPromise, fontsPromise, ...criticalPromises]), timeoutPromise]),
    ]).then(() => {
      if (!isMounted) return;

      smoothTo(100, 300);

      setTimeout(() => {
        if (isMounted) {
          setIsInitialLoading(false);
          document.body.style.overflow = '';
          document.body.style.cursor = '';
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          lenisRef.current?.scrollTo(0, { immediate: true });
          lenisRef.current?.start();
        }
      }, 500);
    });

    return () => {
      isMounted = false;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [criticalKey, setIsInitialLoading, setInitialProgress]);
};

export default useInitialLoad;
