import { createContext, useContext, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext(null);

export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context;
};

export const useScrollTo = () => {
  const { lenis } = useLenis();

  return useCallback(
    (id, options = {}) => {
      const element = document.getElementById(id);
      if (element && lenis) {
        lenis.scrollTo(element, {
          offset: 0,
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          ...options,
        });
      }
    },
    [lenis]
  );
};

export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      smooth: true,
      lerp: 0.1,
      duration: 1.6,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
    });

    setLenis(lenisInstance);
    window.lenis = lenisInstance;

    const raf = time => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      window.lenis = null;
      setLenis(null);
    };
  }, []);

  const stopScroll = useCallback(() => lenis?.stop(), [lenis]);
  const startScroll = useCallback(() => lenis?.start(), [lenis]);
  const scrollTo = useCallback((target, options) => lenis?.scrollTo(target, options), [lenis]);

  const contextValue = useMemo(
    () => ({
      lenis,
      stopScroll,
      startScroll,
      scrollTo,
    }),
    [lenis, stopScroll, startScroll, scrollTo]
  );

  return <LenisContext.Provider value={contextValue}>{children}</LenisContext.Provider>;
}
