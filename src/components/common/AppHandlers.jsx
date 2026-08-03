'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/context/LoadingProvider';
import { useLenis } from '@/context/LenisContext';
import { resetScrollImmediate } from '@/hooks/useScroll';

// Signals to the loading system that the new page is ready to reveal
// after a curtain transition
function RouteReadyNotifier() {
  const pathname = usePathname();
  const { setPageReady, phase, targetPath } = useLoading();
  const { lenis } = useLenis();

  useEffect(() => {
    if (phase !== 'wait-for-ready') return;

    // In Next.js, wait until the router has updated pathname to targetPath
    if (targetPath && pathname !== targetPath) return;

    resetScrollImmediate(lenis);

    let cancelled = false;
    const waitForPaint = async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      if (!cancelled) setPageReady();
    };
    waitForPaint();

    return () => {
      cancelled = true;
    };
  }, [pathname, phase, targetPath, setPageReady, lenis]);

  return null;
}

// Handles /#section scroll when navigating from another route to home
function HashScrollHandler() {
  const pathname = usePathname();
  const { lenis } = useLenis();
  const { isReady } = useLoading();

  useEffect(() => {
    if (!isReady || pathname !== '/') return;
    const hash = window.location.hash;
    if (!hash) return;

    const sectionId = hash.slice(1);
    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(sectionId);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (attempt < 10) {
        setTimeout(() => tryScroll(attempt + 1), 100);
      }
    };
    setTimeout(() => tryScroll(), 300);
  }, [pathname, lenis, isReady]);

  return null;
}

export default function AppHandlers() {
  return (
    <>
      <RouteReadyNotifier />
      <HashScrollHandler />
    </>
  );
}
