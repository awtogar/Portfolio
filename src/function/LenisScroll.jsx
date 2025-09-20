import Lenis from 'lenis';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import LenisContext from '../hooks/useLenis';

const SmoothScrollWrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      smooth: true,
      lerp: 0.1,
      duration: 2.6,
    });

    // Set state to make lenis available to context consumers
    setLenis(lenisInstance);
    
    // Keep window.lenis for backward compatibility
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

  // Memoize callback to prevent unnecessary re-renders
  const stopScroll = useCallback(() => {
    if (lenis) {
      lenis.stop();
    }
  }, [lenis]);

  const startScroll = useCallback(() => {
    if (lenis) {
      lenis.start();
    }
  }, [lenis]);

  const scrollTo = useCallback((target, options) => {
    if (lenis) {
      lenis.scrollTo(target, options);
    }
  }, [lenis]);

  // Memoize to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    lenis,
    stopScroll,
    startScroll,
    scrollTo
  }), [lenis, stopScroll, startScroll, scrollTo]);

  return (
    <LenisContext.Provider value={contextValue}>
      <div ref={wrapperRef} className="App">
        {children}
      </div>
    </LenisContext.Provider>
  );
};

export default SmoothScrollWrapper;