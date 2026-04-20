import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';

const ClipRevealCard = ({
  src,
  videoSrc = null,
  alt,
  scrollRange = ['0%', '15%'],
  offset = ['start end', 'end start'],
  className,
  imageClassName,
  containerClassName,
  blur = false,
}) => {
  const containerRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isInView = useInView(containerRef, { margin: '200% 0px 200% 0px', once: true });
  React.useEffect(() => {
    if (isInView) setHasEntered(true);
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName || ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="w-full h-full">
        <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[15%]" style={{ y }}>
          {hasEntered && (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={`object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-500 ease-in-out ${imageClassName || ''}`}
            />
          )}
        </motion.div>
      </div>

      {blur && (
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
      )}
      {videoSrc && hasEntered && (
        <motion.video
          src={videoSrc}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[clamp(300px,65%,600px)] h-auto rounded-lg object-cover z-20"
          animate={{
            clipPath: isHovered ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(30% 50%, 70% 50%, 70% 50%, 30% 50%)',
            y: isHovered ? '-50%' : '-8.33%',
          }}
          transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
          muted
          loop
          playsInline
          autoPlay
        />
      )}
    </div>
  );
};

export default ClipRevealCard;
