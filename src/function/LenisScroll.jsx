import Lenis from 'lenis';
import { useEffect, useRef, useState } from 'react';
import LenisContext from '../hooks/useLenis';

const LenisScroll = ({ children }) => {
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

  const stopScroll = () => {
    if (lenis) {
      lenis.stop();
    }
  };

  const startScroll = () => {
    if (lenis) {
      lenis.start();
    }
  };

  const scrollTo = (target, options) => {
    if (lenis) {
      lenis.scrollTo(target, options);
    }
  };

  return (
    <LenisContext.Provider value={{ lenis, stopScroll, startScroll, scrollTo }}>
      <div ref={wrapperRef} className="app-scroll">
        {children}
      </div>
    </LenisContext.Provider>
  );
};

export default LenisScroll;
