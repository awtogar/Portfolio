import { BaseSection, TextReveal } from '@/components';
import { useState, useEffect } from 'react';

const HomeHeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        setPrevIndex(prev);
        return (prev + 1) % 2;
      });
    }, 1550);
    return () => clearInterval(interval);
  }, []);

  const words = ['developer', 'creative'];

  const getWordClass = wordIndex => {
    const base = '[grid-area:1/1] flex items-center whitespace-nowrap';

    if (wordIndex === activeIndex) return `${base} animate-slide-in-down`;
    if (wordIndex === prevIndex) return `${base} animate-slide-out-down`;
    if (wordIndex === 0 && prevIndex === -1) return `${base} opacity-100 translate-y-0`;
    return `${base} opacity-0 translate-y-full`;
  };

  return (
    <BaseSection sectionClassName="section-padding-x" containerClassName="flex-col h-[75vh] md:h-[85vh] lg:h-[95vh] m-auto w-full max-w-[1920px]">
      <div className="flex flex-col justify-between h-full w-full pt-[36px]">
        <div className="pt-[64px] lg:pt-[84px] text-[clamp(1rem,6vw,1.5rem)] font-medium leading-[1.1] tracking-[-0.02em] text-foreground">
          <div className="flex gap-2">
            {/* welcome text */}
            <TextReveal as="span" isHero startDelay={1.1}>
              Junior
            </TextReveal>
            <span className="inline-grid overflow-hidden items-center">
              {words.map((word, i) => (
                <TextReveal key={word} className={getWordClass(i)} isHero startDelay={1.6}>
                  {word}
                </TextReveal>
              ))}
            </span>
          </div>
          <div className="flex">
            <TextReveal as="span" className="m-0" startDelay={1.25} isHero>
              based in Jakarta.
            </TextReveal>
          </div>
        </div>

        <div className="flex w-full justify-center pb-6">
          <TextReveal
            as="h1"
            className="text-[calc(100vw/10)] font-[500] leading-[1.2] tracking-[-0.03em] w-full text-center whitespace-nowrap flex justify-center"
            isHero
            startDelay={0.75}
          >
            Awaluddin Togar
          </TextReveal>
        </div>
      </div>
    </BaseSection>
  );
};

export default HomeHeroSection;
