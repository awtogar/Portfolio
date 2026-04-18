import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';

const OverlayImages = ({ src, alt, scrollRange = ['0%', '25%'], offset = ['start end', 'end start'], containerClassName }) => {
  const innerRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const isInView = useInView(innerRef, { margin: '200% 0px 200% 0px', once: true });

  useEffect(() => {
    if (isInView) setHasEntered(true);
  }, [isInView]);

  const { scrollYProgress } = useScroll({ target: innerRef, offset });
  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <div ref={innerRef} className={`relative rounded-lg overflow-hidden ${containerClassName}`}>
      <motion.div className="absolute inset-0 w-full h-[120%] lg:-top-[10%]" style={{ y }}>
        {hasEntered && <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
      </motion.div>
    </div>
  );
};

export default OverlayImages;