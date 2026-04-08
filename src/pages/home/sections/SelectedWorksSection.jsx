import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame } from 'motion/react';
import { projects } from '../../../data/data';
import { HoverRotate, TransitionLink, CustomCard } from '../../../components';
import BaseSection from '../../../components/commons/BaseSection';
import { useCursorInteraction } from '../../../hooks';
import { RiArrowRightUpLine } from '@remixicon/react';

const MarqueeTags = ({ tags = [] }) => {
  const x = useRef(0);
  const innerRef = useRef(null);

  useAnimationFrame((_, delta) => {
    if (!innerRef.current) return;
    const width = innerRef.current.scrollWidth / 2;
    x.current = (x.current - delta * 0.03) % width;
    innerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div className="flex justify-center items-center h-4 md:h-[18px] overflow-hidden relative w-full">
      <div className="absolute left-0 top-0 h-full w-8 lg:w-10 bg-linear-to-r from-neutral-900/95 to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-8 lg:w-10 bg-linear-to-l from-neutral-900/95 to-transparent z-10" />
      <div className="flex overflow-hidden">
        <div ref={innerRef} className="flex whitespace-nowrap will-change-transform">
          {[...tags, ...tags, ...tags, ...tags].map((tag, i) => (
            <span key={i} className="text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase pr-1.5 font-mono">
              {tag},{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkCard = ({ work }) => {
  const { targetRef } = useCursorInteraction({
    content: 'view',
    size: 'medium',
    textColor: 'text-primary',
    fill: 'bg-neutral-200',
  });

  return (
    <li className="w-full list-none">
      <TransitionLink
        to={`/projects/${work.slug}`}
        className="flex flex-col gap-4 lg:gap-5 px-3 lg:px-4 pt-3 lg:pt-4 pb-5 lg:pb-6 rounded-xl lg:rounded-2xl bg-neutral-900 cursor-pointer group relative"
      >
        {/* Image + video container */}
        <div ref={targetRef} className="relative rounded-lg lg:rounded-xl overflow-hidden w-full aspect-4/3 md:aspect-video lg:aspect-square group/video">
          <CustomCard
            src={work.thumbnail}
            alt={work.title}
            containerClassName="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[15%]"
            imageClassName="object-cover scale-105 group-hover:scale-100 transition-transform duration-500 ease-in-out"
            scrollRange={['0%', '12%']}
            offset={['start end', 'end start']}
            videoSrc={work.video}
            blur={true}
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-5 px-3 lg:px-4">
          <div className="flex justify-between items-center w-full relative">
            <div className="flex items-center gap-2 lg:gap-3">
              {work.logo ? (
                <img src={work.logo} alt={work.client || work.title} width={32} height={32} className="w-6 h-6 lg:w-8 lg:h-8 rounded-full object-cover" />
              ) : (
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-neutral-100/50 font-mono text-[10px]">{(work.client || work.title).charAt(0)}</span>
                </div>
              )}
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
  const works = projects.filter(project => project.selected);
  const { ctaRef } = useCursorInteraction({
    content: 'text',
    size: 'medium',
    textColor: 'text-secondary',
    fill: 'accent',
  });

  return (
    <BaseSection containerID="selected-works" sectionClassName="section-padding-xy relative overflow-hidden">
      <div className="flex flex-col gap-s500 mb-s700">
        <div className="flex flex-col gap-s200">
          <span className="hsAccent">(selected)</span>
          <h2 className="text-h200 uppercase leading-heading tracking-heading">Works</h2>
        </div>
        <p className="text-base max-w-[48ch] text-primary/55 leading-body">Explore a curated collection of my recent work, showcasing innovation and craftsmanship.</p>
      </div>

      <div className="flex flex-col">
        <div className="w-full rounded-2xl lg:rounded-[20px] mb-s500">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 w-full">
            {works.map(work => (
              <WorkCard key={work.id} work={work} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-s300">
          {/* <span className="text-base-sm text-primary/40 tracking-body">Interested in seeing more?</span> */}
          <HoverRotate to="/projects" rel="noopener noreferrer" className="justify-center" ref={ctaRef}>
            <span className="text-primary/65">View All</span>
            <span className="flex items-center gap-1 text-primary">
              <span>Let's go</span>
              <RiArrowRightUpLine size={20} style={{ marginTop: '2px' }} />
            </span>
          </HoverRotate>
        </div>
      </div>
    </BaseSection>
  );
};

export default SelectedWorksSection;
