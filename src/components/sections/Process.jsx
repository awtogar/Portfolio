import { BaseSection, HeadLineLabel, TextReveal } from '@/components';
import { discoverReels, defineReels, designReels, buildReels } from '@/assets';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Start with the right questions. Understand the goals, audience, and constraints before jumping into solutions.',
    video: discoverReels,
  },
  {
    number: '02',
    title: 'Define',
    description: "Clarity before creativity. I turn what I've learned into structure, direction, and clear design intent.",
    video: defineReels,
  },
  {
    number: '03',
    title: 'Design',
    description: 'Visual decisions made with purpose. I move into high fidelity early — I think better when things feel real.',
    video: designReels,
  },
  {
    number: '04',
    title: 'Build',
    description: 'I write the code myself, turning the design into a working experience while keeping the original intent intact.',
    video: buildReels,
  },
];

const StepItem = ({ step }) => {
  return (
    <li className={`flex flex-col md:grid md:grid-cols-12 group`}>
      <div className="grid grid-cols-8 items-start gap-s100 pt-s200 md:col-span-7 md:pt-s500 md:pr-s200">
        <span className="col-span-2 pt-2 text-base-sm leading-none text-primary-muted md:pt-s100">Step • {step.number}</span>
        <div className="flex flex-col col-span-6 gap-s200">
          <h3 className="heading-display text-h400 font-bold leading-tight">{step.title}</h3>
          <p className="max-w-[40ch] text-base-sm leading-body text-primary-muted">{step.description}</p>
        </div>
      </div>

      {/* Video:
          mobile  → pl-[25%] biar mulai dari posisi col-3 (sejajar title)
          desktop → w-[50%] sibling kanan, h-full mengisi tinggi row */}

      <span aria-label={`See step ${step.number} in action`} className="block overflow-hidden pt-4 pb-s200 pl-[25%] md:col-span-5 md:pt-0 md:pb-0 md:pl-0 group/video">
        <div className="overflow-hidden relative w-full aspect-video bg-primary/5 md:h-full md:aspect-6/3">
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
    <BaseSection containerClassName="w-full max-w-[1920px] m-auto">
      <HeadLineLabel label="(PROCESS)" headline="STEPS" />
      <ul className="flex flex-col gap-s300">
        {steps.map((step, i) => (
          <StepItem key={step.number} step={step} />
        ))}
      </ul>
    </BaseSection>
  );
};

export default Process;
