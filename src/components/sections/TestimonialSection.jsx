import { BaseSection, HeadLineLabel } from '@/components';
import { testimonials } from '@/data/testimonials';

const TestimonialCard = ({ item }) => (
  <div className="flex-shrink-0 w-[340px] md:w-[420px] mx-3 rounded-2xl border border-primary/10 bg-surface-raised p-6 flex flex-col gap-4 shadow-xs">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-primary/10 shrink-0">
        <img src={item.avatar} alt={item.author} className="w-full h-full object-cover grayscale" />
      </div>
      <div className="min-w-0">
        <p className="text-[13px] font-[500] text-primary truncate">{item.author}</p>
        <p className="text-[12px] text-primary/50 truncate">{item.role}</p>
      </div>
    </div>

    <blockquote className="font-sans text-[14px] md:text-[15px] leading-[1.65] text-primary">"{item.quote}"</blockquote>
  </div>
);

const MarqueeRow = ({ items, reverse = false, speed = 35 }) => {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden w-full mask-fade-x">
      <div
        className="flex"
        style={{
          animation: `scroll-x ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const row1 = testimonials;
  const row2 = [...testimonials].reverse();

  return (
    <BaseSection sectionID="testimonials" containerClassName="m-auto w-full max-w-[1920px]">
      <HeadLineLabel label="Not my words, but" headline="They say it" />

      <div className="mt-10 md:mt-14 flex flex-col gap-4 overflow-hidden">
        <MarqueeRow items={row1} speed={40} />
        <MarqueeRow items={row2} reverse speed={50} />
      </div>
    </BaseSection>
  );
};

export default TestimonialSection;
