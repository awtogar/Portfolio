import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BaseSection } from '../layout';
import { projects, projectCategories } from '../data/data';
import { ScrollAnimatedImg, TransitionLink } from '../components';
import { useCursorHover } from '../hooks/useCursorHover';

const ease = [0.7, 0, 0.3, 1];

const ProjectCard = ({ project, index }) => {
  const arrowRef = useCursorHover('arrow');

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
            <span className="shrink-0 font-mono text-base-xs tracking-label text-primary/30">
              ({String(index + 1).padStart(2, '0')})
            </span>
            <h3 className="text-h500 leading-heading tracking-heading text-primary">
              {project.title}
            </h3>
          </div>

          <p className="text-base text-primary/55 leading-body max-w-[40ch]">
            {project.description}
          </p>

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

const ProjectGrid = ({ projects: list }) => {
  if (list.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-s900">
        <p className="text-h500 text-primary/30 leading-heading">No projects found</p>
        <p className="text-base mt-s300 text-primary/25">Try selecting a different category.</p>
      </div>
    );
  }

  return (
    <div className="md:grid md:grid-cols-2 gap-x-s700 lg:gap-x-s800">
      <div className="flex flex-col gap-s800">
        {list
          .filter((_, i) => i % 2 === 0)
          .map((project, index) => {
            const originalIndex = index * 2;
            return <ProjectCard key={project.id} project={project} index={originalIndex} />;
          })}
      </div>

      <div className="flex flex-col max-md:mt-s800 gap-s800 mt-[clamp(160px,20vw,400px)]">
        {list
          .filter((_, i) => i % 2 === 1)
          .map((project, index) => {
            const originalIndex = index * 2 + 1;
            return <ProjectCard key={project.id} project={project} index={originalIndex} />;
          })}
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <BaseSection sectionClassName="section-padding-hero section-padding-x">
      <div className="flex flex-col gap-s700">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="flex flex-col gap-s500">
          <div className="flex flex-col gap-s200">
            <span className="hsAccent">(Projects)</span>
            <h1 className="text-h100 uppercase leading-heading tracking-heading">Works</h1>
          </div>
          <p className="text-base max-w-[48ch] text-primary/55 leading-body">
            A curated selection of projects spanning branding, web development, and application design — each crafted with intention and care.
          </p>
        </motion.div>

        <div className="w-full h-px bg-border" />

        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="flex flex-wrap gap-s200"
          role="tablist"
        >
          {projectCategories.map(category => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                role="tab"
                aria-selected={isActive}
                className={`text-base-sm tracking-body px-s400 py-s100 rounded-full transition-all duration-primary ease-primary cursor-pointer outline-none ${
                  isActive ? 'bg-primary text-secondary border-none' : 'bg-transparent border border-border text-primary/55'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </motion.nav>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease }}>
            <ProjectGrid projects={filteredProjects} />
          </motion.div>
        </AnimatePresence>
      </div>
    </BaseSection>
  );
};

export default ProjectPage;
