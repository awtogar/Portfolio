import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useScroll, useTransform } from 'motion/react';
import { projects } from '@/data/projects';
import { TransitionLink, CreativeButton, HoverVideoCard } from '../../../components';
import BaseSection from '../../../components/common/BaseSection';
import { useCursorInteraction } from '../../../hooks';

const MarqueeTags = ({ tags = [] }) => {
  const marqueeOffsetRef = useRef(0);
  const marqueeFirstRef = useRef(null);
  const marqueeSecondRef = useRef(null);
  const marqueeItemWidthRef = useRef(0);
  const marqueeContainerRef = useRef(null);

  useEffect(() => {
    if (!marqueeFirstRef.current || !marqueeContainerRef.current) return;
    marqueeItemWidthRef.current = marqueeFirstRef.current.scrollWidth;
    marqueeOffsetRef.current = 0;
  }, [tags]);

  useAnimationFrame((_, delta) => {
    if (!marqueeFirstRef.current || !marqueeSecondRef.current || !marqueeItemWidthRef.current) return;
    marqueeOffsetRef.current -= delta * 0.03;
    if (marqueeOffsetRef.current <= -marqueeItemWidthRef.current) {
      marqueeOffsetRef.current += marqueeItemWidthRef.current;
    }
    const translateValue = `translateX(${marqueeOffsetRef.current}px)`;
    marqueeFirstRef.current.style.transform = translateValue;
    marqueeSecondRef.current.style.transform = translateValue;
  });

  const repeatedTags = Array.from({ length: 5 }, () => tags).flat();

  return (
    <div ref={marqueeContainerRef} className="flex justify-center items-center h-4 md:h-4.5 overflow-hidden relative w-full">
      <div className="absolute left-0 h-full w-8 lg:w-10 bg-gradient-to-r from-neutral-900 dark:from-neutral-50 to-transparent pointer-events-none" />
      <div className="absolute right-0 h-full w-8 lg:w-10 bg-gradient-to-l from-neutral-900 dark:from-neutral-50 to-transparent pointer-events-none" />
      <div className="flex overflow-hidden w-full">
        <p ref={marqueeFirstRef} className="text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase whitespace-nowrap pr-1.5 shrink-0">
          {repeatedTags.map((tag, i) => (
            <span key={i}>{tag}, </span>
          ))}
        </p>
        <p ref={marqueeSecondRef} className="text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase whitespace-nowrap pr-1.5 shrink-0">
          {repeatedTags.map((tag, i) => (
            <span key={i}>{tag}, </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const WorkCard = ({ work }) => {
  const imageContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-10vh', '10vh']);

  const LogoComponent = work.logo;
  const isLogoComponent = typeof LogoComponent === 'function' || typeof LogoComponent === 'object';

  return (
    <li className="w-full lg:w-1/2">
      <TransitionLink
        to={`/projects/${work.slug}`}
        className="flex flex-col gap-4 lg:gap-5 px-3 lg:px-4 pt-3 lg:pt-4 pb-5 lg:pb-6 rounded-xl lg:rounded-2xl bg-neutral-900 dark:bg-neutral-50 cursor-pointer group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={imageContainerRef} className="relative rounded-lg lg:rounded-xl overflow-hidden w-full h-[248px] md:h-[350px] lg:h-[clamp(500px,32vw,800px)]">
          <div className="absolute inset-0 bg-neutral-900/30 dark:bg-neutral-50/30 backdrop-blur-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

          {work.video && (
            <motion.video
              src={work.video}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[clamp(260px,56%,600px)] h-auto lg:max-h-2/4 rounded-lg object-cover z-20"
              animate={{
                clipPath: isHovered ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(30% 50%, 70% 50%, 70% 50%, 30% 50%)',
                y: isHovered ? '-50%' : '-8.33%',
              }}
              transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
              muted
              loop
              playsInline
              autoPlay
            />
          )}

          <div className="w-full h-full">
            <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[15%]" style={{ y: parallaxY }}>
              <img
                src={work.thumbnail}
                alt={work.title}
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-500 ease-in-out"
                style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex flex-col gap-4 lg:gap-5">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-6 h-6 md:w-10 md:h-10 px-1 py-1 md:px-2 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-100 overflow-hidden text-primary dark:text-primary">
                {LogoComponent ? (
                  isLogoComponent ? (
                    <LogoComponent className="w-full h-full" />
                  ) : (
                    <img src={LogoComponent} alt={`${work.client} logo`} className="w-full h-full object-contain" />
                  )
                ) : (
                  <span className="text-xs text-neutral-100">{work.client?.charAt(0) || 'W'}</span>
                )}
              </div>
              <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-100 tracking-wide">{work.client || work.title}</p>
            </div>
            <div className="flex gap-3 lg:gap-5">
              <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-300 tracking-wide">{work.type || work.role || 'Portfolio'}</p>
              <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-300 tracking-wide">{work.year || '2025'}</p>
            </div>
          </div>
          <MarqueeTags tags={work.tags || []} />
        </div>
      </TransitionLink>
    </li>
  );
};

const SelectedWorksSection = () => {
  const selectedWorks = projects.filter(project => project.selected);
  const { targetRef: seeAllButtonRef } = useCursorInteraction({
    content: 'view',
    size: 'medium',
    textColor: 'text-primary',
    fill: 'bg-neutral-200',
  });

  return (
    <BaseSection containerID="selected-works" sectionClassName="section-padding-xy relative overflow-hidden">
      <div className="flex flex-col gap-s300 mb-s600 lg:mb-s700">
        <div className="flex items-center justify-between">
          <span className="text-base">(selected)</span>
        </div>
        <div className="flex items-end justify-between w-full">
          <span className="font-[700] tracking-[-0.03em] leading-[0.85] uppercase" style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            Work
          </span>

          <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
            <span className="font-[700] tracking-[-0.03em] leading-[0.85] uppercase" style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
              '25
            </span>
          </div>
        </div>
        <div className="h-px w-full bg-primary/10" />
      </div>

      <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full mb-s600 lg:mb-s800">
        {selectedWorks.map(work => (
          <WorkCard key={work.id} work={work} />
        ))}
      </ul>

      <div ref={seeAllButtonRef} className='flex items-center justify-center'>
        <CreativeButton to="/projects" variant="transparent" rel="noopener noreferrer">
          <span>See all projects</span>
        </CreativeButton>
      </div>
    </BaseSection>
  );
};

export default SelectedWorksSection;
