import { useState } from 'react';
import { motion } from 'framer-motion';

// motion components
const MotionA = motion.a;

export default function LinkItems({
  children: Children,
  className = '',
  href,
  to,
  onClick,
  scrollToSection,
  textcolor1 = 'text-primary/85',
  textcolor2 = 'text-primary',
  ...props
}) {
  const [isHovering, setIsHovering] = useState(false);

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href, ...props } : { onClick, ...props };

  // Define the handleClick function
  const handleClick = e => {
    if (scrollToSection && href && href.startsWith('#')) {
      e.preventDefault();
      // Extract the ID from href (remove the #)
      const id = href.replace('#', '');
      scrollToSection(id);
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <Component
      className={`ring-0 all-unset flex cursor-pointer relative overflow-clip ${className} antialiased translate-z-0 will-change-transform`}
      initial={false}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick} // Add the onClick handler here
      {...componentProps}
    >
      <motion.p className={`m-0 z-20 will-change-transform ${textcolor1}`} initial={false} transition={{ type: 'linear', duration: 0.3 }} animate={{ y: isHovering ? -36 : 0 }}>
        {Children}
      </motion.p>

      <motion.p
        className={`m-0 h-full top-0 translate-y-1/2 absolute flex items-center z-20 will-change-transform ${textcolor2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.4 }}
        animate={{ y: isHovering ? -8 : 16 }}
      >
        {Children}
      </motion.p>

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
