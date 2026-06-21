import { BaseSection, TextReveal } from '@/components';
import { siteReels } from '@/assets';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Start with the right questions. Goals, audience, constraints and understanding the problem before jumping to solutions.',
    video: siteReels,
    link: '#',
  },
  {
    number: '02',
    title: 'Define',
    description: "Clarity before creativity. I translate what I've learned into a direction — structure, flow, and design intent that keeps decisions grounded.",
    video: siteReels,
    link: '#',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Visual decisions made with purpose. I move into high fidelity early because I think better when things look real.',
    video: siteReels,
    link: '#',
  },
  {
    number: '04',
    title: 'Build',
    description: 'I write the code myself. Design and development in one person means fewer gaps, faster iteration, and output that matches the intent.',
    video: siteReels,
    link: '#',
  },
];

const StepItem = ({ step, isLast }) => {
  return (
    <li className={`group flex flex-col md:flex-row md:items-stretch gap-s500 ${!isLast ? 'border-b border-primary/10' : ''}`}>
      {/* Left: step + text — grid 8col untuk alignment mobile & desktop */}
      <div className="grid grid-cols-8 items-start gap-s100 pt-s200 md:flex-1 md:pt-s500">
        <span className="col-span-2 u-text-mono text-base-sm text-primary-muted leading-none">Step • {step.number}</span>
        <div className="col-span-6 flex flex-col gap-s200">
          <h3 className="text-h400 heading-display font-bold leading-tight">{step.title}</h3>
          <p className="text-base-sm text-primary-muted max-w-[40ch] leading-body">{step.description}</p>
        </div>
      </div>

      {/* Video:
          mobile  → pl-[25%] biar mulai dari posisi col-3 (sejajar title)
          desktop → w-[50%] sibling kanan, h-full mengisi tinggi row */}

      <a
        href={step.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`See step ${step.number} in action`}
        className="group/video block overflow-hidden pl-[25%] pb-s200 md:pl-0 md:pb-0 md:w-[50%] md:shrink-0"
      >
        <div className="relative aspect-video md:aspect-6/3 md:h-full w-full overflow-hidden bg-primary/5">
          <video
            src={step.video}
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover/video:scale-[1.03]"
            onMouseEnter={e => e.currentTarget.play()}
            onMouseLeave={e => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
        </div>
      </a>
    </li>
  );
};

const ProcessSection = () => {
  return (
    <BaseSection containerID="process" containerClassName="m-auto w-full max-w-[1920px]">
      <div className="flex flex-col mb-s200">
        <TextReveal as="span">
          <span className="text-base-sm leading-heading tracking-body font-[450] uppercase text-primary-muted">how i work?</span>
        </TextReveal>
        <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            The
          </TextReveal>
          <TextReveal as="h2" className="text-h100 heading-display font-bold">
            Process
          </TextReveal>
        </div>
      </div>

      <ul className="flex flex-col gap-s300">
        {steps.map((step, i) => (
          <StepItem key={step.number} step={step} isLast={i === steps.length - 1} />
        ))}
      </ul>
    </BaseSection>
  );
};

export default ProcessSection;
