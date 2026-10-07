'use client';

import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks';

const VideoLoader = ({ src, className, observerOptions = {}, ...props }) => {
  const [activeSrc, setActiveSrc] = useState(null);
  const { rootMargin = '200px', threshold = 0 } = observerOptions;

  const { ref: videoRef, isIntersecting } = useIntersectionObserver({
    rootMargin,
    threshold,
    freezeOnceVisible: false,
  });

  useEffect(() => {
    if (isIntersecting && !activeSrc) {
      setActiveSrc(src);
    }
  }, [isIntersecting, src, activeSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc) return;

    if (isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isIntersecting, activeSrc]);

  return (
    <video ref={videoRef} muted playsInline loop preload="none" className={className} {...props}>
      {activeSrc && <source src={activeSrc} type="video/mp4" />}
    </video>
  );
};

export default VideoLoader;
