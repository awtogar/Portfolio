'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from '@/context';

export const resetScrollImmediate = lenis => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  lenis?.scrollTo(0, { immediate: true });
};

export const useScrollToTop = () => {
  const pathname = usePathname();
  const { lenis } = useLenis();

  useEffect(() => {
    if (pathname === '/') return;
    resetScrollImmediate(lenis);
  }, [pathname, lenis]);
};
