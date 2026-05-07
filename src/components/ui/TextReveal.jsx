import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useLoading } from '@/context/LoadingProvider';

const TextReveal = ({ lines = [], as: Component = 'div', className = '', lineClassName = '', style, staggerDelay = 0.075, startDelay = 0, ready = true }) => {
  const { isReady, isTransitioning } = useLoading();
  const globalReady = isReady && !isTransitioning;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const shouldAnimate = isInView && globalReady && ready;
  const [hasAnimated, setHasAnimated] = useState(false);

  if (shouldAnimate && !hasAnimated) setHasAnimated(true);

  const animation = {
    initial: { y: '100%' },
    enter: i => ({
      y: '0%',
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: startDelay + i * staggerDelay,
      },
    }),
  };

  return (
    <Component ref={ref} className={className} style={style}>
      {lines.map((line, idx) => (
        <span key={idx} style={{ display: 'block', overflow: 'hidden' }}>
          <motion.span className={lineClassName} style={{ display: 'block' }} custom={idx} variants={animation} initial="initial" animate={hasAnimated ? 'enter' : 'initial'}>
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

export default TextReveal;
