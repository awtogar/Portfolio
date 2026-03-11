import { motion, AnimatePresence } from 'motion/react';
import { useDimensions } from '../../hooks/useDimensions';
import { useTransition } from '../../context/TransitionContext';
import {
  transitionExitSlideDown,
  transitionExitCurve,
  transitionEnterSlideDown,
  transitionEnterCurve,
  transitionExitText,
  transitionEnterText,
} from '../../data/anim';

const SVG_HEIGHT_OFFSET = 300;

const ExitOverlay = ({ pageTitle, dimensions, onComplete }) => {
  const w = dimensions.width;
  const h = dimensions.height;

  const initialPath = `M0 0 L${w} 0 L${w} ${h + SVG_HEIGHT_OFFSET} L0 ${h + SVG_HEIGHT_OFFSET} Z`;
  const targetPath = `M0 0 L${w} 0 L${w} ${h + SVG_HEIGHT_OFFSET} L0 ${h + SVG_HEIGHT_OFFSET} Z`;

  return (
    <motion.div
      variants={transitionExitSlideDown}
      initial="initial"
      animate="animate"
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <motion.div
        className="absolute z-10"
        variants={transitionExitText}
        initial="initial"
        animate="animate"
      >
        <p className="textTransition">{pageTitle}</p>
      </motion.div>

      <svg className="absolute top-0 left-0 w-full" height={h + SVG_HEIGHT_OFFSET}>
        <motion.path
          variants={transitionExitCurve(initialPath, targetPath)}
          initial="initial"
          animate="animate"
          fill="currentColor"
          className="transition-colors duration-300"
        />
      </svg>
    </motion.div>
  );
};

const EnterOverlay = ({ pageTitle, dimensions, onComplete }) => {
  const w = dimensions.width;
  const h = dimensions.height;
  const offset = SVG_HEIGHT_OFFSET;

  const initialPath = `M0 ${offset} Q${w / 2} 0 ${w} ${offset} L${w} ${h + offset} L0 ${h + offset} Z`;
  const targetPath = `M0 ${offset} Q${w / 2} ${offset} ${w} ${offset} L${w} ${h + offset} L0 ${h + offset} Z`;

  return (
    <motion.div
      variants={transitionEnterSlideDown}
      initial="initial"
      animate="animate"
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      style={{ height: '100vh', width: '100vw', overflow: 'visible' }}
    >
      <motion.div
        className="absolute z-10"
        variants={transitionEnterText}
        initial="initial"
        animate="animate"
      >
        <p className="textTransition">{pageTitle}</p>
      </motion.div>

      <svg
        className="absolute left-0 w-full"
        style={{ top: -offset }}
        height={h + 2 * offset}
      >
        <motion.path
          variants={transitionEnterCurve(initialPath, targetPath)}
          initial="initial"
          animate="animate"
          fill="currentColor"
          className="transition-colors duration-300"
        />
      </svg>
    </motion.div>
  );
};

export default function Transition() {
  const dimensions = useDimensions();
  const { phase, pageTitle, onExitComplete, onEnterComplete } = useTransition();

  if (dimensions.width === null) return null;

  return (
    <AnimatePresence mode="wait">
      {phase === 'exit' && (
        <ExitOverlay
          key="exit"
          pageTitle={pageTitle}
          dimensions={dimensions}
          onComplete={onExitComplete}
        />
      )}
      {phase === 'enter' && (
        <EnterOverlay
          key="enter"
          pageTitle={pageTitle}
          dimensions={dimensions}
          onComplete={onEnterComplete}
        />
      )}
    </AnimatePresence>
  );
}
