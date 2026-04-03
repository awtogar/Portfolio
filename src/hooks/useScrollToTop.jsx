import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '../context/LenisContext';

export default function useScrollToTop() {
  const { pathname } = useLocation();
  const { lenis } = useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenis) lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);
}
