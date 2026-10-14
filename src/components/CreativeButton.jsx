'use client';

import { forwardRef } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

const MotionA = motion.create('a');
const MotionButton = motion.create('button');

const VARIANTS = {
  primary: {
    bg: 'bg-neutral-900',
    hoverBg: 'bg-neutral-100',
    text: 'text-secondary',
    hoverText: 'text-primary',
    outline: 'outline outline-1 outline-neutral-900',
  },
  secondary: {
    bg: 'bg-neutral-100',
    hoverBg: 'bg-neutral-900',
    text: 'text-primary',
    hoverText: 'text-secondary',
    outline: 'outline outline-1 outline-neutral-900',
  },
};

const CreativeButton = forwardRef(function CreativeButton({ children, className = '', variant = 'primary', href, to, onClick, width, height, ...props }, ref) {
  const router = useRouter();
  const theme = VARIANTS[variant] || VARIANTS.primary;

  let Component;
  let componentProps = {};

  if (to) {
    Component = MotionA;
    componentProps = {
      href: to,
      onClick: e => {
        e.preventDefault();
        if (onClick) onClick(e);
        router.push(to);
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

  const defaultPadding = className.match(/\bp[xy]?-|\bp-/) ? '' : 'px-4 py-2 text-base-sm';

  return (
    <Component
      className={`group font-light text-center ring-0 all-unset inline-flex content-center justify-center cursor-pointer ${theme.bg} ${theme.outline} rounded-full relative overflow-clip antialiased translate-z-0 ${defaultPadding} ${className}`}
      style={customSizeStyle}
      ref={ref}
      {...componentProps}
    >
      {/* Invisible spacer to maintain button width/height based on text */}
      <span className="invisible m-0">{children}</span>

      {/* Default text (slides up and disappears) */}
      <span
        className={`absolute inset-0 flex items-center justify-center m-0 z-20 transition-transform duration-300 ease-linear transform group-hover:-translate-y-full ${theme.text}`}
      >
        {children}
      </span>

      {/* Hover text (slides up from bottom) */}
      <span
        className={`absolute inset-0 flex items-center justify-center m-0 z-20 transition-transform duration-300 ease-linear transform translate-y-full group-hover:translate-y-0 ${theme.hoverText}`}
      >
        {children}
      </span>

      {/* Hover background (scales up from bottom) */}
      <div
        className={`absolute z-10 bottom-0 left-0 h-full w-full rounded-full transition-transform duration-300 ease-linear transform translate-y-[125%] scale-x-[2] group-hover:translate-y-0 group-hover:scale-x-100 ${theme.hoverBg} ${theme.outline}`}
      />
    </Component>
  );
});

export default CreativeButton;
