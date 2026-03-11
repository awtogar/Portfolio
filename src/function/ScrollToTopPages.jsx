import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '../context/LenisContext';
import { useTransition } from '../context/TransitionContext';

export default function ScrollToTopPages() {
  const { pathname } = useLocation();
  const { lenis } = useLenis();
  const { phase } = useTransition();

  useEffect(() => {
    // Scroll to top immediately when the route changes
    // The overlay is covering the screen during enter phase, so the user won't see the jump
    window.scrollTo(0, 0);

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

