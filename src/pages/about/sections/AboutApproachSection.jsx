import { BaseSection, TextReveal } from '@/components';

const AboutApproachSection = () => {
  return (
    <BaseSection containerID="approach" sectionClassName="section-padding-xy" containerClassName="m-auto w-full max-w-[1920px]">
      {/* Section heading — matches homepage pattern */}
      <div className="flex flex-col mb-s200">
        <div className="flex items-center justify-between">
          <TextReveal preset="fadeUp" as="span" startDelay={0.25}>
            <span className="font-mono text-base-sm tracking-[0.12em] uppercase text-primary-muted">(approach)</span>
          </TextReveal>
        </div>
        <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            HOW I
          </TextReveal>
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal as="h2" className="text-h100 heading-display font-bold">
              Think
            </TextReveal>
          </div>
        </div>
      </div>

      {/* Pull-quote */}
      <div className="mb-s800 max-w-[880px]">
        <TextReveal as="p" className="font-serif text-h200 leading-[1.08] tracking-[-0.025em] text-primary">
          Most projects fail where the designer hands off to the developer. I close that gap.
        </TextReveal>
      </div>

      {/* Two-column prose */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-s600 md:gap-s800 border-t border-neutral-200 pt-s600">
        <div className="flex flex-col gap-s400">
          <TextReveal as="p" className="text-base body-display text-primary">
            I grew up on the internet — learning design by looking at things that felt right, and code by breaking things until they worked. A lot of people pick a side somewhere
            along the way. I never saw a reason to.
          </TextReveal>
          <TextReveal as="p" className="text-base body-display text-primary-muted">
            The design informs the build. The build changes the design. That back and forth is where the good stuff happens — and it only works when the same person holds both
            ends.
          </TextReveal>
        </div>

        <div className="flex flex-col gap-s400">
          <TextReveal as="p" className="text-base body-display text-primary-muted">
            I don't separate intent from execution. What something looks like and how it works are the same problem. I work on both at the same time, which means the output ships
            coherent — not approximated.
          </TextReveal>
          <TextReveal as="p" className="text-base body-display text-primary-muted">
            Now I use both to help brands exist digitally in a way that feels considered. Not assembled. Designed.
          </TextReveal>
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutApproachSection;
