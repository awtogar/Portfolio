import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useVideoVisibility } from '@/hooks';

const CardParallax = ({
  src,
  alt,
  as = 'img',
  poster,
  scrollRange = ['-12%', '0%'],
  offset = ['start end', 'end start'],
  containerClassName,
}) => {
  const containerRef = useRef(null);
  const { videoRef } = useVideoVisibility({ rootMargin: '100px', threshold: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
    layoutEffect: false,
  });
  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  const mediaStyle = { position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0 };

  return (
    <div ref={containerRef} className={`relative rounded-lg overflow-hidden ${containerClassName || ''}`}>
      <div className="w-full h-full relative">
        <motion.div className="absolute inset-0 w-full h-[120%] lg:-top-[10%]" style={{ y, clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)' }}>
          {as === 'video' ? (
            <video ref={videoRef} src={src} poster={poster} muted playsInline loop preload="none" className="object-cover w-full h-full" style={mediaStyle} />
          ) : (
            <img src={src} alt={alt} loading="lazy" decoding="async" className="object-cover w-full h-full" style={mediaStyle} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CardParallax;
