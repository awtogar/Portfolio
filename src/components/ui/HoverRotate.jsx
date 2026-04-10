import { useState } from 'react';
import { motion } from 'motion/react';
import React from 'react';

export default function HoverRotate({ children, className = '', href, to, onClick, scrollToSection, textcolor1 = 'inherit', textcolor2 = 'inherit', ...props }) {
  const [isHovering, setIsHovering] = useState(false);

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href, ...props } : { onClick, ...props };

  const childrenArray = React.Children.toArray(children);
  const firstText = childrenArray[0] || null;
  const secondText = childrenArray[1] || firstText;

  const handleClick = e => {
    if (scrollToSection && href && href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      scrollToSection(id);
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <Component
      className={`ring-0 w-full all-unset flex cursor-pointer relative overflow-clip ${className} antialiased translate-z-0 will-change-transform`}
      initial={false}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
      {...componentProps}
    >
      <motion.span className={`m-0 z-20 will-change-transform ${textcolor1}`} initial={false} transition={{ type: 'linear', duration: 0.3 }} animate={{ y: isHovering ? -36 : 0 }}>
        {firstText}
      </motion.span>

      <motion.span
        className={`m-0 h-full top-0 translate-y-1/2 absolute flex items-center z-20 will-change-transform ${textcolor2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.4 }}
        animate={{ y: isHovering ? -12 : 12 }}
      >
        {secondText}
      </motion.span>

      <motion.div
        className={`ring-0 absolute z-10 bottom-0 left-0 h-full w-full rounded-full will-change-transform`}
        initial={false}
        transition={{ type: 'linear', duration: 0.4 }}
        animate={{
          y: isHovering ? '0%' : '125%',
          scaleX: isHovering ? 1 : 2,
        }}
      />
    </Component>
  );
}
