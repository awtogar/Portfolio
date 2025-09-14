import { useEffect, useRef } from 'react';
import { useLenis } from '../hooks/useLenis';

const VideoLoader = ({ src, className, ...props }) => {
  const videoRef = useRef(null);
  const observerRef = useRef(null);
  const { lenis } = useLenis();
  const isVisibleRef = useRef(false);

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

    observerRef.current = new IntersectionObserver(handleIntersection, { root: null, rootMargin: '50px', threshold: 0.25 });

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      video.removeEventListener('canplay', playVideo);
    };
  }, [lenis]);

  return (
    <video ref={videoRef} muted playsInline loop preload="metadata" className={className} {...props}>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoLoader;
