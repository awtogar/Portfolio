import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '@/context/LenisContext';

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

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const { scrollTo } = useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (scrollTo) {
      requestAnimationFrame(() => {
        scrollTo(0, { immediate: true });
      });
    }
  }, [pathname, scrollTo]);
};
