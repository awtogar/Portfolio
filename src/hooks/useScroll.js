import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '@/context';

export const resetScrollImmediate = lenis => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  lenis?.scrollTo(0, { immediate: true });
};

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const { lenis } = useLenis();

  useEffect(() => {
    // Only reset scroll on project routes — home handles its own scroll
    if (pathname === '/') return;
    resetScrollImmediate(lenis);
  }, [pathname, lenis]);
};
