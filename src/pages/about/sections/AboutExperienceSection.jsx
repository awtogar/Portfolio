import { BaseSection, TextReveal } from '@/components';
import { experience } from '@/data/content';

const ExperienceEntry = ({ exp, index }) => {
  const num = String(index + 1).padStart(2, '0');

  return (
    <li className="flex flex-col md:grid md:grid-cols-12 md:gap-s400 py-s500 not-last:border-b not-last:border-neutral-200">
      {/* Number + dates */}
      <div className="md:col-span-4 flex items-start gap-s300 md:flex-col md:gap-s200 mb-s300 md:mb-0">
        <TextReveal preset="fadeUp" delay={0.05 * index} as="span">
          <span className="font-mono text-base-xs text-primary-muted tracking-widest">({num})</span>
        </TextReveal>
        <div className="flex flex-col gap-s100">
          <div className="relative overflow-clip">
            <TextReveal as="h3" className="font-serif leading-[1.2] tracking-[-0.02em] text-h300 text-primary">
              {exp.company}
            </TextReveal>
          </div>
          <TextReveal preset="fadeUp" delay={0.1} as="span">
            <span className="font-mono text-base-xs text-primary-muted uppercase tracking-[0.1em]">
              {exp.position}
            </span>
          </TextReveal>
          <TextReveal preset="fadeUp" delay={0.12} as="span">
            <span className="font-mono text-base-xs text-primary-muted tabular-nums">
              {exp.startDate} — {exp.endDate}
            </span>
          </TextReveal>
        </div>
      </div>

      {/* Description */}
      <div className="md:col-span-4 mb-s500 md:mb-0">
        <TextReveal as="p" className="text-base body-display text-primary-muted">
          {exp.description[0]}
        </TextReveal>
      </div>

      {/* Achievements */}
      <div className="md:col-span-4 flex flex-col gap-s300">
        {exp.achievements.map((item, i) => (
          <div key={i} className="flex gap-s300 items-start not-last:pb-s300 not-last:border-b not-last:border-neutral-200">
            <TextReveal preset="fadeUp" delay={0.08 + i * 0.06} as="span">
              <span className="font-mono text-base-xs text-primary-muted pt-[0.3em] shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
            </TextReveal>
            <TextReveal as="p" className="text-base body-display text-primary">
              {item}
            </TextReveal>
          </div>
        ))}

        {/* Tools */}
        <div className="pt-s300 mt-s100 border-t border-neutral-200">
          <TextReveal preset="fadeUp" delay={0.2} as="p">
            <span className="font-mono text-base-xs text-primary-muted tracking-[0.08em]">
              {exp.tools.join(' · ')}
            </span>
          </TextReveal>
        </div>
      </div>
    </li>
  );
};

const AboutExperienceSection = () => {
  return (
    <BaseSection
      containerID="experience"
      sectionClassName="section-padding-xy"
      containerClassName="m-auto w-full max-w-[1920px]"
    >
      {/* Section heading — matches homepage pattern */}
      <div className="flex flex-col mb-s200">
        <div className="flex items-center justify-between">
          <TextReveal preset="fadeUp" as="span" startDelay={0.25}>
            <span className="font-mono text-base-sm tracking-[0.12em] uppercase text-primary-muted">(work history)</span>
          </TextReveal>
          <TextReveal preset="fadeUp" delay={0.08} as="span">
            <span className="font-mono text-base-xs text-primary-muted tabular-nums">2022 — Present</span>
          </TextReveal>
        </div>
        <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            EXPERIENCE
          </TextReveal>
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal as="h2" className="text-h100 heading-display font-bold">
              {String(experience.length).padStart(2, '0')}
            </TextReveal>
          </div>
        </div>
      </div>

      {/* Entries */}
      <ul className="flex flex-col">
        {experience.map((exp, i) => (
          <ExperienceEntry key={exp.id} exp={exp} index={i} />
        ))}
      </ul>

      <div className="border-t border-neutral-200" />
    </BaseSection>
  );
};

export default AboutExperienceSection;
