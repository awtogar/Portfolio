import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Lenis from 'lenis';
import LenisContext, { useLenis } from '../hooks/useLenis';

/**
 * Smooth scrolling wrapper component using Lenis
 */
export const SmoothScrollWrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const [lenis, setLenis] = useState(null);

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

  const scrollTo = useCallback(
    (target, options) => {
      if (lenis) {
        lenis.scrollTo(target, options);
      }
    },
    [lenis]
  );

  // Memoize to prevent unnecessary re-renders
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
      <div ref={wrapperRef} className="App">
        {children}
      </div>
    </LenisContext.Provider>
  );
};

/**
 * Custom hook to track window dimensions
 * @returns {Object} Current window dimensions {width, height}
 */
export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Set initial
    handleResize();
    // Add listener
    window.addEventListener('resize', handleResize);
    // Cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};

export const useVideoVisibility = (options = {}) => {
  const videoRef = useRef(null);
  const observerRef = useRef(null);
  const isVisibleRef = useRef(false);

  const { rootMargin = '50px', threshold = 0.25 } = options;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          console.log('Autoplay canceled by browser');
        });
      }
    };

    const handleIntersection = entries => {
      const entry = entries[0];
      const isVisible = entry.isIntersecting;

      if (isVisible !== isVisibleRef.current) {
        isVisibleRef.current = isVisible;

        if (isVisible) {
          if (video.readyState >= 2) {
            playVideo();
          } else {
            video.addEventListener('canplay', playVideo, { once: true });
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin,
      threshold,
    });

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      video.removeEventListener('canplay', playVideo);
    };
  }, [rootMargin, threshold]);

  return { videoRef };
};

export const useResetScroll = () => {
  const { lenis, scrollTo } = useLenis();

  const resetScroll = useCallback(() => {
    if (!lenis || !scrollTo) return;
    lenis.stop();
    window.scrollTo(0, 0);
    scrollTo(0, { immediate: true });
    lenis.start();
  }, [lenis, scrollTo]);

  return resetScroll;
};

export default { SmoothScrollWrapper, useWindowDimensions, useVideoVisibility, useResetScroll };
