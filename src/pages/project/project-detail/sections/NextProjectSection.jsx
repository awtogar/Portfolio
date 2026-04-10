import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { RiArrowRightUpLine } from '@remixicon/react';
import { CreativeButton, TransitionLink } from '../../../../components';
import BaseSection from '../../../../components/common/BaseSection';
import { useCursorHoverContent } from '@/hooks/useCursorInteraction';
import { projects } from '@/data/projects';

const NextProjectSection = () => {
  const { slug } = useParams();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projectIndex !== -1 ? projects[(projectIndex + 1) % projects.length] : null;

  const nextBtnRef = useCursorHoverContent('arrow');
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const titleX = useTransform(scrollYProgress, [0.1, 0.6], ['-6%', '0%']);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  if (!nextProject) return null;

  return (
    <div ref={sectionRef} className="flex flex-col gap-[clamp(64px,6vw,200px)] px-3 lg:px-4 pb-3 lg:pb-4 rounded-2xl lg:rounded-[20px]">
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-[2px] w-[32px] bg-neutral-900 origin-left"
        />
        <span className="text-xs uppercase tracking-[0.2em] text-neutral-900/60 font-medium">Next Project</span>
      </div>

      <motion.h2
        className="flex items-end justify-between gap-8 flex-wrap pt-4 section-padding-x"
        style={{
          x: titleX,
          opacity: titleOpacity,
        }}
      >
        <TransitionLink to={`/projects/${nextProject.slug}`} className="block">
          {nextProject.client}
        </TransitionLink>
      </motion.h2>

      <div className="flex items-end justify-between gap-8 flex-wrap pt-4 section-padding-x">
        <div className="flex flex-col gap-2">
          <span className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-500 uppercase font-medium tracking-wider">{nextProject.type}</span>
          <p className="text-base lg:text-lg text-neutral-700 max-w-[40ch] font-medium leading-relaxed">{nextProject.description}</p>
        </div>
        <TransitionLink to={`/projects/${nextProject.slug}`} className="block group">
          <CreativeButton ref={nextBtnRef} variant="outline" size="sm" className="border-neutral-900! text-neutral-900! hover:bg-neutral-900! hover:text-white!">
            <RiArrowRightUpLine size={26} className="transition-colors duration-300" />
          </CreativeButton>
        </TransitionLink>
      </div>
    </div>
  );
};

export default NextProjectSection;
