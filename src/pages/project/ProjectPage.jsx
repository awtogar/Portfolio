import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { projects } from '@/data/projects';
import { AnimatedCard, TransitionLink, BaseSection, TextReveal, Card } from '@/components';
import { useCursorInteraction } from '../../hooks';

const ease = [0.7, 0, 0.3, 1];

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
      <div className="flex overflow-hidden">
        <div ref={innerRef} className="flex whitespace-nowrap will-change-transform w-max">
          {Array(20)
            .fill(tags)
            .flat()
            .map((tag, i) => (
              <span key={i} className="text-[10px] md:text-xs tracking-widest text-neutral-300 dark:text-neutral-300 uppercase pr-1.5 font-mono shrink-0">
                {tag},{' '}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const { targetRef } = useCursorInteraction({
    content: 'view',
    size: 'large',
    textColor: 'text-primary',
    fill: 'secondary',
  });
  const Logo = project.logo;
  const isComponent = typeof Logo === 'function' || typeof Logo === 'object';

  return (
    <li className="w-full list-none">
      <TransitionLink
        to={`/projects/${project.slug}`}
        className="flex flex-col gap-4 lg:gap-5 px-3 lg:px-4 pt-3 lg:pt-4 pb-5 lg:pb-6 rounded-xl lg:rounded-2xl bg-black dark:bg-white cursor-pointer group relative"
      >
        <div ref={targetRef} className="relative rounded-lg lg:rounded-xl overflow-hidden w-full aspect-4/3 md:aspect-video lg:aspect-square">
          <Card
            src={project.thumbnail}
            alt={project.client}
            containerClassName="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[15%]"
            imageClassName="object-top"
            scrollRange={['0%', '12%']}
            blur={false}
            offset={['start end', 'end start']}
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-5 px-3 lg:px-4">
          <div className="flex justify-between items-center w-full relative">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-6 h-6 md:w-10 md:h-10 px-1 py-1 md:px-2 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-100 overflow-hidden text-primary dark:text-primary">
                {Logo ? (
                  isComponent ? (
                    <Logo className="w-full h-full" />
                  ) : (
                    <img src={Logo} alt={`${project.client} logo`} className="w-full h-full object-contain" />
                  )
                ) : (
                  <span className="text-xs font-semibold">{project.client?.charAt(0) || 'P'}</span>
                )}
              </div>
              <p className="text-[clamp(14px,1.2vw,16px)] uppercase font-semibold text-neutral-100 dark:text-neutral-900 tracking-wide">{project.client}</p>
            </div>
            <div className="flex gap-3 lg:gap-5">
              <p className="text-[clamp(12px,1.2vw,16px)] uppercase font-semibold text-neutral-300 dark:text-neutral-600 tracking-wide">{project.type}</p>
              <p className="text-[clamp(12px,1.2vw,16px)] uppercase font-semibold text-neutral-300 dark:text-neutral-600 tracking-wide">{project.year}</p>
            </div>
          </div>
          <MarqueeTags tags={project.tags || []} />
        </div>
      </TransitionLink>
    </li>
  );
};

const ProjectPage = () => {
  return (
    <BaseSection sectionClassName="section-padding-hero lg:min-h-screen pt-4 lg:pt-6">
      <div className="flex flex-col gap-s700 lg:gap-s900 px-4 lg:px-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-base">(recent)</span>
          </div>
          <div className="flex items-end justify-between w-full flex-wrap">
            <TextReveal className="text-[clamp(3.5rem,8vw,6rem)] md:text-[clamp(5rem,7vw,8rem)] font-[700] tracking-[-0.03em] leading-[0.85] uppercase" as="span">
              Project
            </TextReveal>

            <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
              <TextReveal className="text-[clamp(3.5rem,8vw,6rem)] md:text-[clamp(5rem,7vw,8rem)] font-[700] tracking-[-0.03em] leading-[0.85] uppercase" as="span">
                25
              </TextReveal>
            </div>
          </div>
          <div className="h-px w-full bg-primary/10" />
        </div>
      </div>

      <div className="px-2 lg:px-4 pt-6 lg:py-4">
        <div className="w-full rounded-2xl lg:rounded-[20px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </ul>
        </div>
      </div>
    </BaseSection>
  );
};

export default ProjectPage;
