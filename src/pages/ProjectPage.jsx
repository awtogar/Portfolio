import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BaseSection } from '../layout';
import { projects, projectCategories } from '../data/data';
import { ScrollAnimatedImg, TransitionLink } from '../components';
import { useCursorHover } from '../hooks/useCursorHover';


const ProjectCard = ({ project, index }) => {
const arrowRef = useCursorHover('arrow');

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <TransitionLink to={`/projects/${project.slug}`} className="block">
        <div ref={arrowRef} className="relative overflow-hidden rounded-2xl">
          <ScrollAnimatedImg
            src={project.image}
            alt={project.title}
            containerClassName="w-full aspect-[4/5]"
            imageClassName="object-cover w-full h-full rounded-2xl transition-transform duration-700"
            scrollRange={['0%', '12%']}
            offset={['start end', 'end start']}
      
          />

        </div>

        {/* Info */}
        <div className="pt-s500 space-y-s200">
          <h3 className="text-primary/85 text-h400 leading-tight transition-opacity duration-300">
            {project.title}
          </h3>
          <p className="text-primary/50 leading-relaxed text-base max-w-md">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 pt-s200">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-primary/60 border border-primary/15 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </TransitionLink>
    </motion.article>
  );
};

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <BaseSection containerClassName="max-w-full md:max-w-[768px] lg:max-w-[1080px] xl:max-w-[1440px]">
      <div className="flex flex-col gap-s700">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-2"
        >
          <span className="hsAccent">(projects)</span>
          <h1 className="text-h100">WORKS</h1>
          <p className="text-primary/50 max-w-xl mt-s300">
            A curated selection of projects spanning branding, web development,
            and application design — each crafted with intention and care.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 md:gap-3"
          role="tablist"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category.id
                    ? 'bg-primary text-secondary'
                    : 'bg-transparent text-primary border border-primary/15 hover:border-primary/40'
                }
              `}
              role="tab"
              aria-selected={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </motion.nav>

        {/* Staggered Two-Column Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              <div className="md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-15 xl:gap-x-20">
                {/* Left Column */}
                <div className="flex flex-col gap-y-12 lg:gap-y-20">
                  {filteredProjects
                    .filter((_, i) => i % 2 === 0)
                    .map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    ))}
                </div>

                {/* Right Column — offset for stagger */}
                <div className="flex flex-col gap-y-12 lg:gap-y-20 mt-12 md:mt-[clamp(150px,20vw,400px)]">
                  {filteredProjects
                    .filter((_, i) => i % 2 === 1)
                    .map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index + 1}
                      />
                    ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-s900">
                <p className="text-primary/40 text-h500">No projects found</p>
                <p className="text-primary/30 mt-s300">
                  Try selecting a different category.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </BaseSection>
  );
};

export default ProjectPage;
