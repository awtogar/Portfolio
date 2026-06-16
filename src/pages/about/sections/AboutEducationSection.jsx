import { BaseSection, TextReveal } from '@/components';

const AboutEducationSection = () => {
  return (
    <BaseSection
      containerID="education"
      sectionClassName="section-padding-xy"
      containerClassName="m-auto w-full max-w-[1920px]"
    >
      {/* Section heading — matches homepage pattern */}
      <div className="flex flex-col mb-s200">
        <div className="flex items-center justify-between">
          <TextReveal preset="fadeUp" as="span" startDelay={0.25}>
            <span className="font-mono text-base-sm tracking-[0.12em] uppercase text-primary-muted">(education)</span>
          </TextReveal>
        </div>
        <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            WHERE I
          </TextReveal>
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal as="h2" className="text-h100 heading-display font-bold">
              Studied
            </TextReveal>
          </div>
        </div>
      </div>

      {/* Entry */}
      <div className="border-t border-neutral-200">
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-s400 py-s600">
          {/* Left — institution + years */}
          <div className="md:col-span-5 mb-s500 md:mb-0">
            <div className="overflow-hidden mb-s300">
              <TextReveal
                as="h3"
                className="font-serif text-h200 heading-display text-primary leading-[1.0] tracking-[-0.025em]"
              >
                Universitas Nusa Mandiri
              </TextReveal>
            </div>
            <TextReveal preset="fadeUp" delay={0.2} as="span">
              <span className="font-mono text-base-xs tracking-[0.1em] text-primary-muted">
                2021 — 2025
              </span>
            </TextReveal>
          </div>

          {/* Right — degree, location, focus */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-s400 md:gap-s600">
            <div className="flex flex-col gap-s200">
              <TextReveal preset="fadeUp" delay={0.1} as="span">
                <span className="font-mono text-base-xs text-primary-muted uppercase tracking-[0.1em]">Degree</span>
              </TextReveal>
              <TextReveal preset="fadeUp" delay={0.18} as="span">
                <span className="font-sans text-base body-display text-primary">S1 — Informatics Engineering</span>
              </TextReveal>
            </div>

            <div className="flex flex-col gap-s200">
              <TextReveal preset="fadeUp" delay={0.14} as="span">
                <span className="font-mono text-base-xs text-primary-muted uppercase tracking-[0.1em]">Location</span>
              </TextReveal>
              <TextReveal preset="fadeUp" delay={0.22} as="span">
                <span className="font-sans text-base body-display text-primary">Jakarta, Indonesia</span>
              </TextReveal>
            </div>

            <div className="flex flex-col gap-s200">
              <TextReveal preset="fadeUp" delay={0.18} as="span">
                <span className="font-mono text-base-xs text-primary-muted uppercase tracking-[0.1em]">Focus</span>
              </TextReveal>
              <TextReveal as="p" className="font-sans text-base body-display text-primary-muted">
                Software development, system analysis, and applied design thinking in digital product contexts.
              </TextReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-neutral-200" />
    </BaseSection>
  );
};

export default AboutEducationSection;
