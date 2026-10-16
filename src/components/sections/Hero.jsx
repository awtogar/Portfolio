import { BaseSection, TextReveal } from '@/components';
import { useEffect } from 'react';
import { RiArrowDownLongLine } from '@remixicon/react';
import { useIntersectionObserver } from '@/hooks';

const Hero = () => {
  const { ref: heroRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (isIntersecting && window.location.pathname === '/') {
      window.history.replaceState(null, '', '/');
    }
  }, [isIntersecting]);

  return (
    <BaseSection sectionClassName="section-padding-x py-4" containerClassName="flex-col w-full max-w-[1920px] h-[85svh] m-auto">
      <div ref={heroRef} className="absolute top-0 left-0 w-full h-px pointer-events-none" aria-hidden />
      <div className="flex flex-col justify-end w-full h-full">
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="block relative">
            <TextReveal
              as="h1"
              className="w-full font-serif text-display text-center md:text-start leading-[1.3] md:leading-[1.2] tracking-[-0.05em] md:whitespace-nowrap"
              startDelay={0.75}
            >
              Awaluddin Togar
            </TextReveal>
          </div>
          <div className="flex items-center justify-center pb-4 lg:pb-6">
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
