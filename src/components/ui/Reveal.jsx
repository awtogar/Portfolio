import React from 'react';
import { motion } from 'motion/react';
import { useScrollReveal } from '@/hooks/animations/useScrollReveal';

const Reveal = ({
  children,
  as = 'div',
  preset = 'fadeUp',
  delay = 0,
  duration = 0.8,
  once = true,
  margin = '0px 0px -10% 0px',
  ready,
  className = '',
  style,
  ...rest
}) => {
  const Component = motion.create(as);
  const { isVisible, ...revealProps } = useScrollReveal({ preset, delay, duration, once, margin, ready });

  return (
    <Component className={className} style={style} {...revealProps} {...rest}>
      {children}
    </Component>
  );
};

export default Reveal;
