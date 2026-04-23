import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useCursorInteraction } from '@/cursor';

const AnimatedCard = ({
  as: Component = 'li',
  thumbnail,
  alt,
  video = null,
  to,
  linkClassName,
  className,
  cursor = null,
  children,
  LinkComponent = 'a',
}) => {
  const imageContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { targetRef } = useCursorInteraction(cursor ?? {});

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-10vh', '10vh']);

  return (
    <Component ref={cursor ? targetRef : undefined} className={className}>
      <LinkComponent
        to={to}
        href={to}
        className={`flex flex-col gap-4 lg:gap-5 px-3 lg:px-4 pt-3 lg:pt-4 pb-5 lg:pb-6 rounded-xl lg:rounded-2xl bg-neutral-900 dark:bg-neutral-50 cursor-pointer group relative ${linkClassName || ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={imageContainerRef} className="relative rounded-lg lg:rounded-xl overflow-hidden w-full h-[248px] md:h-[350px] lg:h-[clamp(500px,32vw,800px)]">
          <div className="absolute inset-0 bg-neutral-900/30 dark:bg-neutral-50/30 backdrop-blur-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

          {video && (
            <motion.video
              src={video}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[clamp(260px,56%,600px)] h-auto lg:max-h-2/4 rounded-lg object-cover z-20"
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

          <div className="w-full h-full">
            <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[15%]" style={{ y: parallaxY }}>
              <img
                src={thumbnail}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-500 ease-in-out"
                style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0 }}
              />
            </motion.div>
          </div>
        </div>

        {children}
      </LinkComponent>
    </Component>
  );
};

export default AnimatedCard;