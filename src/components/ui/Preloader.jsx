import { motion, AnimatePresence } from 'motion/react';
import { PreloaderSlideUp, preloaderCurvePath } from '../../data/anim';
import { useLoading } from '../../context/LoadingProvider';
import { useDimensions } from '../../hooks/useDimensions';

const SVG_HEIGHT_OFFSET = 300;

const numberVariants = {
  initial: { y: 0 },
  exit: {
    y: '-100%',
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const PreloaderContent = () => {
  const { initialProgress: progress } = useLoading();
  const dimensions = useDimensions();
  
  const showFallback = dimensions.width === 0;

  const initialPath = showFallback
    ? ''
    : `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height + SVG_HEIGHT_OFFSET} 0 ${dimensions.height} L0 0`;

  const targetPath = showFallback
    ? ''
    : `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height} L0 0`;

  const numberEl = (
    <div className="overflow-hidden">
      <motion.span
        variants={numberVariants}
        className="inline-block text-sm font-semibold tracking-tight text-secondary"
      >
        {progress}
      </motion.span>
    </div>
  );

  // Fallback: same content, no SVG path (avoids visual pop)
  if (showFallback) {
    return (
      <motion.div
        variants={PreloaderSlideUp}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-9999 flex items-center justify-center bg-primary text-primary"
        style={{ height: '100vh', width: '100vw' }}
      >
        <div className="absolute z-10 text-center">{numberEl}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={PreloaderSlideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-9999 flex items-center justify-center bg-primary text-primary"
      style={{ height: '100vh', width: '100vw' }}
    >
      <div className="absolute z-10 text-center">{numberEl}</div>
      <svg className="absolute top-0 left-0 w-full" height={dimensions.height + SVG_HEIGHT_OFFSET}>
        <motion.path variants={preloaderCurvePath(initialPath, targetPath)} initial="initial" exit="exit" fill="currentColor" />
      </svg>
    </motion.div>
  );
};

const Preloader = () => {
  const { isInitialLoading } = useLoading();
  return <AnimatePresence mode="wait">{isInitialLoading && <PreloaderContent key="preloader" />}</AnimatePresence>;
};

export default Preloader;
