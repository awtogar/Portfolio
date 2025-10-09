import React from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from '../../hooks/useDimensions';

export default function Curve() {
  const dimensions = useDimensions();
  

  const dimensionHeight = dimensions.height || 0;

  const initialPath = `M100 0 L100 ${dimensionHeight} Q-100 ${dimensionHeight/2} 100 0`;
  const targetPath = `M100 0 L100 ${dimensionHeight} Q100 ${dimensionHeight/2} 100 0`;

  const curvePath = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        d: initialPath,
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
  }

  return (
    <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-neutral-500 stroke-none">
        <motion.path variants={curvePath} initial="initial" animate={dimensionHeight > 0 ? "enter" : "initial"} exit="exit"></motion.path>
    </svg>
  )
}