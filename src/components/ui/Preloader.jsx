import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PreloaderSlideUp, preloaderCurvePath } from '../../data/anim';
import { useDimensions } from '../../hooks/useDimensions';

const PRELOADER_WORDS = ['Show them', 'Your Quality'];
const SVG_HEIGHT_OFFSET = 300;

// Progress thresholds that trigger word change
const WORD_THRESHOLDS = [0, 80]; // word[0] until 80%, word[1] after

const charVariants = {
  initial: { opacity: 0, rotateX: 90, y: 8 },
  animate: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    rotateX: -90,
    y: -8,
    transition: { duration: 0.25, ease: [0.55, 0, 0.78, 0] },
  },
};

const wordVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
      when: 'beforeChildren',
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
};

const PreloaderContent = ({ progress }) => {
  const dimensions = useDimensions();

  // Derive word index from progress — no internal timer
  const index = WORD_THRESHOLDS.reduce((acc, threshold, i) => {
    return progress >= threshold ? i : acc;
  }, 0);

  const showFallback = dimensions.width === null;

  const initialPath = showFallback
    ? ''
    : `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height + SVG_HEIGHT_OFFSET} 0 ${dimensions.height} L0 0`;

  const targetPath = showFallback
    ? ''
    : `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height} L0 0`;

  const wordEl = (
    <AnimatePresence mode="wait">
      <motion.div key={index} variants={wordVariants} initial="initial" animate="animate" exit="exit" className="textPreloader">
        {PRELOADER_WORDS[index].split('').map((char, i) => (
          <motion.span key={i} variants={charVariants} className={`inline-block ${char === ' ' ? 'w-4' : ''}`} style={{ transformStyle: 'preserve-3d', display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );

  const progressBar = (
    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20 w-48 font-mono text-sm tracking-widest opacity-60">
      <div className="flex justify-between items-center mb-1">
        <span className="uppercase text-xs tracking-widest">Loading</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full h-px bg-current overflow-hidden">
        <motion.div className="h-full bg-current origin-left" animate={{ scaleX: progress / 100 }} transition={{ ease: 'easeOut', duration: 0.3 }} />
      </div>
    </div>
  );

  // Fallback: same content, no SVG path (avoids visual pop)
  if (showFallback) {
    return (
      <motion.div
        variants={PreloaderSlideUp}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary text-primary"
        style={{ height: '100vh', width: '100vw' }}
      >
        <div className="absolute z-10 text-center">{wordEl}</div>
        {progressBar}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={PreloaderSlideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary text-primary"
      style={{ height: '100vh', width: '100vw' }}
    >
      <div className="absolute z-10 text-center">{wordEl}</div>
      {progressBar}
      <svg className="absolute top-0 left-0 w-full" height={dimensions.height + SVG_HEIGHT_OFFSET}>
        <motion.path variants={preloaderCurvePath(initialPath, targetPath)} initial="initial" exit="exit" fill="currentColor" />
      </svg>
    </motion.div>
  );
};

const Preloader = ({ isLoading, progress }) => {
  return <AnimatePresence mode="wait">{isLoading && <PreloaderContent key="preloader" progress={progress} />}</AnimatePresence>;
};

export default Preloader;
