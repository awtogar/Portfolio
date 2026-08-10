import { BaseSection, HeadLineLabel } from '@/components';
import { testimonials } from '@/data/testimonials';

const renderFormattedText = text => {
  if (!text) return null;
  const parts = text.split(/(@\w+|#\w+|\bTogar\b|\bAwaluddin\b)/gi);
  return parts.map((part, index) => {
    if (part.startsWith('@') || part.startsWith('#') || part.toLowerCase() === 'togar' || part.toLowerCase() === 'awaluddin') {
      return (
        <span key={index} className="font-semibold text-neutral-900 dark:text-white">
          {part}
        </span>
      );
    }
    return part;
  });
};

const TestimonialCard = ({ item, index }) => {
  // Card 6 (index 5) or item.highlighted gets the soft gray card styling from the reference screenshot
  const isHighlighted = item.highlighted || index === 5;

  return (
    <div
      className={`break-inside-avoid mb-4 rounded-[20px] p-6 transition-all duration-300 ${isHighlighted ? 'bg-neutral-200 border border-neutral-50' : 'bg-neutral-100 border border-neutral-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)]'
        }`}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-200">
          <img src={item.avatar} alt={item.author} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-[14px] font-bold text-primary leading-tight truncate">{item.author}</p>
          <p className="text-[13px] text-primary-muted/90 truncate">{item.handle}</p>
        </div>
      </div>

      <p className="mt-4 font-sans text-[14px] md:text-[15px] leading-snug text-primary-muted">{renderFormattedText(item.quote)}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <BaseSection sectionID="testimonials" containerClassName="m-auto w-full max-w-[1400px]">
      <HeadLineLabel label="Not my words, but" headline="They say it" />

      <div className="relative mt-10 md:mt-14 max-h-[750px] overflow-hidden">
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={item.index || idx} item={item} index={idx} />
          ))}
        </div>

        {/* Bottom fade out gradient matching reference screenshot */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neutral-100 via-neutral-100/90 to-transparent" />
      </div>
    </BaseSection>
  );
};

export default Testimonial;
