'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const MarqueeTags = ({ tags = [], speed = 16 }) => {
  const tagsIndex = tags.join(', ') + ', ';
  return (
    <div className="flex items-center h-4 md:h-4.5 overflow-hidden relative w-full">
      <div className="absolute left-0 h-full w-8 lg:w-10 bg-gradient-to-r from-surface-invert to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 h-full w-8 lg:w-10 bg-gradient-to-l from-surface-invert to-transparent pointer-events-none z-10" />
      <div className="flex whitespace-nowrap animate-marquee" style={{ '--marquee-speed': `${speed}s` }}>
        {[0, 1].map(copy => (
          <span key={copy} className="text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase shrink-0 pr-1.5">
            {tagsIndex.repeat(5)}
          </span>
        ))}
      </div>
    </div>
  );
};

export const CardMeta = ({ client, type, year, tags = [], logo: Logo }) => {

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-6 h-6 md:w-10 md:h-10 px-1 py-1 md:px-2 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-100 overflow-hidden text-primary dark:text-primary">
            {Logo ? (
              <Logo className="w-full h-full fill-primary" />
            ) : (
              // fallback kalo gak ada logo svg nya
              <span className="text-xs font-semibold">{client?.charAt(0) || 'P'}</span>
            )}
          </div>
          <p className="text-[clamp(12px,1.2vw,16px)] uppercase font-semibold text-neutral-100 dark:text-neutral-900 tracking-wide">{client}</p>
        </div>
        <div className="flex gap-3 lg:gap-5">
          <p className="text-[clamp(12px,1.2vw,16px)] uppercase font-semibold text-neutral-300 dark:text-neutral-600 tracking-wide">{type}</p>
          <p className="text-[clamp(12px,1.2vw,16px)] uppercase font-semibold text-neutral-300 dark:text-neutral-600 tracking-wide">{year}</p>
        </div>
      </div>
      <MarqueeTags tags={tags} />
    </div>
  );
};

const AnimatedCard = ({
  as: Component = 'li',
  thumbnail,
  alt,
  reels = null,
  to,
  linkClassName,
  className,
  imageContainerClassName = 'h-[248px] md:h-[350px] lg:h-[clamp(500px,32vw,800px)]',
  children,
  LinkComponent = 'a',
}) => {
  const imageContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <Component className={className} data-cursor-idle-fill="secondary" data-cursor-fill="secondary" data-cursor data-cursor-content="view" data-cursor-text="primary" >
      <LinkComponent
        to={to}
        href={to}
        className={`flex flex-col gap-4 lg:gap-5 px-3 lg:px-4 pt-3 lg:pt-4 pb-5 lg:pb-6 rounded-xl lg:rounded-2xl bg-surface-invert cursor-pointer group relative ${linkClassName}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={imageContainerRef} className={`relative rounded-lg lg:rounded-xl overflow-hidden w-full ${imageContainerClassName}`}>
          <div className="absolute inset-0 bg-[#171717]/30 backdrop-blur-md z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out" />
          {reels && (
            <motion.video
              src={reels}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[clamp(260px,56%,600px)] h-auto lg:max-h-2/4 rounded-lg object-cover z-20"
              animate={{
                clipPath: isHovered ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(30% 50%, 70% 50%, 70% 50%, 30% 50%)',
                y: isHovered ? '-50%' : '-10%',
              }}
              transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
              muted
              loop
              playsInline
              autoPlay
            />
          )}

          <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[15%]" style={{ y: parallaxY }}>
            <img
              src={thumbnail}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0 }}
            />
          </motion.div>
        </div>

        {children}
      </LinkComponent>
    </Component>
  );
};

export default AnimatedCard;
