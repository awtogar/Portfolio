'use client';

import { useState, forwardRef } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const MotionLink = motion.create(Link);

const HoverRotate = forwardRef(({ children, className = '', href, to, onClick, textcolor1 = 'inherit', textcolor2 = 'inherit', ...props }, ref) => {
  const [isHovering, setIsHovering] = useState(false);

  const destination = to || href;
  const Component = destination ? MotionLink : motion.button;
  const componentProps = destination ? { href: destination, ...props } : { onClick, ...props };

  const childrenArray = Array.isArray(children) ? children : [children];
  const firstText = childrenArray[0] || null;
  const secondText = childrenArray[1] || firstText;

  return (
    <Component
      ref={ref}
      className={`ring-0 all-unset inline-flex justify-center cursor-pointer relative overflow-clip ${className} antialiased translate-z-0 will-change-transform`}
      initial={false}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={!destination ? onClick : undefined}
      {...componentProps}
    >
      <span className="invisible m-0">{firstText}</span>

      <motion.span
        className={`absolute inset-0 flex items-center justify-center m-0 z-20 will-change-transform ${textcolor1}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? '-100%' : '0%' }}
      >
        {firstText}
      </motion.span>

      <motion.span
        className={`absolute inset-0 flex items-center justify-center m-0 z-20 will-change-transform ${textcolor2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.4 }}
        animate={{ y: isHovering ? '0%' : '100%' }}
      >
        {secondText}
      </motion.span>
    </Component>
  );
});

HoverRotate.displayName = 'HoverRotate';

export default HoverRotate;
