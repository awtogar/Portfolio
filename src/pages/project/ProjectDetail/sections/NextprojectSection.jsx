import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { RiArrowRightUpLine } from '@remixicon/react';
import { CreativeButton, TransitionLink } from '../../../../components';
import BaseSection from '../../../../components/commons/BaseSection';
import { useCursorHoverContent } from '../../../../hooks/useCursorHoverContent';
import { projects } from '../../../../data/data';

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
    <BaseSection sectionClassName="section-padding-xy">
      <div ref={sectionRef} className="flex flex-col gap-s600">
        <div className="flex items-center gap-s300">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-px w-[32px] bg-primary/30 origin-left"
          />
          <span className="text-base-xs uppercase tracking-[0.2em] text-primary/40">Next</span>
        </div>

        <motion.h2
          className="text-h100 leading-none tracking-tight text-primary hover:opacity-50 transition-opacity duration-500"
          style={{
            x: titleX,
            opacity: titleOpacity,
          }}
        >
          {nextProject.title}
        </motion.h2>

        <div className="flex items-end justify-between gap-s600 flex-wrap pt-s300">
          <div className="flex flex-col gap-s200">
            <span className="text-base-xs uppercase tracking-label text-primary/30">{nextProject.category}</span>
            <p className="text-base-sm text-primary/50 max-w-[40ch] leading-body">{nextProject.subtitle || nextProject.description}</p>
          </div>
          <TransitionLink to={`/projects/${nextProject.slug}`} className="block group">
            <CreativeButton ref={nextBtnRef} variant="outline" size="sm">
              <RiArrowRightUpLine size={26} className="transition-colors duration-300" />
            </CreativeButton>
          </TransitionLink>
        </div>
      </div>
    </BaseSection>
  );
};

export default NextProjectSection;
