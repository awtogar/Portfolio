import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageFlow, useLenis } from '@/context';
import { resetScrollImmediate } from '@/hooks';

async function waitForRoutePaint() {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  await new Promise(resolve => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}

const RouteChangeNotifier = () => {
  const location = useLocation();
  const { setPageReady, phase } = usePageFlow();
  const { lenis } = useLenis();

  useEffect(() => {
    if (phase !== 'wait-for-ready') return;

    resetScrollImmediate(lenis);

    let cancelled = false;

    waitForRoutePaint().then(() => {
      if (!cancelled) setPageReady();
    });

    return () => {
      cancelled = true;
    };
  }, [location.pathname, phase, setPageReady, lenis]);

  return null;
};

export default RouteChangeNotifier;
