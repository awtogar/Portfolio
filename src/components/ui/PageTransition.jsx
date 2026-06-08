import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { usePageFlow } from '@/context';
import { PAGE_TRANSITION, CURTAIN_LAYERS } from '@/data/anim/pageTransition';

const Y = {
  hidden: '130%',
  covered: '0%',
  revealed: '-130%',
};

function getY(phase) {
  if (phase === 'enter') return Y.revealed;
  if (phase === 'exit' || phase === 'wait-for-ready') return Y.covered;
  return Y.hidden;
}

function CurtainLayer({ layer, phase, onComplete }) {
  const isEnter = phase === 'enter';

  return (
    <motion.div
      className={`absolute inset-0 will-change-transform ${layer.className}`}
      style={{ zIndex: layer.zIndex, transform: 'translate3d(0,0,0)' }}
      initial={{ y: isEnter ? Y.covered : Y.hidden }}
      animate={{ y: getY(phase) }}
      transition={{
        ...(isEnter ? PAGE_TRANSITION.reveal : PAGE_TRANSITION.cover),
        delay: isEnter ? layer.revealDelay : layer.coverDelay,
      }}
      onAnimationComplete={onComplete}
    />
  );
}

const titleVariants = {
  hidden: {
    y: Y.hidden,
    opacity: 0,
  },
  in: {
    y: Y.covered,
    opacity: 1,
    transition: PAGE_TRANSITION.titleIn,
  },
  out: {
    y: Y.revealed,
    opacity: 0,
    transition: PAGE_TRANSITION.titleOut,
  },
};

export default function PageTransition() {
  const { phase, pageTitle, onExitComplete, onEnterComplete } = usePageFlow();
  const doneRef = useRef({ phase: null, layers: new Set() });

  useEffect(() => {
    doneRef.current = { phase, layers: new Set() };
  }, [phase]);

  if (phase === 'idle') return null;

  const handleLayerComplete = layerId => {
    if (doneRef.current.phase !== phase) return;

    doneRef.current.layers.add(layerId);

    if (doneRef.current.layers.size < CURTAIN_LAYERS.length) return;

    if (phase === 'exit') onExitComplete();
    if (phase === 'enter') onEnterComplete();
  };

  const titleState = phase === 'enter' ? 'out' : phase === 'exit' || phase === 'wait-for-ready' ? 'in' : 'hidden';

  return (
    <div className="fixed inset-0 z-[10000] overflow-hidden touch-none" onWheel={e => e.preventDefault()} onTouchMove={e => e.preventDefault()} aria-hidden={phase === 'enter'}>
      {CURTAIN_LAYERS.map(layer => (
        <CurtainLayer key={layer.zIndex} layer={layer} phase={phase} onComplete={() => handleLayerComplete(layer.zIndex)} />
      ))}

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="overflow-hidden leading-none">
          <motion.p className="textTransition" initial="hidden" animate={titleState} variants={titleVariants}>
            {pageTitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
