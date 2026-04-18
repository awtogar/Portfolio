'use client';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { aboutHeroImg, aboutImg1, aboutImg2, img1, img3, img4, img5, img6 } from '@/assets';
import BaseSection from '@/components/common/BaseSection';
import { LetterScroll } from '@/components/ui/LetterScroll';
import { HoverRotate } from '..';
import { contact_info, socials, pages } from '@/data/navigation';
import { useScrollToSection } from '@/hooks';

const images = [aboutHeroImg, aboutImg1, aboutImg2, img1, img3, img4, img5, img6, aboutImg1, img5, img4, aboutHeroImg];
const mobileImages = [aboutHeroImg];

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
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  const currentPage = Object.values(pages).find(page => pathname === page.href || pathname.startsWith(`${page.href}/`)) || pages.home;

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <BaseSection as="footer" sectionClassName="" containerClassName="max-w-full">
      <div className="h-fit md:h-[100vh]">
        <LetterScroll lines={['MODERN', 'TECH STACK']} />
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
      <div id="contact" className="h-[100vh] bg-neutral-100 section-padding-x items-end hidden md:flex">
        <div className="m-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px] pb-8">
          <div className="flex flex-col gap-s600 justify-between">
            <div className="flex justify-between flex-wrap gap-8">
              <div className="flex flex-col gap-s100 items-start">
                <span className="text-primary-muted/72 inline-block border-b border-primary-muted/35 pb-1 w-fit">Content Menu</span>
                {currentPage.sections.map(section => (
                  <HoverRotate
                    key={section.id}
                    className="text-primary-muted text-5xl font-medium uppercase tracking-tight leading-[1.1]"
                    href={`#${section.id}`}
                    onClick={e => handleSectionClick(e, section.id)}
                  >
                    {section.title}
                  </HoverRotate>
                ))}
              </div>
              <div className="flex flex-col gap-s100 items-end">
                <span className="text-primary-muted/72 inline-block border-b border-primary-muted/35 pb-1 w-fit">Socials</span>
                {socials.map(social => (
                  <HoverRotate
                    key={social.label}
                    as="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-muted text-5xl font-medium uppercase tracking-tight leading-[1.1]"
                  >
                    {social.title}
                  </HoverRotate>
                ))}
              </div>
            </div>
            <div className="text-primary-muted/72 flex justify-between items-center pt-4 border-t border-primary-muted/35">
              <span className="text-xs">{contact_info.credits}</span>
              <span className="text-xs">{contact_info.copyright}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-neutral-100 section-padding-x pb-10 pt-24 flex flex-col md:hidden">
        <div className="flex flex-col h-full justify-end flex-1">
          <div className="flex flex-col justify-end items-end h-full gap-20 pb-16">
            <div className="flex items-start gap-4">
              <span className="text-primary-muted/60 text-[11px] uppercase tracking-[0.2em] pt-4 min-w-[70px]">Content</span>
              <div className="flex flex-col items-start">
                {currentPage.sections.map(section => (
                  <HoverRotate
                    key={section.id}
                    className="text-primary-muted text-5xl font-medium uppercase tracking-tight leading-[1.1]"
                    href={`#${section.id}`}
                    onClick={e => handleSectionClick(e, section.id)}
                  >
                    {section.title}
                  </HoverRotate>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary-muted/60 text-[11px] uppercase tracking-[0.2em] pt-4 min-w-[70px]">Socials</span>
              <div className="flex flex-col items-start text-start">
                {socials.map(social => (
                  <HoverRotate
                    key={social.label}
                    as="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-muted text-5xl font-medium uppercase tracking-tight leading-[1.1]"
                  >
                    {social.title}
                  </HoverRotate>
                ))}
              </div>
            </div>
          </div>
          <div className="text-primary-muted/72 flex justify-between items-center gap-3 pt-6 border-t border-primary-muted/35">
            <span className="text-[10px] text-center tracking-wider uppercase">{contact_info.credits}</span>
            <span className="text-[10px] text-center opacity-75 tracking-wider uppercase">{contact_info.copyright}</span>
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
