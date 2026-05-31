'use client';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { site1, site2, site3, site6, site7, site8, site9, site13 } from '@/assets';
import BaseSection from '@/components/common/BaseSection';
import { LetterScroll } from '@/components/ui/LetterScroll';
import { HoverRotate } from '..';
import { contact_info, socials } from '@/data/navigation';
import { useScrollToSection } from '@/hooks';
import { useCursorInteraction } from '@/cursor';

const LinkHoverRotate = ({ cursorConfig = {}, children, ...props }) => {
  const { targetRef } = useCursorInteraction(cursorConfig);
  return (
    <HoverRotate ref={targetRef} {...props}>
      {children}
    </HoverRotate>
  );
};

const images = [site1, site2, site3, site6, site7, site8, site9, site13, site2, site9, site8, site1];
const mobileImages = [site1];

export default function Footer() {
  const gallery = useRef(null);
  const { pathname } = useLocation();
  const scrollToSection = useScrollToSection();

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const isBrowser = typeof window !== 'undefined';
  const height = isBrowser ? window.innerHeight : 800;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <BaseSection as="footer" containerID="footer" containerClassName="max-w-full" sectionClassName="">
      {/* Content first */}
      <div className="relative h-[65vh] md:h-[100vh]">
        <div className="absolute inset-0">
          <LetterScroll lines={['MODERN', 'TECH STACK']} textColor="text-primary" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <div className="w-full h-[56%] rounded-2xl" />
        </div>
      </div>
      {/* Content second on mobile */}
      <div className="md:hidden bg-neutral-100 pointer-events-none select-none">
        {mobileImages.map((src, i) => (
          <MobileParallaxImage key={i} src={src} />
        ))}
      </div>
      {/* content second on desktio*/}
      <div ref={gallery} className="hidden md:block h-[100vh] overflow-hidden bg-neutral-100 pointer-events-none select-none">
        <div className="relative -top-[12.5vh] h-[200vh] flex gap-[4vw] p-[4vw] md:gap-[2vw] md:p-[2vw]">
          <Column images={[images[0], images[1], images[2]]} y={y} topClass="-top-[45%]" />
          <Column images={[images[3], images[4], images[5]]} y={y2} topClass="-top-[80%]" />
          <Column images={[images[6], images[7], images[8]]} y={y3} topClass="hidden md:flex -top-[30%]" />
          <Column images={[images[9], images[10], images[11]]} y={y4} topClass="hidden md:flex -top-[60%]" />
        </div>
      </div>

      {/* content Third */}
      <div className="bg-neutral-100 section-padding-x">
        <div className="flex flex-col min-h-screen md:hidden py-6 gap-10">
          {/* Heading */}
          <div className="mt-6">
            <h2 className="text-[clamp(3rem,10vw,4.5rem)] leading-[0.9] font-medium">This is not finished.</h2>

            <p className="mt-2 text-[clamp(3rem,10vw,4.5rem)] leading-[0.9] italic font-serif">What will we create next?</p>
          </div>

          {/* Contact */}
          <div className="mt-16 space-y-14">
            <div>
              <p className="text-xs uppercase tracking-wide mb-3">Mail</p>

              <a href={`mailto:${contact_info.email}`} className=" inline-block text-[clamp(1.5rem,6vw,2.25rem)] leading-none border-bborder-current break-all">
                {contact_info.email}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide mb-3">Call</p>

              <a href={`tel:${contact_info.phone}`} className="inline-block text-[clamp(1.5rem,6vw,2.25rem)] leading-none border-b border-current">
                {contact_info.phone}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide mb-3">Add</p>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block text-[clamp(1.5rem,6vw,2.25rem)] leading-none border-b border-current">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex h-screen items-center">
          <div className="w-full flex justify-between items-start">
            {/* LEFT */}
            <div className="max-w-[40vw]">
              <h2 className="text-[clamp(4rem,5vw,6rem)] leading-[0.95] font-medium">This is not finished.</h2>

              <p className="mt-2 text-[clamp(4rem,5vw,6rem)] italic leading-[0.9]">What will we create next?</p>
            </div>

            {/* RIGHT */}
            <div className="w-[40vw] max-w-[650px]">
              <div className="grid grid-cols-[80px_1fr] gap-y-10">
                <span className="text-xs uppercase">Mail</span>
                <a href={`mailto:${contact_info.email}`} className="text-4xl border-b border-current w-fit">
                  {contact_info.email}
                </a>
                <span className="text-xs uppercase">Call</span>
                <a href={`tel:${contact_info.phone}`} className="text-4xl border-b border-current w-fit">
                  {contact_info.phone}
                </a>
                <span className="text-xs uppercase">Add</span>
                <a href={socials.links} target="_blank" rel="noopener noreferrer" className="text-4xl border-b border-current w-fit">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}

const MobileParallaxImage = ({ src }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10vh', '10vh']);

  return (
    <div ref={container} className="relative h-[60vh] overflow-hidden" style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img src={src} alt="" draggable="false" className="object-cover w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
};

const Column = ({ images, y, topClass }) => (
  <motion.div className={`relative h-full w-1/2 md:w-1/4 min-w-0 flex flex-col gap-[4vw] md:gap-[2vw] whitespace-nowrap ${topClass}`} style={{ y }}>
    {images.map((src, i) => (
      <div key={i} className="relative h-[33%] w-full rounded-[2vw] md:rounded-[1vw] overflow-hidden">
        <img src={src} alt="image" draggable="false" className="object-cover w-full h-full" />
      </div>
    ))}
  </motion.div>
);
