import { useEffect, useRef } from 'react';
import { useLenis } from './useLenis';

const useLoader = (options = {}) => {
  const videoRef = useRef(null);
  const observerRef = useRef(null);
  const { lenis } = useLenis();
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    // cukup load sekali aja
    video.preload = "metadata";

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          console.log('autoplay prevented');
        });
      }
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      const isVisible = entry.isIntersecting;

      if (isVisible !== isVisibleRef.current) {
        isVisibleRef.current = isVisible;

        if (isVisible) {
          if (video.readyState >= 2) {
            playVideo();
          } else {
            video.addEventListener("canplay", playVideo, { once: true });
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      }
    };

    const defaultOptions = {
      root: null,
      rootMargin: "50px",
      threshold: 0.25,
    };

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      { ...defaultOptions, ...options }
    );

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      video.removeEventListener("canplay", playVideo);
    };
  }, [options, lenis]);

  return videoRef;
};

export default useLoader;
