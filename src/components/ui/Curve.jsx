import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

export default function Curve() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const initialPath = `M100 0 L100 ${dimensions.height} Q-100 ${dimensions.height/2} 100 0`
  const targetPath = `M100 0 L100 ${dimensions.height} Q100 ${dimensions.height/2} 100 0`

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
        <motion.path variants={curvePath} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}