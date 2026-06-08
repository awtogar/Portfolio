import React from 'react';
import { motion } from "motion/react"

export default function Curve({ instant = false }) {
  // Using viewBox 100x100 and preserveAspectRatio="none" 
  // means we don't need JS height calculations! It seamlessly scales to 100dvh.
  const initialPath = `M100 0 L100 100 Q-100 50 100 0`;
  const targetPath = `M100 0 L100 100 Q100 50 100 0`;

  const curvePath = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        // Perfectly matching menuSlideLeft duration (0.9s)
        transition: {duration: 0.9, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        d: initialPath,
        transition: instant
          ? { duration: 0 }
          : { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    }
  }

  return (
    <svg 
      className="absolute top-0 left-[-99px] w-[100px] h-full fill-neutral-500 stroke-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
        <motion.path 
          variants={curvePath} 
          initial="initial" 
          animate="enter" 
          exit="exit" 
        />
    </svg>
  )
}