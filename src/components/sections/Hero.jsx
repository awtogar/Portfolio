import { BaseSection, TextReveal } from '@/components';
import { useState, useEffect, useRef } from 'react';
import { RiArrowDownLongLine } from '@remixicon/react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.location.pathname === '/') {
          window.history.replaceState(null, '', '/');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        setPrevIndex(prev);
        return (prev + 1) % 2;
      });
    }, 1550);
    return () => clearInterval(interval);
  }, []);

  const words = ['Designer', 'Engineer'];
  const getWordClass = wordIndex => {
    const base = '[grid-area:1/1] flex items-center whitespace-nowrap';

    if (wordIndex === activeIndex) return `${base} animate-slide-in-down`;
    if (wordIndex === prevIndex) return `${base} animate-slide-out-down`;
    if (wordIndex === 0 && prevIndex === -1) return `${base} opacity-100 translate-y-0`;
    return `${base} opacity-0 translate-y-full`;
  };

  return (
    <BaseSection sectionClassName="section-padding-x" containerClassName="flex-col w-full max-w-[1920px] h-[75svh] m-auto md:h-[85svh] lg:h-[95svh]">
      <div ref={heroRef} className="absolute top-0 left-0 w-full h-px pointer-events-none" aria-hidden />
      <div className="flex flex-col justify-between w-full h-full pt-[36px]">
        <div className="pt-[86px] text-h600 font-medium leading-[1.1] tracking-[-0.02em] text-foreground lg:pt-[84px]">
          {/* <div className="flex gap-2">
            <TextReveal as="span" startDelay={1.1} replayOnNavigate>
              Creative
            </TextReveal>
            <span className="inline-grid overflow-hidden items-center">
              {words.map((word, i) => (
                <TextReveal key={word} className={getWordClass(i)} startDelay={1.6} replayOnNavigate>
                  {word}
                </TextReveal>
              ))}
            </span>
          </div> */}
          {/* <div className="relative block">
            <TextReveal as="span" className="m-0" startDelay={1.25} replayOnNavigate>
              based in Jakarta.
            </TextReveal>
          </div> */}
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className="block relative">
            <TextReveal replayOnNavigate as="h1" className="flex w-full font-serif text-display text-start leading-[1.2] tracking-[-0.05em] whitespace-nowrap" startDelay={0.75}>
              Awaluddin Togar
            </TextReveal>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <TextReveal as="span" startDelay={1.3} replayOnNavigate>
                <RiArrowDownLongLine size={18} />
              </TextReveal>
              <TextReveal as="span" startDelay={1.3} replayOnNavigate>
                <span>(Scroll)</span>
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default Hero;
