'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'motion/react';
import { useLenis, usePreloader } from '@/context';

const SAFETY_TIMEOUT = 8000;

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

  useEffect(() => {
    let isMounted = true;
    let finishAnimation;
    let fallbackTimer;

    progress.set(1);

    // Core Load Tasks: Window load and Font loading
    const windowLoad = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve, { once: true });
      }
    });

    const fonts = document.fonts?.ready ?? Promise.resolve();
    const tasks = [windowLoad, fonts, ...criticalPromises];
    const total = tasks.length;
    let completed = 0;

    const finishLoading = () => {
      if (!isMounted) return;
      if (fallbackTimer) clearTimeout(fallbackTimer);

      finishAnimation = animate(progress, 100, {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      });

      finishAnimation.then(() => {
        if (!isMounted) return;
        setIsLoading(false);
        document.body.style.overflow = '';
        document.body.style.cursor = '';
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        lenisRef.current?.scrollTo(0, { immediate: true });
        lenisRef.current?.start();
      });
    };

    // Safety fallback: ensure preloader finishes within 8s
    fallbackTimer = setTimeout(() => {
      if (!isMounted) return;
      finishLoading();
    }, SAFETY_TIMEOUT);

    const track = task =>
      Promise.resolve(task).then(
        () => {
          if (!isMounted) return;
          completed += 1;
          progress.set(Math.min(99, Math.round((completed / total) * 99)));
        },
        () => {
          if (!isMounted) return;
          completed += 1;
          progress.set(Math.min(99, Math.round((completed / total) * 99)));
        }
      );

    Promise.all(tasks.map(track)).then(() => {
      finishLoading();
    });

    return () => {
      isMounted = false;
      finishAnimation?.stop();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [progress, setIsLoading]);
};

export default useInitialLoad;
