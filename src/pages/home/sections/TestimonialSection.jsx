import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BaseSection, TextReveal } from '@/components';
import { testimonials } from '@/data/testimonials';
import { RiPlayFill, RiPauseFill } from '@remixicon/react';

const INTERVAL_MS = 5000;

const DashProgress = ({ active, paused }) => {
  const barRef = useRef(null);
  const rafRef = useRef(null);
  const elapsedRef = useRef(0);
  const lastTsRef = useRef(null);
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
    if (!paused) {
      lastTsRef.current = null;
    }
  }, [paused]);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    if (!active) {
      cancelAnimationFrame(rafRef.current);
      bar.style.width = '0%';
      elapsedRef.current = 0;
      lastTsRef.current = null;
      return;
    }

    bar.style.width = '0%';
    elapsedRef.current = 0;
    lastTsRef.current = null;

    const tick = ts => {
      if (lastTsRef.current !== null && !pausedRef.current) {
        elapsedRef.current += ts - lastTsRef.current;
      }
      lastTsRef.current = ts;

      const pct = Math.min((elapsedRef.current / INTERVAL_MS) * 100, 100);
      bar.style.width = `${pct}%`;

      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return <span ref={barRef} className="absolute inset-y-0 left-0 bg-on-invert-primary rounded-full transition-none" style={{ width: '0%' }} />;
};

const cardVariants = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
};

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const advance = useCallback(() => {
    setActiveIndex(i => (i + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, [isPaused, advance]);

  const goTo = useCallback(
    i => {
      setActiveIndex(i);
      clearInterval(timerRef.current);
      if (!isPaused) {
        timerRef.current = setInterval(advance, INTERVAL_MS);
      }
    },
    [isPaused, advance]
  );

  const item = testimonials[activeIndex];

  return (
    <BaseSection containerID="testimonials" containerClassName="m-auto w-full max-w-[1920px]">
      <div className="flex flex-col gap-s400 mb-s700 border-t border-neutral-200 pt-s500">
        <TextReveal as="span" className="font-mono text-base-xs tracking-[0.12em] uppercase text-primary-muted">
          What they say
        </TextReveal>
        <TextReveal as="p" className="text-h400 body-display font-[450] text-primary max-w-[520px] text-left">
          Built on trust - Backed by results.
        </TextReveal>
      </div>

      <div className="relative bg-surface-invert rounded-sm overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="relative min-h-[380px] md:min-h-[420px] flex flex-col justify-between p-s600 md:p-s700">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} variants={cardVariants} initial="enter" animate="center" exit="exit" className="flex flex-col justify-between h-full gap-s600">
              <div className="flex items-center gap-s300">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-on-invert-border">
                  <img src={item.avatar} alt={item.author} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-sans text-base-sm font-[500] text-on-invert-primary leading-none">{item.author}</span>
                  <span className="font-mono text-base-xs text-on-invert-muted leading-none">{item.role}</span>
                </div>
              </div>
              <div className="min-h-[30dvh]">
                <blockquote className="font-serif text-h400 md:text-h200 leading-[1.2] tracking-[-0.025em] text-on-invert-primary max-w-[80ch]">"{item.quote}"</blockquote>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center gap-s300 mt-s600">
            <div className="relative  items-center w-full flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`goto next Testimonials ${i + 1}`}
                  className="relative h-[3px] rounded-full overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-on-invert-primary"
                  style={{ width: i === activeIndex ? '48px' : '24px', transition: 'width 0.35s cubic-bezier(0.22,1,0.36,1)', background: 'rgba(255,255,255,0.15)' }}
                >
                  <DashProgress active={i === activeIndex} paused={isPaused} />
                </button>
              ))}
            </div>
            <div className="relative block">
              <button
                onClick={() => setIsPaused(p => !p)}
                aria-label={isPaused ? 'play auto-advance' : 'pause auto-advance'}
                className="relative z-10 w-8 h-8 rounded-full bg-surface-invert flex items-center justify-center text-on-invert-primary hover:bg-surface-invert-raised transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-on-invert-primary"
              >
                {isPaused ? <RiPlayFill size={16} /> : <RiPauseFill size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default TestimonialSection;
