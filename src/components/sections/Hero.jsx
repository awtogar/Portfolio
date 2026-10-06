import { BaseSection, TextReveal } from '@/components';
import { useEffect, useRef } from 'react';
import { RiArrowDownLongLine } from '@remixicon/react';

const Hero = () => {
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


  return (
    <BaseSection sectionClassName="section-padding-x" containerClassName="flex-col w-full max-w-[1920px] h-[75svh] m-auto md:h-[85svh] lg:h-[95svh]">
      <div ref={heroRef} className="absolute top-0 left-0 w-full h-px pointer-events-none" aria-hidden />
      <div className="flex flex-col justify-between w-full h-full">
        <div className="pt-[86px] text-h600 font-medium leading-[1.1] tracking-[-0.02em] text-foreground lg:pt-[84px]">
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="block relative">
            <TextReveal as="h1" className="flex w-full font-serif text-display text-start leading-[1.2] tracking-[-0.05em] whitespace-nowrap" startDelay={0.75}>
              Awaluddin Togar
            </TextReveal>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <TextReveal as="span" startDelay={1.3}>
                <RiArrowDownLongLine size={18} />
              </TextReveal>
              <TextReveal as="span" startDelay={1.3}>
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
