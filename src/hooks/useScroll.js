import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '@/context';
import { usePageFlow } from '@/context';

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
