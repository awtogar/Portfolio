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

const StepItem = ({ step, index }) => (
  <li className="flex flex-col py-s400 sm:py-s500 not-last:border-b not-last:border-neutral-200 dark:not-last:border-neutral-200 group md:grid md:grid-cols-12 md:gap-s400">
    <div className="md:hidden flex flex-col gap-s300">
      <div className="flex items-center gap-s200">
        <TextReveal as="span" className="font-mono text-base-xs text-primary-muted tracking-widest shrink-0">
          ({step.number})
        </TextReveal>
        <TextReveal as="h3" className="font-serif leading-[1.2] tracking-[-0.02em] text-h400 sm:text-h300 text-primary">
          {step.title}
        </TextReveal>
      </div>

      <TextReveal as="p" className="text-base-sm sm:text-base body-display text-primary-muted">
        {step.description}
      </TextReveal>

      <div className="flex flex-wrap gap-s200">
        {step.keywords.map(kw => (
          <TextReveal
            key={kw}
            as="span"
            className="font-mono text-base-xs text-primary-muted border border-neutral-200 dark:border-neutral-200 rounded-full px-s200 py-s75 whitespace-nowrap"
          >
            {kw}
          </TextReveal>
        ))}
      </div>
    </div>

    <div className="hidden md:contents">
      <div className="md:col-span-4 flex items-start gap-s300 md:gap-s200">
        <TextReveal as="span" className="font-mono text-base-xs text-primary-muted tracking-widest pt-4">
          ({step.number})
        </TextReveal>
        <TextReveal as="h3" className="font-serif leading-[1.2] tracking-[-0.02em] text-h300 text-primary">
          {step.title}
        </TextReveal>
      </div>

      <TextReveal as="p" className="md:col-span-5 text-base body-display text-primary-muted">
        {step.description}
      </TextReveal>

      <div className="md:col-span-3 md:flex flex-col justify-start items-start md:items-end gap-s100">
        {step.keywords.map(kw => (
          <TextReveal
            key={kw}
            as="span"
            className="font-mono text-base-xs text-primary-muted border border-neutral-200 dark:border-neutral-200 rounded-full px-s300 py-s100 whitespace-nowrap"
          >
            {kw}
          </TextReveal>
        ))}
      </div>
    </div>
  </li>
);

const ProcessSection = () => {
  return (
    <BaseSection containerID="process" containerClassName="m-auto w-full max-w-[1920px]">
      {/* Header */}
      <div className="flex flex-col mb-s200">
        <TextReveal as="span">
          <span className="text-base-sm leading-heading tracking-body font-[450] uppercase text-primary-muted">how i work?</span>
        </TextReveal>
        <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            MY
          </TextReveal>
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            Process
          </TextReveal>
        </div>
      </div>

      {/* Steps list */}
      <ul className="flex flex-col">
        {steps.map((step, i) => (
          <StepItem key={step.number} step={step} index={i} />
        ))}
      </ul>
    </BaseSection>
  );
};

export default ProcessSection;
