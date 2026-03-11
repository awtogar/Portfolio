import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RiArrowRightUpLine } from '@remixicon/react';
import { CreativeButton, TransitionLink } from '../../../components';
import { useCursorHover } from '../../../hooks/useCursorEffect';

const NextProjectSection = ({ nextProject }) => {
  const nextBtnRef = useCursorHover('arrow');
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const titleX = useTransform(scrollYProgress, [0.1, 0.6], ['-6%', '0%']);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  if (!nextProject) return null;

  return (
    <section ref={sectionRef} className="border-t border-primary/10">
        <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col gap-8">

          {/* Label row */}
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-px w-8 bg-primary/30 origin-left"
            />
            <span className="text-xs uppercase tracking-[0.2em] text-primary/40 font-medium">
              Next
            </span>
          </div>

          {/* Title — parallax slide in */}
          <motion.h2
            className="text-primary font-light leading-none tracking-tight group-hover:opacity-50 transition-opacity duration-500"
            style={{
              fontSize: 'clamp(2.8rem, 9vw, 8rem)',
              x: titleX,
              opacity: titleOpacity,
            }}
          >
            {nextProject.title}
          </motion.h2>

          {/* Bottom row — meta + cta */}
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-primary/30 font-medium">
                {nextProject.category}
              </span>
              <p className="text-primary/50 text-sm max-w-sm leading-relaxed">
                {nextProject.subtitle || nextProject.description}
              </p>
            </div>
      <TransitionLink to={`/projects/${nextProject.slug}`} className="block group">

            <CreativeButton ref={nextBtnRef} variant="outline" size="sm">
              <RiArrowRightUpLine
                size={26}
                className="transition-colors duration-300"
              />
            </CreativeButton>
      </TransitionLink>

          </div>

        </div>
    </section>
  );
};

export default NextProjectSection;