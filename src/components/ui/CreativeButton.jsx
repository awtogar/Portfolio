'use client';

import { useState, forwardRef } from 'react';
import { motion } from 'motion/react';
import { useLoading } from '@/context';

const MotionA = motion.create('a');
const MotionButton = motion.create('button');

const SIZE_VARIANTS = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
  full: 'w-full px-6 py-3',
};

const isRawColor = value => typeof value === 'string' && /^(#|rgb|hsl|var\()/.test(value.trim());

const resolveColor = (value, fallbackClass) => {
  if (!value) return { className: fallbackClass, style: undefined };
  if (isRawColor(value)) return { className: '', style: { backgroundColor: value } };
  return { className: value, style: undefined };
};

const resolveOutline = (value, fallbackClass) => {
  if (!value) return { className: fallbackClass, style: undefined };
  if (isRawColor(value)) return { className: 'outline outline-1', style: { outlineColor: value } };
  return { className: `outline outline-1 ${value}`, style: undefined };
};

const CreativeButton = forwardRef(function CreativeButton(
  { children, className, href, to, onClick, size, width, height, fillColor1, fillColor2, outlineColor, textcolor1, textcolor2, ...props },
  ref
) {
  const [isHovering, setIsHovering] = useState(false);
  const { navigateTo } = useLoading();

  const sizeClasses = SIZE_VARIANTS[size] || SIZE_VARIANTS.md;

  const bg1 = resolveColor(fillColor1, 'bg-surface-invert');
  const bg2 = resolveColor(fillColor2, 'bg-surface');
  const ol = resolveOutline(outlineColor, 'outline outline-1 outline-surface-invert');

  const styles = {
    textcolor1: textcolor1 || 'text-primary',
    textcolor2: textcolor2 || 'text-secondary',
  };

  let Component;
  let componentProps = {};

  if (to) {
    Component = MotionA;
    componentProps = {
      href: to,
      onClick: e => {
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

  const customSizeStyle = {};
  if (width) customSizeStyle.width = width;
  if (height) customSizeStyle.height = height;

  return (
    <Component
      className={`font-light text-center ring-0 all-unset inline-flex content-center justify-center cursor-pointer ${bg1.className} ${ol.className} rounded-full relative overflow-clip antialiased translate-z-0 will-change-transform ${sizeClasses} ${className}`}
      style={{ ...customSizeStyle, ...bg1.style, ...ol.style }}
      initial={false}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={ref}
      {...componentProps}
    >
      <span className="invisible m-0">{children}</span>

      <motion.span
        className={`absolute inset-0 flex items-center justify-center m-0 z-20 will-change-transform ${styles.textcolor1}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? '-100%' : '0%' }}
      >
        {children}
      </motion.span>

      <motion.span
        className={`absolute inset-0 flex items-center justify-center m-0 z-20 will-change-transform ${styles.textcolor2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? '0%' : '100%' }}
      >
        {children}
      </motion.span>

      <motion.div
        className={`ring-0 absolute z-10 bottom-0 left-0 h-full w-full rounded-full will-change-transform ${bg2.className} ${ol.className}`}
        style={{ ...bg2.style, ...ol.style }}
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
