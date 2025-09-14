import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);
const MotionA = motion.create('a');
const MotionButton = motion.create('button');

// Predefined button variants
const BUTTON_VARIANTS = {
  fill: {
    background1: 'bg-primary',
    background2: 'bg-brand-secondary',
    outline1: 'outline-none',
    outline2: 'outline-none',
    textcolor1: 'text-secondary',
    textcolor2: 'text-primary',
  },
  outline: {
    background1: 'transparent',
    background2: 'bg-primary',
    outline1: 'outline outline-1 outline-primary',
    outline2: 'outline-none',
    textcolor1: 'text-primary',
    textcolor2: 'text-secondary',
  },
};

export default function CreativeButton({
  children,
  className = 'w-full px-6 py-4 font-light text-center',
  href,
  to,
  onClick,
  variant,
  background1,
  background2,
  textcolor1,
  textcolor2,
  outline1,
  outline2,
  ...props
}) {
  const [isHovering, setIsHovering] = useState(false);

  // Apply variant styles or use custom props if provided
  const variantStyles = variant ? BUTTON_VARIANTS[variant] : {};

  const styles = {
    background1: background1 || variantStyles.background1 || 'bg-primary',
    background2: background2 || variantStyles.background2 || 'bg-brand-secondary',
    textcolor1: textcolor1 || variantStyles.textcolor1 || 'text-secondary',
    textcolor2: textcolor2 || variantStyles.textcolor2 || 'text-primary',
    outline1: outline1 || variantStyles.outline1 || 'outline outline-1 outline-secondary',
    outline2: outline2 || variantStyles.outline2 || 'outline outliner-1 outline-secondary',
  };

  // Determine which component to use
  let Component;
  let componentProps = {};

  if (to) {
    Component = MotionLink;
    componentProps = { to, ...props };
  } else if (href) {
    Component = MotionA;
    componentProps = { href, ...props };
  } else {
    Component = MotionButton;
    componentProps = { onClick, ...props };
  }

  return (
    <Component
      className={`ring-0 all-unset flex content-center justify-center cursor-pointer ${styles.background1} ${styles.outline1} rounded-full relative overflow-clip ${className} antialiased translate-z-0 will-change-transform`}
      initial={false}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...componentProps}
    >
      <motion.span
        className={`m-0 z-20 will-change-transform ${styles.textcolor1}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? -36 : 0 }}
      >
        {children}
      </motion.span>

      <motion.span
        className={`m-0 h-full top-0 translate-y-1/2 absolute flex items-center z-20 will-change-transform ${styles.textcolor2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? -28 : 0 }}
      >
        {children}
      </motion.span>

      <motion.div
        className={`ring-0 absolute z-10 bottom-0 left-0 h-full w-full rounded-full will-change-transform ${styles.background2} ${styles.outline2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{
          y: isHovering ? '0%' : '125%',
          scaleX: isHovering ? 1 : 2,
        }}
      />
    </Component>
  );
}
