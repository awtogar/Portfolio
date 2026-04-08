import { motion, AnimatePresence } from 'motion/react';
import { useLoading } from '../../context/LoadingProvider';
import { transitionExitSlideDown, transitionExitCurve, transitionEnterSlideDown, transitionEnterCurve, transitionExitText, transitionEnterText } from '../../data/anim';
import { useDimensions } from '../../hooks/useDimensions';

const SVG_HEIGHT_OFFSET = 300;

const ExitOverlay = ({ pageTitle, dimensions, onComplete }) => {
  const w = dimensions.width;
  const h = dimensions.height;

  // Downward morphing bulge logic using precise canvas dimensions!
  const initialPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h + SVG_HEIGHT_OFFSET} 0 ${h} Z`;
  const targetPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h} 0 ${h} Z`;

  return (
    <>
      {/* Leading sliding backdrop (drops faster than main overlay) */}
      <motion.div
        initial={{ top: '-100vh' }}
        animate={{ top: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="backdrop backdrop-1 fixed inset-0 z-9997 bg-accent/35 dark:bg-neutral-100/35"
        style={{ height: '100vh', width: '100vw' }}
      />

      <motion.div
        variants={transitionExitSlideDown}
        initial="initial"
        animate="animate"
        onAnimationComplete={onComplete}
        className="fixed inset-0 z-9998 flex items-center justify-center"
        style={{ height: '100vh', width: '100vw' }}
      >
        <motion.div className="absolute z-10" variants={transitionExitText} initial="initial" animate="animate">
          <p className="textTransition">{pageTitle}</p>
        </motion.div>

        <svg className="absolute top-0 left-0 w-full" height={h + SVG_HEIGHT_OFFSET}>
          <motion.path variants={transitionExitCurve(initialPath, targetPath)} initial="initial" animate="animate" fill="currentColor" className="transition-colors duration-300" />
        </svg>
      </motion.div>
    </>
  );
};

const EnterOverlay = ({ pageTitle, dimensions, onComplete }) => {
  const w = dimensions.width;
  const h = dimensions.height;
  const offset = SVG_HEIGHT_OFFSET;

  // Upward morphing bulge logic exactly matching the sidebar math
  const initialPath = `M0 ${offset} Q${w / 2} 0 ${w} ${offset} L${w} ${h + offset} L0 ${h + offset} Z`;
  const targetPath = `M0 ${offset} Q${w / 2} ${offset} ${w} ${offset} L${w} ${h + offset} L0 ${h + offset} Z`;

  return (
    <>
      {/* <motion.div
        initial={{ top: 0 }}
        animate={{ top: "100vh" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
        className="backdrop backdrop-2 fixed inset-0 z-9997 bg-red-400"
        style={{ height: '100vh', width: '100vw' }}
      /> */}

      <motion.div
        variants={transitionEnterSlideDown}
        initial="initial"
        animate="animate"
        onAnimationComplete={onComplete}
        className="fixed inset-0 z-9998 flex items-center justify-center"
        style={{ height: '100vh', width: '100vw', overflow: 'visible' }}
      >
        <motion.div className="absolute z-10" variants={transitionEnterText} initial="initial" animate="animate">
          <p className="textTransition">{pageTitle}</p>
        </motion.div>

        <svg className="absolute left-0 w-full" style={{ top: -offset }} height={h + 2 * offset}>
          <motion.path
            variants={transitionEnterCurve(initialPath, targetPath)}
            initial="initial"
            animate="animate"
            fill="currentColor"
            className="transition-colors duration-300"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default function Transition() {
  const dimensions = useDimensions();
  const { phase, pageTitle, onExitComplete, onEnterComplete } = useLoading();

  if (dimensions.width === 0) return null;

  return (
    <AnimatePresence mode="wait">
      {phase === 'exit' && <ExitOverlay key="exit" pageTitle={pageTitle} dimensions={dimensions} onComplete={onExitComplete} />}
      {phase === 'enter' && <EnterOverlay key="enter" pageTitle={pageTitle} dimensions={dimensions} onComplete={onEnterComplete} />}
    </AnimatePresence>
  );
}
