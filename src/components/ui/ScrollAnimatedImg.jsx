import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimatedImg = ({
  src,
  alt,
  scrollRange = ['0%', '15%'], // Default scroll range
  offset = ['start end', 'end start'], // Default offset
  className = '', // Additional classes
  imageClassName = '', // Image-specific classes
  containerClassName = '', // Container-specific classes
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <div ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      <motion.div style={{ y }} className={`w-full h-full ${className}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-500 ${imageClassName}`}
        />
      </motion.div>
    </div>
  );
};

export default ScrollAnimatedImg;