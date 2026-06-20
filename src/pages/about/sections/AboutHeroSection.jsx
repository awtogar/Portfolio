import { BaseSection, TextReveal } from '@/components';
import { placeholder } from '@/assets';

const AboutHeroSection = () => {
  return (
    <BaseSection sectionClassName="section-padding-xy">
      <div className="flex flex-col">
        <div className="flex justify-center mt-s500">
          <div className="relative aspect-ratio[3/4]">
            <img src={placeholder} alt="Awaluddin Togar" className="w-full h-full max-h-[200px] object-cover grayscale" style={{ display: 'block' }} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center w-full">
            <div className="relative block">
              <TextReveal as="span">A</TextReveal>
            </div>
            <div className="relative block">
              <TextReveal as="span">SERIOUSLY</TextReveal>
            </div>
            <div className="relative block">
              <TextReveal as="span">GOOD</TextReveal>
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-0">
              <div className="relative block">
                <TextReveal as="h1" replayOnLoad startDelay={0.55} className="font-serif text-display leading-[0.9] tracking-[-0.03em] text-primary whitespace-nowrap">
                  CREATIVE
                </TextReveal>
              </div>
              <div className="relative block">
                <TextReveal as="h1" replayOnLoad startDelay={0.55} className="font-serif text-display leading-[0.9] tracking-[-0.03em] text-primary whitespace-nowrap">
                  ENGINEER
                </TextReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutHeroSection;
