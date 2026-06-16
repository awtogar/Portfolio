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
      style={{ zIndex: layer.zIndex }}
      // Always start from hidden — Motion animates from this on first mount.
      // On phase changes within the same mount (exit → wait-for-ready → enter)
      // Motion interpolates from wherever the element currently is, not initial.
      initial={{ y: Y.hidden }}
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
  hidden: { y: '40px', opacity: 0 },
  in: {
    y: '0px',
    opacity: 1,
    transition: PAGE_TRANSITION.titleIn,
  },
  out: {
    y: '-32px',
    opacity: 0,
    transition: PAGE_TRANSITION.titleOut,
  },
};

export default function PageTransition() {
  const { phase, pageTitle, onExitComplete, onEnterComplete } = usePageFlow();
  const overlayRef = useRef(null);

  // Attach scroll-lock listeners as non-passive so preventDefault works
  useEffect(() => {
    if (phase === 'idle') return;
    const el = overlayRef.current;
    if (!el) return;

    const prevent = e => e.preventDefault();
    el.addEventListener('wheel', prevent, { passive: false });
    el.addEventListener('touchmove', prevent, { passive: false });
    return () => {
      el.removeEventListener('wheel', prevent);
      el.removeEventListener('touchmove', prevent);
    };
  }, [phase]);

  // Synchronous ref reset — avoids the useEffect lag that caused dropped completions.
  const doneRef = useRef({ phase: null, layers: new Set() });
  if (doneRef.current.phase !== phase) {
    doneRef.current = { phase, layers: new Set() };
  }

  // Return null on idle so curtains don't animate back down after transition.
  if (phase === 'idle') return null;

  const handleLayerComplete = layerId => {
    if (doneRef.current.phase !== phase) return;
    doneRef.current.layers.add(layerId);
    if (doneRef.current.layers.size < CURTAIN_LAYERS.length) return;
    if (phase === 'exit') onExitComplete();
    if (phase === 'enter') onEnterComplete();
  };

  const titleState =
    phase === 'enter' ? 'out'
    : phase === 'exit' || phase === 'wait-for-ready' ? 'in'
    : 'hidden';

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10000] overflow-hidden touch-none"
      aria-hidden={phase === 'enter'}
    >
      {CURTAIN_LAYERS.map(layer => (
        <CurtainLayer
          key={layer.zIndex}
          layer={layer}
          phase={phase}
          onComplete={() => handleLayerComplete(layer.zIndex)}
        />
      ))}

      {/* Title between the two curtain layers */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <div className="overflow-hidden">
          <motion.p
            className="font-serif text-secondary text-h300 leading-none tracking-[-0.02em]"
            initial="hidden"
            animate={titleState}
            variants={titleVariants}
          >
            {pageTitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
