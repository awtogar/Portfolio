import React from 'react';
import { useVideoVisibility } from '../../function';

/**
 * Video component that automatically plays when in viewport and pauses when not
 */
const VideoLoader = ({ src, className, observerOptions, ...props }) => {
  const { videoRef } = useVideoVisibility(observerOptions);

  return (
    <video ref={videoRef} muted playsInline loop preload="metadata" className={className} {...props}>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoLoader;
