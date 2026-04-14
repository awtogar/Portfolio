'use client';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { aboutHeroImg, aboutImg1, aboutImg2, img1, img3, img4, img5, img6 } from '@/assets';
import BaseSection from '@/components/common/BaseSection';
import { HoverRotate } from '..';
import { contact_info, socials, pages } from '@/data/navigation';
import { useScrollToSection } from '@/hooks';

const images = [aboutHeroImg, aboutImg1, aboutImg2, img1, img3, img4, img5, img6, aboutImg1, img5, img4, aboutHeroImg];

export default function Footer() {
  const gallery = useRef(null);
  const { pathname } = useLocation();
  const scrollToSection = useScrollToSection();

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  // Calculate static height to avoid re-renders on Android address bar toggle which triggers resize
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
      <div className="h-[100vh]">{/* coming soon component */}</div>

      {/* parallax grid */}
      <div ref={gallery} className="h-[175vh] overflow-hidden bg-neutral-200">
        <div className="relative -top-[12.5vh] h-[200vh] flex gap-[2vw] p-[2vw]">
          <Column images={[images[0], images[1], images[2]]} y={y} topClass="-top-[45%]" />
          <Column images={[images[3], images[4], images[5]]} y={y2} topClass="-top-[80%]" />
          <Column images={[images[6], images[7], images[8]]} y={y3} topClass="hidden md:block -top-[30%]" />
          <Column images={[images[9], images[10], images[11]]} y={y4} topClass="hidden md:block -top-[60%]" />
        </div>
      </div>

      {/* footer section */}
      <div id="contact" className="h-[100vh] bg-neutral-200 section-padding-x flex items-end">
        <div className="m-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px] pb-8">
          <div className="flex flex-col gap-s600 justify-between">
            <div className="flex justify-between flex-wrap gap-8">
              <div className="flex flex-col gap-s100">
                <span className="text-primary-muted/72 inline-block border-b border-primary-muted/35 pb-1 w-fit">Content Menu</span>
                {currentPage.sections.map(section => (
                  <HoverRotate key={section.id} className="text-primary-muted" href={`#${section.id}`} onClick={e => handleSectionClick(e, section.id)}>
                    {section.title}
                  </HoverRotate>
                ))}
              </div>

              <div className="flex flex-col gap-s100">
                <span className="text-primary-muted/72 inline-block border-b border-primary-muted/35 pb-1 w-fit">Socials</span>
                {socials.map(social => (
                  <HoverRotate key={social.label} as="a" href={social.href} target="_blank" rel="noopener noreferrer" className="text-primary-muted">
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
    </BaseSection>
  );
}

const Column = ({ images, y, topClass }) => (
  <motion.div className={`relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] whitespace-nowrap ${topClass}`} style={{ y }}>
    {images.map((src, i) => (
      <div key={i} className="relative h-[33%] w-full rounded-[1vw] overflow-hidden">
        <img src={src} alt="image" className="object-cover w-full h-full" />
      </div>
    ))}
  </motion.div>
);
