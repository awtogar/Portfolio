import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

const CustomCard = ({
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
  const innerRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(innerRef, { margin: '200% 0px 200% 0px', once: true });

  React.useEffect(() => {
    if (isInView) setHasEntered(true);
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset,
    layoutEffect: false, 
  });

  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      ref={innerRef} 
      className={`overflow-hidden ${videoSrc || blur ? 'relative' : ''} ${containerClassName || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ y }}
        className={`w-full h-full transform-gpu ${className || ''}`}
      >
        {hasEntered && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className={`w-full h-full object-cover ${videoSrc ? 'transition-transform duration-700 ease-out ' + (isHovered ? 'scale-110' : 'scale-100') : ''} ${imageClassName || ''}`}
          />
        )}
      </motion.div>

      {blur && (
        <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
      )}

      {videoSrc && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-[8%] z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.85, y: isHovered ? 0 : 8 }}
            transition={{ duration: 0.45, ease: [0.7, 0, 0.3, 1] }}
            className="w-[55%] aspect-6/5 rounded-xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] bg-black/30"
          >
            {hasEntered && isHovered && <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CustomCard;