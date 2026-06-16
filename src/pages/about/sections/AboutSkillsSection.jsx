import { BaseSection, TextReveal } from '@/components';

const disciplines = [
  {
    number: '01',
    name: 'Design',
    skills: ['Brand Identity', 'Visual Communication', 'Typography & Layout', 'Art Direction', 'Print & Digital'],
  },
  {
    number: '02',
    name: 'Interface',
    skills: ['UI / UX Design', 'Interaction Design', 'Prototyping (Figma)', 'Responsive Web', 'Design Systems'],
  },
  {
    number: '03',
    name: 'Development',
    skills: ['Frontend Dev', 'React / Vite', 'GSAP Animation', 'Tailwind CSS', 'Performance & A11y'],
  },
];

const toolkit = ['Figma', 'React', 'GSAP', 'Tailwind CSS', 'Adobe Suite', 'Vite', 'Framer Motion'];

const AboutSkillsSection = () => {
  return (
    <BaseSection
      containerID="capabilities"
      sectionClassName="section-padding-xy"
      containerClassName="m-auto w-full max-w-[1920px]"
    >
      {/* Section heading — matches homepage pattern */}
      <div className="flex flex-col mb-s200">
        <div className="flex items-center justify-between">
          <TextReveal preset="fadeUp" as="span" startDelay={0.25}>
            <span className="font-mono text-base-sm tracking-[0.12em] uppercase text-primary-muted">(capabilities)</span>
          </TextReveal>
        </div>
        <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            WHAT I
          </TextReveal>
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal as="h2" className="text-h100 heading-display font-bold">
              Know
            </TextReveal>
          </div>
        </div>
      </div>

      {/* Disciplines list — same row pattern as ProcessSection */}
      <ul className="flex flex-col">
        {disciplines.map((d, di) => (
          <li
            key={di}
            className="flex flex-col md:grid md:grid-cols-12 md:gap-s400 py-s500 not-last:border-b not-last:border-neutral-200"
          >
            {/* Number + name */}
            <div className="md:col-span-4 flex items-start gap-s300 md:flex-col md:gap-s200 mb-s300 md:mb-0">
              <TextReveal preset="fadeUp" delay={0.05 * di} as="span">
                <span className="font-mono text-base-xs text-primary-muted tracking-widest">({d.number})</span>
              </TextReveal>
              <div className="relative overflow-clip">
                <TextReveal as="h3" className="font-serif leading-[1.2] tracking-[-0.02em] text-h300 text-primary">
                  {d.name}
                </TextReveal>
              </div>
            </div>

            {/* Skills */}
            <div className="md:col-span-8 flex flex-wrap gap-x-s500 gap-y-s200 content-start">
              {d.skills.map((skill, si) => (
                <TextReveal key={si} preset="fadeUp" delay={0.08 + di * 0.05 + si * 0.04} as="span">
                  <span className="font-sans text-base body-display text-primary">{skill}</span>
                </TextReveal>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Toolkit — flat mono line */}
      <div className="border-t border-neutral-200 pt-s400 mt-s200">
        <TextReveal as="p" className="font-mono text-base-xs tracking-[0.06em] text-primary-muted">
          {toolkit.join(' · ')}
        </TextReveal>
      </div>
    </BaseSection>
  );
};

export default AboutSkillsSection;
