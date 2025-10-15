import { useState, useEffect, useRef } from 'react';
import { useLenis } from '../context/LenisContext';

/**
 * Custom hook to track window dimensions
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

/**
 * Custom hook to control video playback based on visibility
 */
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

/**
 * Custom hook for smooth scroll to a section by id using Lenis
 */
export const useGotoSection = () => {
  const { lenis } = useLenis();

  return id => {
    const element = document.getElementById(id);
    if (element && lenis) {
      lenis.scrollTo(element, {
        offset: 0,
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };
};

export default {
  useWindowDimensions,
  useVideoVisibility,
  useGotoSection,
};
