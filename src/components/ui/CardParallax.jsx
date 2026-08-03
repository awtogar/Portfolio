'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useVideoVisibility } from '@/hooks';
import { getMediaUrl } from '@/assets';

const CardParallax = ({
  src,
  alt = 'Media',
  as = 'img',
  poster,
  scrollRange = ['-10%', '10%'],
  offset = ['start end', 'end start'],
  containerClassName = '',
}) => {
  const containerRef = useRef(null);
  const { videoRef } = useVideoVisibility({ rootMargin: '100px', threshold: 0.1 });

  const resolvedSrc = getMediaUrl(src);
  const resolvedPoster = getMediaUrl(poster);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
    layoutEffect: false,
  });
  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-lg ${containerClassName}`}
    >
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y }}
      >
        {as === 'video' ? (
          <video
            ref={videoRef}
            src={resolvedSrc}
            poster={resolvedPoster || undefined}
            muted
            playsInline
            loop
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={resolvedSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
    </div>
  );
};

export default CardParallax;
