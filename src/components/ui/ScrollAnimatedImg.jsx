import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

const ScrollAnimatedImg = ({
  src,
  alt,
  scrollRange = ['0%', '15%'],
  offset = ['start end', 'end start'],
  className = '',
  imageClassName = '',
  containerClassName = '',
}) => {
  const containerRef = useRef(null);

  // Only true when element is within 200px of the viewport
  const isInView = useInView(containerRef, { margin: '200px 0px 200px 0px', once: false });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
    layoutEffect: false, // avoid layout thrash on mount
  });

  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <div ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      <motion.div
        style={{ y, willChange: isInView ? 'transform' : 'auto' }}
        className={`w-full h-full ${className}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className={`w-full h-full object-cover transition-[filter,opacity] duration-500 ${imageClassName}`}
        />
      </motion.div>
    </div>
  );
};

export default ScrollAnimatedImg;