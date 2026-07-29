import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BaseSection } from '..';
import { contact_info, socials } from '@/data/navigation';

const cardClass =
  'flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-xs rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-sm transition-all duration-500';

function BentoSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="bg-neutral-100 px-2 lg:px-4 pt-8 lg:pt-16 pb-8 lg:pb-4 grid grid-cols-12 gap-2 lg:gap-4 relative">
      <motion.h2 style={{ y }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[clamp(100px,14vw,250px)] tracking-tight">
        AWTOGAR
      </motion.h2>

      <a href="/project" className={`col-span-12 lg:col-span-8 h-[200px] lg:h-[350px] ${cardClass}`}>
        Project
      </a>

      <a href="/blog" className={`col-span-12 lg:col-span-4 h-[200px] lg:h-[350px] ${cardClass}`}>
        Blog
      </a>

      <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4">
        <a href={`mailto:${contact_info.email}`} className={`lg:col-span-12 h-[120px] lg:h-full ${cardClass}`}>
          Contact
        </a>
        <a href={socials.find(s => s.label === 'github')?.href} target="_blank" rel="noopener noreferrer" className={`lg:col-span-12 h-[120px] lg:h-full ${cardClass}`}>
          Github
        </a>
      </div>

      <a
        href={socials.find(s => s.label === 'instagram')?.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`col-span-6 lg:col-span-4 h-[120px] lg:h-[350px] ${cardClass}`}
      >
        Instagram
      </a>

      <a
        href={socials.find(s => s.label === 'linkedin')?.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`col-span-6 lg:col-span-4 h-[120px] lg:h-[350px] ${cardClass}`}
      >
        LinkedIn
      </a>
    </section>
  );
}

function CTASection() {
  return (
    <section className="sticky top-0 h-auto md:h-screen bg-neutral-100 text-primary section-padding-x flex items-center">
      {/* Mobile */}
      <div className="flex flex-col md:hidden py-12 gap-12 w-full">
        <div>
          <h2 className="text-[clamp(2.25rem,9vw,4rem)] leading-[1.05] font-medium">This is not finished.</h2>
          <p className="mt-1 text-[clamp(2.25rem,9vw,4rem)] leading-[1.05] italic font-serif">What will we create next?</p>
        </div>
        <div className="space-y-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-2 opacity-60">Mail</p>
            <a href={`mailto:${contact_info.email}`} className="inline-block text-[clamp(1.25rem,5.5vw,1.75rem)] leading-snug border-b border-secondary/60 pb-0.5 break-all">
              {contact_info.email}
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-2 opacity-60">Call</p>
            <a href={`tel:${contact_info.phone}`} className="inline-block text-[clamp(1.25rem,5.5vw,1.75rem)] leading-snug border-b border-secondary/60 pb-0.5">
              {contact_info.phone}
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-2 opacity-60">Add</p>
            <a
              href={socials.find(s => s.label === 'linkedin')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[clamp(1.25rem,5.5vw,1.75rem)] leading-snug border-b border-secondary/60 pb-0.5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex w-full justify-between items-end gap-16 py-20">
        <div className="max-w-[45vw]">
          <h2 className="text-[clamp(2.5rem,4.5vw,5rem)] leading-[1.0] font-medium">This is not finished.</h2>
          <p className="mt-1 text-[clamp(2.5rem,4.5vw,5rem)] leading-[1.0] italic font-serif">What will we create next?</p>
        </div>
        <div className="shrink-0">
          <div className="grid grid-cols-[56px_1fr] items-baseline gap-x-6 gap-y-6">
            <span className="text-[10px] uppercase tracking-widest opacity-60 pt-1">Mail</span>
            <a href={`mailto:${contact_info.email}`} className="text-[clamp(1.25rem,2vw,1.75rem)] border-b border-secondary/60 pb-0.5 w-fit">
              {contact_info.email}
            </a>
            <span className="text-[10px] uppercase tracking-widest opacity-60 pt-1">Call</span>
            <a href={`tel:${contact_info.phone}`} className="text-[clamp(1.25rem,2vw,1.75rem)] border-b border-secondary/60 pb-0.5 w-fit">
              {contact_info.phone}
            </a>
            <span className="text-[10px] uppercase tracking-widest opacity-60 pt-1">Add</span>
            <a
              href={socials.find(s => s.label === 'linkedin')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(1.25rem,2vw,1.75rem)] border-b border-secondary/60 pb-0.5 w-fit"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <BaseSection as="footer" sectionID="contact" sectionClassName="pt-section">
      <div className="relative">
        <BentoSection />
        <CTASection />
      </div>
    </BaseSection>
  );
}
