import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import LenisContext from '../../hooks/useLenis';

const LenisScroller = ({ children }) => {
  const wrapperRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      duration: 2.6,
    });

    lenisRef.current = lenis;

    const raf = time => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const stopScroll = () => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  };

  const startScroll = () => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  };

  return (
    <LenisContext.Provider value={{ stopScroll, startScroll, lenis: lenisRef.current }}>
      <div ref={wrapperRef} className="app-scroll">
        {children}
      </div>
    </LenisContext.Provider>
  );
};

export default LenisScroller;
