'use client';

import { useRef, useEffect } from 'react';

export const useVideoVisibility = (options = {}) => {
  const videoRef = useRef(null);
  const observerRef = useRef(null);
  const isVisibleRef = useRef(false);
  const { rootMargin = '50px', threshold = 0.1 } = options;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(err => {
          console.error('Error attempting to play the video:', err);
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
            video.load();
            playVideo();
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
      if (observerRef.current) observerRef.current.disconnect();
      video.removeEventListener('canplay', playVideo);
    };
  }, [rootMargin, threshold]);

  return { videoRef };
};
