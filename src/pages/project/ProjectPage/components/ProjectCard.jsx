import { motion } from 'motion/react';
import { ScrollAnimatedImg, TransitionLink } from '../../../../components';
import { useCursorHoverContent } from '../../../../hooks/useCursorHoverContent';

const ease = [0.7, 0, 0.3, 1];

const ProjectCard = ({ project, index }) => {
  const arrowRef = useCursorHoverContent('arrow');

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease }}
      className="group relative"
    >
      <TransitionLink to={`/projects/${project.slug}`} className="block">
        <div ref={arrowRef} className="relative overflow-hidden rounded-2xl">
          <ScrollAnimatedImg
            src={project.image}
            alt={project.title}
            containerClassName="w-full aspect-[3/4]"
            imageClassName="object-cover w-full h-full rounded-2xl"
            scrollRange={['0%', '12%']}
            offset={['start end', 'end start']}
          />
        </div>

        <div className="pt-s400 flex flex-col gap-s300">
          <div className="flex items-baseline gap-s200">
            <span className="shrink-0 font-mono text-base-xs tracking-label text-primary/30">({String(index + 1).padStart(2, '0')})</span>
            <h3 className="text-h500 leading-heading tracking-heading text-primary">{project.title}</h3>
          </div>

          <p className="text-base text-primary/55 leading-body max-w-[40ch]">{project.description}</p>

          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-s200">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-base-xs tracking-label uppercase text-primary/45 border border-border rounded-full px-s300 py-s100">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-s200 border-t border-border">
            <span className="text-base-sm text-primary/75">{project.client || project.title}</span>
            <span className="text-base-xs tracking-label uppercase text-primary/40">{project.role || 'Creative Developer'}</span>
          </div>
        </div>
      </TransitionLink>
    </motion.article>
  );
};

export default ProjectCard;
