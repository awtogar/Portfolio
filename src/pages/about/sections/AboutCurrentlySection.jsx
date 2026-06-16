import { BaseSection, TextReveal } from '@/components';

const rows = [
  { label: 'EXPLORING', value: 'learning modern tech stack that help me to improve my skills to fill the needs of the industry.' },
  { label: 'INITIATING', value: 'Exploring design to enhance creativity through ' },
  { label: 'BUILDING', value: 'Typography references, Swiss design archives, and anything about how things get made.' },
  { label: '', value: 'Jakarta, Indonesia' },
];

const AboutCurrentlySection = () => {
  return (
    <BaseSection containerID="currently" sectionClassName="section-padding-xy" containerClassName="m-auto w-full max-w-[1920px]">
      {/* Section heading — matches homepage pattern */}
      <div className="flex flex-col mb-s200">
        <div className="flex items-center justify-between">
          <TextReveal preset="fadeUp" as="span" startDelay={0.25}>
            <span className="font-mono text-base-sm tracking-[0.12em] uppercase text-primary-muted">(currently)</span>
          </TextReveal>
        </div>
        <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            Active
          </TextReveal>
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal as="h2" className="text-h100 heading-display font-bold italic font-serif">
              AT
            </TextReveal>
          </div>
        </div>
      </div>

      <ul className="flex flex-col">
        {rows.map((row, i) => (
          <li
            key={i}
            className="flex flex-col md:grid md:grid-cols-12 md:gap-s400 py-s500 not-last:border-b not-last:border-neutral-200 border-t border-neutral-200 first:border-t"
          >
            <div className="md:col-span-4 flex items-start gap-s300 md:flex-col md:gap-s200 mb-s300 md:mb-0">
              <TextReveal preset="fadeUp" delay={0.05 * i} as="span">
                <span className="font-mono text-base-xs text-primary-muted tracking-widest">({String(i + 1).padStart(2, '0')})</span>
              </TextReveal>
              <TextReveal as="span" className="font-serif text-h300 heading-display text-primary">
                {row.label}
              </TextReveal>
            </div>
            <div className="md:col-span-8">
              <TextReveal as="p" className="text-base body-display text-primary-muted">
                {row.value}
              </TextReveal>
            </div>
          </li>
        ))}
      </ul>

      {/* Timestamp */}
      <div className="border-t border-neutral-200 mt-s200 pt-s400 flex justify-end">
        <TextReveal preset="fadeUp" delay={0.3} as="span">
          <span className="font-mono text-base-xs text-primary-muted tracking-widest uppercase">Updated Jun 2025</span>
        </TextReveal>
      </div>
    </BaseSection>
  );
};

export default AboutCurrentlySection;
