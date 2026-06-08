import { BaseSection, TextReveal } from '@/components';
import { useState, useEffect } from 'react';
import { placeholder } from '@/assets';

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

  const words = ['Awaluddin', 'Togar'];
  const getWordClass = wordIndex => {
    const base = '[grid-area:1/1] flex items-center whitespace-nowrap';

    if (wordIndex === activeIndex) return `${base} animate-slide-in-down`;
    if (wordIndex === prevIndex) return `${base} animate-slide-out-down`;
    if (wordIndex === 0 && prevIndex === -1) return `${base} opacity-100 translate-y-0`;
    return `${base} opacity-0 translate-y-full`;
  };

  return (
    <BaseSection sectionClassName="section-padding-x" containerClassName="flex-col min-h-[75vh] md:min-h-[90vh] lg:min-h-[95vh] m-auto w-full max-w-[1920px]">
      <div className="flex flex-col justify-between h-full w-full pt-[36px]">
        <div className="pt-[86px] lg:pt-[84px] text-h600 font-medium leading-[1.1] tracking-[-0.02em] text-foreground">
          <div className="flex">
            <TextReveal as="span" className="m-0" startDelay={1.25} isHero>
              Hey there,
            </TextReveal>
          </div>
          <div className="flex gap-2">
            <TextReveal as="span" isHero startDelay={1.1}>
              I'm —
            </TextReveal>
            <span className="inline-grid overflow-hidden items-center">
              {words.map((word, i) => (
                <TextReveal key={word} className={getWordClass(i)} isHero startDelay={1.6}>
                  {word}
                </TextReveal>
              ))}
            </span>
          </div>
        </div>

        <div className="flex w-full justify-start gap-6 flex-col md:items-center">
          <div className="flex justify-center w-full">
            <img src={placeholder} alt="Awaluddin Togar" className="w-full aspect-[3/4] object-cover grayscale max-h-[40vh] md:max-h-none md:w-auto md:h-[436px]" />
          </div>
          <div className="grid grid-cols-[6fr_2fr] md:grid md:grid-cols-[4fr_4fr] items-end w-full">
            <div className="flex items-end justify-start">
              <TextReveal as="span" className="text-h500 body-display" startDelay={1.3} isHero>
                Design without code is a mood board. <span className="md:block">Code without design is a utility.</span> <span className="md:block">I do both.</span>
              </TextReveal>
            </div>
            <div className="flex items-end justify-end">
              <TextReveal as="span" startDelay={1.3} isHero>
                (Scroll)
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default HomeHeroSection;
