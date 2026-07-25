import { useRef, useEffect, useState } from 'react';

const VideoLoader = ({ src, className, observerOptions = {}, ...props }) => {
  const videoRef = useRef(null);
  const [activeSrc, setActiveSrc] = useState(null);
  const isVisibleRef = useRef(false);
  const { rootMargin = '200px', threshold = 0 } = observerOptions;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisibleRef.current) {
          isVisibleRef.current = true;
          setActiveSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src, rootMargin, threshold]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc) return;
    video.load();
    const play = () => video.play().catch(() => {});
    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener('canplay', play, { once: true });
      return () => video.removeEventListener('canplay', play);
    }
  }, [activeSrc]);

  return (
    <video ref={videoRef} muted playsInline loop preload="none" className={className} {...props}>
      {activeSrc && <source src={activeSrc} type="video/mp4" />}
    </video>
  );
};

export default VideoLoader;
