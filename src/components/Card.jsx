'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';

const Card = ({ src, videoSrc = null, alt, scrollRange = ['0%', '8%'], offset = ['start end', 'end start'], className, imageClassName, containerClassName, blur = false }) => {
  const innerRef = useRef(null);
  const isInView = useInView(innerRef, { margin: '12% 0px 12% 0px', once: true });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset,
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <div
      ref={innerRef}
      className={`overflow-hidden ${videoSrc || blur ? 'relative' : ''} ${containerClassName || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div style={{ y }} className={`w-full h-full transform-gpu ${className || ''}`}>
        {isInView && <img src={src} alt={alt} loading="lazy" decoding="async" className={`w-full h-full object-cover rounded-xl ${imageClassName || ''}`} />}
      </motion.div>

      {blur && (
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md z-10 opacity-0 group-hover:opacity-85 transition-opacity duration-500 ease-in-out pointer-events-none" />
      )}

      {videoSrc && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 md:p-[8%] z-10">
          <div className="w-full md:w-[75%] max-w-[700px] aspect-video rounded-xl overflow-hidden">
            <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
