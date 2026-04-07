import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'motion/react';
import BaseSection from '../../components/commons/BaseSection';
import { projects } from '../../data/data';
import { CustomCard, TransitionLink } from '../../components';
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

const ProjectCard = ({ project, index }) => {
  const { targetRef } = useCursorInteraction({
    content: 'view',
    size: 'large',
    textColor: 'text-secondary',
    fill: 'accent',
  });

  return (
    <motion.li initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.5), ease }} className="w-full list-none">
      <TransitionLink
        to={`/projects/${project.slug}`}
        className="flex flex-col gap-4 lg:gap-5 px-3 lg:px-4 pt-3 lg:pt-4 pb-5 lg:pb-6 rounded-xl lg:rounded-2xl bg-neutral-900 cursor-pointer group relative"
      >
        <div ref={targetRef} className="relative rounded-lg lg:rounded-xl overflow-hidden w-full aspect-4/3 md:aspect-video lg:aspect-square">
          <CustomCard
            src={project.thumbnail}
            alt={project.client}
            containerClassName="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[15%]"
            imageClassName="object-cover scale-105 group-hover:scale-105 transition-transform duration-500 ease-in-out"
            scrollRange={['0%', '12%']}
            blur={true} // pass false to turn off blur overlay
            offset={['start end', 'end start']}
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-5 px-3 lg:px-4">
          <div className="flex justify-between items-center w-full relative">
            <div className="flex items-center gap-2 lg:gap-3">
              {project.logo ? (
                <img src={project.logo} alt={project.client} width={32} height={32} className="w-6 h-6 lg:w-8 lg:h-8 rounded-full object-cover" />
              ) : (
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-neutral-100/50 font-mono text-[10px]">{project.client.charAt(0)}</span>
                </div>
              )}
              <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-100 tracking-wide">{project.client}</p>
            </div>
            <div className="flex gap-3 lg:gap-5">
              <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-300 tracking-wide">{project.type}</p>
              <p className="text-[clamp(14px,1.2vw,18px)] uppercase font-semibold text-neutral-300 tracking-wide">{project.year}</p>
            </div>
          </div>

          <MarqueeTags tags={project.tags || []} />
        </div>
      </TransitionLink>
    </motion.li>
  );
};

const ProjectPage = () => {
  return (
    <BaseSection sectionClassName="section-padding-hero lg:min-h-screen pt-4 lg:pt-6">
      <div className="flex flex-col gap-s700 lg:gap-s900 px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="flex flex-col gap-s500">
          <div className="flex flex-col gap-s200">
            <span className="hsAccent">(Projects)</span>
            <h1 className="text-h100 uppercase leading-heading tracking-heading">Works</h1>
          </div>
          <p className="text-base max-w-[48ch] text-primary/55 leading-body">
            A curated selection of projects spanning branding, web development, and application design — each crafted with intention and care.
          </p>
        </motion.div>
      </div>

      <div className="px-2 lg:px-4 py-4 lg:py-6 mt-s600">
        <div className="w-full rounded-2xl lg:rounded-[20px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 w-full">
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
