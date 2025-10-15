import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '../context/LenisContext';

export default function ScrollToTopPages() {
  const { pathname } = useLocation();
  const { lenis } = useLenis();

  useEffect(() => {
    // Reset window scroll langsung
    window.scrollTo(0, 0);

    // Scroll smooth pakai Lenis setelah delay
    const timeout = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, 0, {
          offset: 0,
          duration: 1,
          immediate: false,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, lenis]);

  return null;
}
