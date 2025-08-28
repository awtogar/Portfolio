import { useEffect, useState } from 'react';
import { motion, AnimatePresence, stagger, easeOut } from 'framer-motion';
import { opacity, PreloaderFade, PreloaderSlideUp } from '../anim';

const TheWords = ['Tell None', 'Show them', 'Your Quality'];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === TheWords.length - 1) return;
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 400 : 500 // Faster transitions to match 2000ms total timer
    );
    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.03,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'afterChildren',
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    initial: {},
    animate: {},
    exit: {},
  };

  return (
    <motion.div
      variants={PreloaderSlideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-primary"
      style={{ height: '100vh', width: '100vw' }}
    >
      {dimension.width > 0 && (
        <>
          <div className="absolute z-10 text-center perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-brand-primary text-4xl font-bold flex items-center"
              >
                {TheWords[index].split('').map((char, i) => (
                  <motion.span key={i} variants={letterVariants} className={`inline-block ${char === ' ' ? 'w-4' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <svg className="absolute top-0 left-0 w-full" height={dimension.height + 300}>
            <motion.path variants={curve} initial="initial" exit="exit" fill="primary" className="transition-colors duration-300" />
          </svg>
        </>
      )}
    </motion.div>
  );
}
