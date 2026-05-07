import { useRef } from 'react';
import { useInView } from 'motion/react';
import { useAnimationReady } from './useAnimationReady';
import { revealPresets, defaultEase } from '@/data/anim/presets';

export const useScrollReveal = ({
  preset = 'fadeUp',
  delay = 0,
  duration = 0.8,
  ease = defaultEase,
  once = true,
  margin = '0px 0px -10% 0px',
  ready: externalReady,
} = {}) => {
  const ref = useRef(null);
  const globalReady = useAnimationReady();
  const isInView = useInView(ref, { once, margin });

  const ready = externalReady !== undefined ? externalReady : globalReady;
  const shouldAnimate = isInView && ready;

  const presetData = revealPresets[preset] || revealPresets.fadeUp;

  const variants = {
    hidden: presetData.initial,
    visible: {
      ...presetData.animate,
      transition: { duration, ease, delay },
    },
  };

  return {
    ref,
    variants,
    initial: 'hidden',
    animate: shouldAnimate ? 'visible' : 'hidden',
    isVisible: shouldAnimate,
  };
};
