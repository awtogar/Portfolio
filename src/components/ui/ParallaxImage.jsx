import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const ParallaxImage = ({ src, alt, scrollRange = ['-10vh', '10vh'], offset = ['start end', 'end start'], containerClassName }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <div ref={containerRef} className={`relative rounded-lg overflow-hidden ${containerClassName || ''}`}>
      <div className="w-full h-full">
        <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[15%]" style={{ y }}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full scale-105"
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxImage;


