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
      className={`break-inside-avoid p-6 mb-4 rounded-[20px] transition-all duration-300 ${isHighlighted ? 'bg-neutral-200 border border-neutral-50' : 'bg-neutral-100 border border-neutral-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)]'
        }`}
    >
      <div className="flex items-center gap-3">
        <div className="overflow-hidden shrink-0 w-10 h-10 bg-neutral-200 rounded-full">
          <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-[14px] font-bold leading-tight truncate text-primary">{item.author}</p>
          <p className="text-[13px] truncate text-primary-muted/90">{item.handle}</p>
        </div>
      </div>

      <p className="mt-4 font-sans text-[14px] leading-snug text-primary-muted md:text-[15px]">{renderFormattedText(item.quote)}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <BaseSection sectionID="testimonials" containerClassName="w-full max-w-[1400px] m-auto">
      <HeadLineLabel label="Not my words, but" headline="They say it" />

      <div className="overflow-hidden relative max-h-[750px] mt-10 md:mt-14">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={item.index || idx} item={item} index={idx} />
          ))}
        </div>

        {/* Bottom fade out gradient matching reference screenshot */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neutral-100 via-neutral-100/90 to-transparent pointer-events-none" />
      </div>
    </BaseSection>
  );
};

export default Testimonial;
