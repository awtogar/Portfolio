import { BaseSection, TextReveal } from '@/components';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Start with the right questions. Goals, audience, constraints and understanding the problem before jumping to solutions.',
    keywords: ['Research', 'Brief', 'Stakeholder alignment'],
  },
  {
    number: '02',
    title: 'Define',
    description: "Clarity before creativity. I translate what I've learned into a direction — structure, flow, and design intent that keeps decisions grounded.",
    keywords: ['Information architecture', 'Wireframes', 'Design systems'],
  },
  {
    number: '03',
    title: 'Design',
    description: 'Visual decisions made with purpose. I move into high fidelity early because I think better when things look real.',
    keywords: ['Visual identity', 'High-fidelity', 'Prototyping'],
  },
  {
    number: '04',
    title: 'Build',
    description: 'I write the code myself. Design and development in one person means fewer gaps, faster iteration, and output that matches the intent.',
    keywords: ['React', 'Tailwind', 'Animation engineering'],
  },
];

const ProcessSection = () => {
  return (
    <BaseSection containerID="process" containerClassName="m-auto w-full max-w-[1920px]">
      {/* CONTENT HEADING */}
      {/* <div className="flex flex-col md:grid md:grid-cols-12 mb-s700 border-b border-neutral-200 dark:border-neutral-200 pb-s100 md:pb-s500">
        <div className="md:col-span-4">
          <TextReveal preset="fadeUp">
            <span className="font-mono text-h500 tracking-[0.12em] uppercase text-primary-muted">How I work</span>
          </TextReveal>
        </div>
        <div className="md:col-span-6 md:mt-0">
          <TextReveal className="text-h400 body-display text-primary">
            <span>Every project follows the same discipline. Understand first. Design second. Build third. No skipping steps.</span>
          </TextReveal>
        </div>
      </div> */}
      <div className="flex flex-col mb-s200">
        <div className="flex items-center justify-between">
          <TextReveal preset="fadeUp" as="span" startDelay={0.25}>
            <span className="font-mono text-base-sm tracking-[0.12em] uppercase text-primary-muted">HOW I WORK</span>
          </TextReveal>
        </div>
        <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            MY
          </TextReveal>
          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <TextReveal as="h2" className="text-h100 heading-display font-bold">
              Process
            </TextReveal>
          </div>
        </div>
      </div>
      {/* END OF CONTENT HEADING */}
      <ul className="flex flex-col">
        {steps.map((step, i) => (
          <li key={i} className="flex flex-col md:grid md:grid-cols-12 md:gap-s400 py-s500 not-last:border-b not-last:border-neutral-200 dark:not-last:border-neutral-200 group">
            <div className="md:col-span-4 flex items-start gap-s300 md:flex-col md:gap-s200 mb-s300 md:mb-0">
              <TextReveal preset="fadeUp" delay={0.05 * i} as="span">
                <span className="font-mono text-base-xs text-primary-muted tracking-widest">({step.number})</span>
              </TextReveal>
              <div className="relative overflow-clip">
                <TextReveal as="h3" className="font-serif leading-[1.2] tracking-[-0.02em] text-h300 text-primary">
                  {step.title}
                </TextReveal>
              </div>
            </div>
            <div className="col-span-7 md:col-span-5">
              <TextReveal as="p" className="text-base body-display text-primary-muted">
                {step.description}
              </TextReveal>
            </div>
            <div className="hidden md:col-span-3 mt-s300 md:mt-0 md:flex flex-col justify-start items-start md:items-end gap-s100">
              {step.keywords.map((kw, ki) => (
                <TextReveal key={ki} preset="fadeUp" delay={0.15 + ki * 0.08} as="span">
                  <span className="font-mono text-base-xs text-primary-muted border border-neutral-200 dark:border-neutral-200 rounded-full px-s300 py-s100 whitespace-nowrap">
                    {kw}
                  </span>
                </TextReveal>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </BaseSection>
  );
};

export default ProcessSection;
