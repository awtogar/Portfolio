import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BaseSection from '../../../components/commons/BaseSection';
import { projects, projectCategories } from '../../../data/data';
import { ProjectGrid } from './components';

const ease = [0.7, 0, 0.3, 1];

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
