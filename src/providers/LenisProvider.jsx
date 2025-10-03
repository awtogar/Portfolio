import { createContext, useContext, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Lenis from 'lenis';

// Context creation
const LenisContext = createContext(null);

/**
 * Lenis provider component for smooth scrolling
 */
export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);
  const appRef = useRef(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      smooth: true,
      lerp: 0.1,
      duration: 1.2,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
    });

    setLenis(lenisInstance);
    window.lenis = lenisInstance; // For debugging

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

  // Memoized methods
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

  return (
    <LenisContext.Provider value={contextValue}>
      <div ref={appRef} className="App">
        {children}
      </div>
    </LenisContext.Provider>
  );
};

/**
 * Hook to access Lenis context
 * @returns {Object} Lenis context with lenis instance and control methods
 */
export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenis must be used within LenisProvider');
  }
  return context;
};

/**
 * Hook for scrolling to specific sections
 * @returns {Function} Function to scroll to an element by ID
 */
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

export default { LenisProvider, useLenis, useScrollTo };
