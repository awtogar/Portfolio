import { useEffect, useRef } from 'react';
import { useLenis } from '../components/Scroller/SmoothScrollLenis';

const useVideoInView = (options = {}) => {
  
  const videoRef = useRef(null);
  const observerRef = useRef(null);
  const { lenis } = useLenis();
  const isVisibleRef = useRef(false);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Set initial state
    video.muted = true;
    video.playsInline = true;
    video.load();
    
    const handleIntersection = (entries) => {
      const entry = entries[0];
      const isVisible = entry.isIntersecting;
      // Only run actions when visibility changes
      if (isVisible !== isVisibleRef.current) {
        isVisibleRef.current = isVisible;
        
        if (isVisible) {
          // console.log('Video entering viewport, trying to play...');
          const playVideo = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
            }
          };
          
          // Handle different video loading states
          if (video.readyState >= 2) {
            playVideo();
          } else {
            // console.log('Video not ready yet, waiting for canplay event');
            video.addEventListener('canplay', playVideo, { once: true });
            video.load();
          }
        } else {
          // console.log('Video keluar dari viewport, berentiin dulu dah');
          if (!video.paused) {
            video.pause();
          }
        }
      }
    };

    const defaultOptions = {
      root: null,
      // Deteksi viewport pake margin 36px sebelum di mulai autoplaynya
      rootMargin: '36px', 
      threshold: 0.1,
    };
    
    // Observer baru
    observerRef.current = new IntersectionObserver(
      handleIntersection, 
      { ...defaultOptions, ...options }
    );
    
    observerRef.current.observe(video);
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      
      // Clean up event listeners
      video.removeEventListener('canplay', () => {});
    };
  }, [options]);

  return videoRef;
};

export default useVideoInView;