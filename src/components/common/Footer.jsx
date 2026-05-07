'use client';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { site1, site2, site3, site6, site7, site8, site9, site13 } from '@/assets';
import BaseSection from '@/components/common/BaseSection';
import { LetterScroll } from '@/components/ui/LetterScroll';
import { HoverRotate } from '..';
import { contact_info, socials, pages } from '@/data/navigation';
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

  const currentPage = Object.values(pages).find(page => pathname === page.href || pathname.startsWith(`${page.href}/`)) || pages.home;

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <BaseSection as="footer" containerID="footer" containerClassName="max-w-full" sectionClassName="">
      <div className="relative h-screen md:h-[100vh]">
        <div className="absolute inset-0">
          <LetterScroll lines={['MODERN', 'TECH STACK']} textColor="text-primary" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <div className="w-full h-[56%] rounded-2xl" />
        </div>
      </div>
      <div className="md:hidden bg-neutral-100 pointer-events-none select-none">
        {mobileImages.map((src, i) => (
          <MobileParallaxImage key={i} src={src} />
        ))}
      </div>

      <div ref={gallery} className="h-[200vh] overflow-hidden bg-neutral-100 pointer-events-none select-none hidden md:block">
        <div className="relative -top-[12.5vh] h-[200vh] flex gap-[4vw] p-[4vw] md:gap-[2vw] md:p-[2vw]">
          <Column images={[images[0], images[1], images[2]]} y={y} topClass="-top-[45%]" />
          <Column images={[images[3], images[4], images[5]]} y={y2} topClass="-top-[80%]" />
          <Column images={[images[6], images[7], images[8]]} y={y3} topClass="hidden md:flex -top-[30%]" />
          <Column images={[images[9], images[10], images[11]]} y={y4} topClass="hidden md:flex -top-[60%]" />
        </div>
      </div>
      {/* mobile */}
      <div className="h-screen bg-neutral-100 section-padding-x flex flex-col justify-between md:hidden py-10">
        <div className="grid flex-1 grid-cols-1 gap-y-8">
          <div>
            <span className="mb-2 block text-[10px] font-mono font-medium tracking-[0.2em] text-primary-muted/50 uppercase">Contents</span>
            <ul className="flex flex-col">
              {currentPage.sections.map((section, i) => (
                <li key={section.id} className="border-b border-primary-muted/10 last:border-b-0">
                  <HoverRotate
                    href={`#${section.id}`}
                    onClick={e => handleSectionClick(e, section.id)}
                    className="group flex items-center justify-between py-1 transition-all hover:border-primary-muted/30"
                  >
                    <span className="text-[2.6rem] font-medium uppercase tracking-tight text-primary sm:text-4xl">{section.title}</span>
                  </HoverRotate>
                  {section.description && <span className="mt-0.5 inline-block text-[9px] font-mono uppercase tracking-[0.1em] text-primary-muted/40">{section.description}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="mb-2 block text-[10px] font-mono font-medium tracking-[0.2em] text-primary-muted/50 uppercase">Socials</span>
            <ul className="flex flex-col">
              {socials.map((social, i) => (
                <li key={social.label} className="border-b border-primary-muted/10 last:border-b-0">
                  <HoverRotate
                    as="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-1 transition-all hover:border-primary-muted/30"
                  >
                    <span className="text-display-xs font-medium uppercase tracking-tight text-primary-muted sm:text-3xl">{social.title}</span>
                  </HoverRotate>
                  {social.handle && <span className="mt-0.5 inline-block text-[9px] font-mono uppercase tracking-[0.1em] text-primary-muted/40">{social.handle}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-primary-muted/20 pt-5 text-[10px] font-mono uppercase tracking-wider text-primary-muted/50 sm:flex-row sm:justify-between">
          <span>{contact_info.credits}</span>
          <span>{contact_info.copyright}</span>
        </div>
      </div>

      {/* Desktop */}
      <div id="contact" className="hidden md:flex h-[100vh] bg-neutral-100 section-padding-x items-center relative overflow-hidden clip">
        <div className="m-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px] md:pb-0">
          <div className="flex flex-col gap-s800 justify-between pt-18">
            <div className="flex justify-between flex-wrap gap-8">
              <div className="flex flex-col gap-s100 items-start md:gap-s400">
                <span className="text-primary-muted/72 inline-block border-b border-primary-muted/35 pb-1 w-fit">Content Menu</span>
                {currentPage.sections.map(section => (
                  <LinkHoverRotate
                    key={section.id}
                    cursorConfig={{ magnetic: true, content: 'arrow' }}
                    className="text-primary-muted text-5xl font-medium uppercase tracking-tight leading-[1.1]"
                    href={`#${section.id}`}
                    onClick={e => handleSectionClick(e, section.id)}
                  >
                    {section.title}
                  </LinkHoverRotate>
                ))}
              </div>
              <div className="flex flex-col gap-s100 items-end md:gap-s400">
                <span className="text-primary-muted/72 inline-block border-b border-primary-muted/35 pb-1 w-fit">Socials</span>
                {socials.map(social => (
                  <LinkHoverRotate
                    key={social.label}
                    cursorConfig={{ magnetic: true, content: 'arrow' }}
                    as="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-muted text-5xl font-medium uppercase tracking-tight leading-[1.1]"
                  >
                    {social.title}
                  </LinkHoverRotate>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 section-padding-x text-primary-muted/72 flex justify-between items-center py-4 border-t border-primary-muted/35">
              <span className="text-xs">{contact_info.credits}</span>
              <span className="text-xs">{contact_info.copyright}</span>
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
