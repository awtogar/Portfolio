'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { BaseSection, HeadLineLabel } from '@/components';
import { testimonials } from '@/data/testimonials';

const TestimonialCard = ({ item, i, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.4]);

  return (
    <div className="flex items-center justify-center px-6">
      <motion.div style={{ top: `calc(-5vh + ${i * 25}px)`, scale }} className="relative flex flex-col w-full origin-top">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/30 shrink-0">
            <path
              d="M8.4 0C3.976 0 0 3.6 0 9.2C0 14.4 3.4 19 8.2 20L9.6 17.2C6.6 16.2 4.6 13.6 4.6 10.6C4.6 10.2 4.6 9.8 4.8 9.4C5.4 9.8 6.2 10 7 10C9.4 10 11.2 8 11.2 5.6C11.2 3.2 9.2 0 8.4 0ZM22.6 0C18.176 0 14.2 3.6 14.2 9.2C14.2 14.4 17.6 19 22.4 20L23.8 17.2C20.8 16.2 18.8 13.6 18.8 10.6C18.8 10.2 18.8 9.8 19 9.4C19.6 9.8 20.4 10 21.2 10C23.6 10 25.4 8 25.4 5.6C25.4 3.2 23.4 0 22.6 0Z"
              fill="currentColor"
            />
          </svg>
          <span className="flex-1 h-px bg-primary/15" />
          <span className="text-[13px] tabular-nums text-secondary shrink-0">{item.index}</span>
        </div>
        {/* author row — restructured with a vertical divider and right-aligned link */}
        <div className="flex items-center mt-10 md:mt-14 pt-6 border-t border-primary/10">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden shrink-0 ring-1 ring-primary/10">
              <img src={item.avatar} alt={item.author} className="w-full h-full object-cover grayscale" />
            </div>

            <span className="w-px h-8 bg-primary/10 shrink-0" />

            <div className="min-w-0">
              <h3 className="text-[14px] md:text-[15px] font-[500] text-primary truncate">{item.author}</h3>
              <p className="text-[12px] text-secondary mt-0.5 truncate">{item.role}</p>
            </div>
          </div>

          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-[12px] text-secondary hover:text-primary transition-colors shrink-0 group"
            >
              See more
              <svg width="14" height="8" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5">
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}
        </div>
        {/* quote with drop-cap first letter instead of a floating giant quote mark */}
        <blockquote className="font-serif text-[22px] md:text-[32px] leading-[1.4] tracking-[-0.01em] text-primary max-w-[62ch]">
          <span className="float-left font-serif text-[52px] md:text-[72px] leading-[0.8] pr-2 pt-1 text-primary">{item.quote.charAt(0)}</span>
          {item.quote.slice(1)}
        </blockquote>
      </motion.div>
    </div>
  );
};

const TestimonialSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <BaseSection sectionID="testimonials" containerClassName="m-auto w-full max-w-[1920px]">
      <HeadLineLabel label="Not my words, but" headline="They say it" />

      <div className="w-full" ref={containerRef}>
        {testimonials.map((item, i) => {
          const targetScale = 1 - (testimonials.length - i) * 0.05;
          return <TestimonialCard key={i} i={i} item={item} progress={scrollYProgress} range={[i * (1 / testimonials.length), 1]} targetScale={targetScale} />;
        })}
      </div>
    </BaseSection>
  );
};

export default TestimonialSection;
