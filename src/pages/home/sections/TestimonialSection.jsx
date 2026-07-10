import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BaseSection, TextReveal, HeadLineLabel } from '@/components';
import { testimonials } from '@/data/testimonials';
import { RiPlayFill, RiPauseFill } from '@remixicon/react';
import gsap from 'gsap';

// Custom polygon clip-path values
const clipPathStart = 'polygon(100% 0, 0 0, 0 0, 100% 0)';
const clipPathEnd = 'polygon(100% 0, 0 0, 0 100%, 100% 100%)';

// duration for each testimonial card before to the next one
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

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const cardRef = useRef(null);

  const advance = useCallback(() => {
    setActiveIndex(i => (i + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(advance, INTERVAL_MS);
    }

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { clipPath: clipPathStart },
        {
          clipPath: clipPathEnd,
          duration: 0.6,
          // ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
        }
      );
    }

    return () => clearInterval(timerRef.current);
  }, [isPaused, advance, activeIndex]);

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
      <HeadLineLabel label="Not my words, but" headline="They say it" />
      <div className="bg-surface-invert-raised min-h-[450px] md:min-h-[420px]">
        <div ref={cardRef} className="relative min-h-[450px] md:min-h-[420px] bg-surface-invert overflow-hidden">
          <div className="relative flex flex-col justify-between p-s400 sm:p-s500 md:p-s600 lg:p-s700">
            <AnimatePresence mode="wait">
              <div key={activeIndex} className="flex flex-col justify-between h-full gap-s400 sm:gap-s500 md:gap-s600">
                <div className="flex items-center gap-s200 sm:gap-s300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 bg-on-invert-border">
                    <img src={item.avatar} alt={item.author} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-[3px] min-w-0">
                    <span className="font-sans text-base-xs sm:text-base-sm font-[500] text-on-invert-primary leading-none truncate">{item.author}</span>
                    <span className="font-mono text-base-xs text-on-invert-muted leading-none truncate">{item.role}</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                  <blockquote className="font-serif text-h600 sm:text-h500 md:text-h400 lg:text-h200 leading-[1.2] tracking-[-0.025em] text-on-invert-primary max-w-[80ch]">
                    "{item.quote}"
                  </blockquote>
                </div>
              </div>
            </AnimatePresence>
            <div className="flex justify-between items-center gap-s300 mt-s400 sm:mt-s500 md:mt-s600 pt-s400 sm:pt-s500 border-t border-on-invert-border">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`goto testimonial ${i + 1}`}
                    className="relative h-[2px] sm:h-[3px] rounded-full overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-on-invert-primary shrink-0"
                    style={{
                      width: i === activeIndex ? '40px' : '20px',
                      minWidth: i === activeIndex ? '40px' : '20px',
                      transition: 'width 0.35s cubic-bezier(0.22,1,0.36,1)',
                      background: 'rgba(255,255,255,0.15)',
                    }}
                  >
                    <DashProgress active={i === activeIndex} paused={isPaused} />
                  </button>
                ))}
              </div>
              <div className="relative block shrink-0">
                <button
                  onClick={() => setIsPaused(p => !p)}
                  aria-label={isPaused ? 'play auto-advance' : 'pause auto-advance'}
                  className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface-invert flex items-center justify-center text-on-invert-primary hover:bg-surface-invert-raised transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-on-invert-primary"
                >
                  {isPaused ? <RiPlayFill size={14} className="sm:w-4 sm:h-4" /> : <RiPauseFill size={14} className="sm:w-4 sm:h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default TestimonialSection;
