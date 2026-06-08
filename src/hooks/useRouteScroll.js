import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '@/context';
import { usePageFlow } from '@/context';

export const useScrollToSection = () => {
  const { scrollTo } = useLenis();

  return useCallback(
    (id, options = {}) => {
      const element = document.getElementById(id);
      if (element) {
        scrollTo(element, {
          offset: 0,
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          ...options,
        });
      }
    },
    [scrollTo]
  );
};

export const resetScrollImmediate = lenis => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  lenis?.scrollTo(0, { immediate: true });
};

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const { lenis } = useLenis();
  const { isTransitioning } = usePageFlow();

  useEffect(() => {

    if (isTransitioning) return;
    resetScrollImmediate(lenis);
  }, [pathname, lenis]);
};
