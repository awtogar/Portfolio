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



export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      smooth: true,
      lerp: 1,
      duration: 2,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
    });

    setLenis(lenisInstance);
    window.lenis = lenisInstance;

    let rafId;
    const raf = time => {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
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
