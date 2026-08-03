'use client';

import { useState, forwardRef } from 'react';
import { motion } from "motion/react"
import { useLoading } from '@/context';

const MotionA = motion.create('a');
const MotionButton = motion.create('button');

const BUTTON_VARIANTS = {
  fill: {
    background1: 'bg-primary',
    background2: 'bg-secondary',
    outline1: 'outline outline-1 outline-primary',
    outline2: 'outline outline-1 outline-primary',
    textcolor1: 'text-secondary',
    textcolor2: 'text-primary',
  },
    fillReverse: {
    background1: 'bg-secondary',
    background2: 'bg-primary',
    outline1: 'outline outline-1 outline-primary',
    outline2: 'outline outline-1 outline-primary',
    textcolor1: 'text-primary',
    textcolor2: 'text-secondary',
  },
  outline: {
    background1: 'bg-secondary',
    background2: 'bg-primary',
    outline1: 'outline outline-1 outline-primary',
    outline2: 'outline outline-1 outline-secondary',
    textcolor1: 'text-primary',
    textcolor2: 'text-secondary',
  },
  transparent: {
    background1: 'bg-transparent',
    background2: 'bg-transparent',
    outline1: 'outline-none',
    outline2: 'outline-none',
    textcolor1: 'text-primary',
    textcolor2: 'text-primary',
  },
    outlineSecondary: {
    background1: 'bg-secondary',
    background2: 'bg-secondary',
    outline1: 'outline-none',
    outline2: 'outline-none',
    textcolor1: 'text-primary',
    textcolor2: 'text-primary',
  },
};

// Add size variants
const SIZE_VARIANTS = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
  full: 'w-full px-6 py-3',
};

const CreativeButton = forwardRef(function CreativeButton({
  children,
  className,
  href,
  to,
  onClick,
  variant,
  size,
  width,
  height,
  background1,
  background2,
  textcolor1,
  textcolor2,
  outline1,
  outline2,
  ...props
}, ref) {
  const [isHovering, setIsHovering] = useState(false);
  const { navigateTo } = useLoading();

  const variantStyles = variant ? BUTTON_VARIANTS[variant] : {};

  const sizeClasses = SIZE_VARIANTS[size] || SIZE_VARIANTS.md;

  const styles = {
    background1: background1 || variantStyles.background1 || 'bg-primary',
    background2: background2 || variantStyles.background2 || 'bg-brand-secondary',
    textcolor1: textcolor1 || variantStyles.textcolor1 || 'text-secondary',
    textcolor2: textcolor2 || variantStyles.textcolor2 || 'text-primary',
    outline1: outline1 || variantStyles.outline1 || 'outline outline-1 outline-secondary',
    outline2: outline2 || variantStyles.outline2 || 'outline outliner-1 outline-secondary',
  };

  let Component;
  let componentProps = {};

  if (to) {
    Component = MotionA;
    componentProps = {
      href: to,
      onClick: (e) => {
        e.preventDefault();
        if (onClick) onClick(e);
        navigateTo(to);
      },
      ...props,
    };
  } else if (href) {
    Component = MotionA;
    componentProps = { href, ...props };
  } else {
    Component = MotionButton;
    componentProps = { onClick, ...props };
  }

  // Create custom style string for width/height if provided
  const customSizeStyle = {};
  if (width) customSizeStyle.width = width;
  if (height) customSizeStyle.height = height;

  return (
    <Component
      className={`font-light text-center ring-0 all-unset inline-flex content-center justify-center cursor-pointer ${styles.background1} ${styles.outline1} rounded-full relative overflow-clip antialiased translate-z-0 will-change-transform ${sizeClasses} ${className}`}
      style={Object.keys(customSizeStyle).length > 0 ? customSizeStyle : undefined}
      initial={false}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={ref}
      {...componentProps}
    >
      {/* Invisible static child to correctly size the button based on fluid font sizes */}
      <span className="invisible m-0">{children}</span>

      <motion.span
        className={`absolute inset-0 flex items-center justify-center m-0 z-20 will-change-transform ${styles.textcolor1}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? "-100%" : "0%" }}
      >
        {children}
      </motion.span>

      <motion.span
        className={`absolute inset-0 flex items-center justify-center m-0 z-20 will-change-transform ${styles.textcolor2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? "0%" : "100%" }}
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
});

export default CreativeButton;
