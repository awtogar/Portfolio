import { BaseSection, HeadLineLabel, TextReveal } from '@/components';
import { heroReels } from '@/assets';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Start with the right questions. Goals, audience, constraints and understanding the problem before jumping to solutions.',
    video: heroReels,
  },
  {
    number: '02',
    title: 'Define',
    description: "Clarity before creativity. I translate what I've learned into a direction — structure, flow, and design intent that keeps decisions grounded.",
    video: heroReels,

  },
  {
    number: '03',
    title: 'Design',
    description: 'Visual decisions made with purpose. I move into high fidelity early because I think better when things look real.',
    video: heroReels,

  },
  {
    number: '04',
    title: 'Build',
    description: 'I write the code myself. Design and development in one person means fewer gaps, faster iteration, and output that matches the intent.',
    video: heroReels,
  },
];

const StepItem = ({ step }) => {
  return (
    <li className={`group flex flex-col md:grid md:grid-cols-12`}>
      <div className="grid grid-cols-8 items-start gap-s100 pt-s200 md:pt-s500 md:col-span-7 md:pr-s200">
        <span className="col-span-2 pt-2 text-base-sm text-primary-muted leading-none md:pt-s100">Step • {step.number}</span>
        <div className="col-span-6 flex flex-col gap-s200">
          <h3 className="text-h400 heading-display font-bold leading-tight">{step.title}</h3>
          <p className="text-base-sm text-primary-muted max-w-[40ch] leading-body">{step.description}</p>
        </div>
      </div>

      {/* Video:
          mobile  → pl-[25%] biar mulai dari posisi col-3 (sejajar title)
          desktop → w-[50%] sibling kanan, h-full mengisi tinggi row */}

      <span
        aria-label={`See step ${step.number} in action`}
        className="group/video pt-4 md:pt-0 block overflow-hidden pl-[25%] pb-s200 md:pl-0 md:pb-0 md:col-span-5"
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
      </span>
    </li>
  );
};

const Process = () => {
  return (
    <BaseSection containerClassName="m-auto w-full max-w-[1920px]">
      <HeadLineLabel label="My Approach" headline="WORK FLOW" />
      <ul className="flex flex-col gap-s300">
        {steps.map((step, i) => (
          <StepItem key={step.number} step={step} />
        ))}
      </ul>
    </BaseSection>
  );
};

export default Process;
