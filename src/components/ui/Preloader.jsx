import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PreloaderSlideUp } from '../../data/anim';

// Constants
const PRELOADER_WORDS = ['Tell None', 'Show them', 'Your Quality'];
const INITIAL_DELAY = 400;
const WORD_TRANSITION_DELAY = 500;
const SVG_HEIGHT_OFFSET = 300;

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === PRELOADER_WORDS.length - 1) return;

    const timeout = setTimeout(() => setIndex(index + 1), index === 0 ? INITIAL_DELAY : WORD_TRANSITION_DELAY);

    return () => clearTimeout(timeout);
  }, [index]);

  // Don't render SVG content until dimensions are available
  if (dimension.width === 0) {
    return (
      <motion.div
        variants={PreloaderSlideUp}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
        style={{ height: '100vh', width: '100vw' }}
      />
    );
  }

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + SVG_HEIGHT_OFFSET} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  // Animation variants
  const curvePath = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={PreloaderSlideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-primary"
      style={{ height: '100vh', width: '100vw' }}
    >
      <div className="absolute z-10 text-center perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={{
              initial: { opacity: 0 },
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
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-brand-primary text-4xl font-bold flex items-center"
          >
            {PRELOADER_WORDS[index].split('').map((char, i) => (
              <motion.span key={i} variants={{}} className={`inline-block ${char === ' ' ? 'w-4' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <svg className="absolute top-0 left-0 w-full" height={dimension.height + SVG_HEIGHT_OFFSET}>
        <motion.path variants={curvePath} initial="initial" exit="exit" fill="currentColor" className="transition-colors duration-300" />
      </svg>
    </motion.div>
  );
};

export default Preloader;
