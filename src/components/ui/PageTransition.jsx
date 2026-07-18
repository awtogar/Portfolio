import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useLoading } from '@/context';
import { PAGE_TRANSITION, CURTAIN_LAYERS, TITLE_TRANSITION } from '@/data/anim/pageTransition';

const Textitle = { hidden: '100%', covered: '0%', revealed: '-100%' };

function getTextTitle(phase) {
  if (phase === 'enter') return Textitle.revealed;
  if (phase === 'exit' || phase === 'wait-for-ready') return Textitle.covered;
  return Textitle.hidden;
}

function CurtainLayer({ layer, phase, onComplete }) {
  const isEnter = phase === 'enter';
  return (
    <motion.div
      className={`absolute inset-0 will-change-transform ${layer.className}`}
      style={{ zIndex: layer.zIndex }}
      initial={{ y: Textitle.hidden }}
      animate={{ y: getTextTitle(phase) }}
      transition={{
        ...(isEnter ? PAGE_TRANSITION.reveal : PAGE_TRANSITION.cover),
        delay: isEnter ? layer.revealDelay : layer.coverDelay,
      }}
      onAnimationComplete={onComplete}
    />
  );
}

// Clip mask synced exactly to the last (primary) curtain layer.
const clipVariants = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  in: { clipPath: 'inset(0 0 0% 0)', transition: TITLE_TRANSITION.in },
  out: { clipPath: 'inset(0 0 100% 0)', transition: TITLE_TRANSITION.out },
};

export default function PageTransition() {
  const { phase, pageTitle, onExitComplete, onEnterComplete } = useLoading();
  const overlayRef = useRef(null);

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

  const doneRef = useRef({ phase: null, layers: new Set() });
  if (doneRef.current.phase !== phase) {
    doneRef.current = { phase, layers: new Set() };
  }

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
    <div ref={overlayRef} className="fixed inset-0 z-[10000] overflow-hidden touch-none" aria-hidden={phase === 'enter'}>
      {CURTAIN_LAYERS.map(layer => (
        <CurtainLayer key={layer.zIndex} layer={layer} phase={phase} onComplete={() => handleLayerComplete(layer.zIndex)} />
      ))}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: CURTAIN_LAYERS.length + 1 }}>
        <motion.div className="overflow-hidden" initial="hidden" animate={titleState} variants={clipVariants}>
          <p className="font-serif text-secondary text-h400 leading-none tracking-[-0.02em]">{pageTitle}</p>
        </motion.div>
      </div>
    </div>
  );
}
