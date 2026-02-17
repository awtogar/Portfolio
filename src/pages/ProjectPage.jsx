import React, { useState } from 'react';
import { BaseSection } from '../layout';
import { projects, projectCategories } from '../data/data';

const ProjectCard = ({ project, index }) => {
  const isLarge = index === 0;

  return (
    <article
      className={`
        group relative overflow-hidden rounded-2xl md:rounded-3xl
        cursor-pointer transition-all duration-500 ease-out
        hover:shadow-2xl hover:-translate-y-1
        ${isLarge ? 'md:row-span-2' : ''}
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={e => {
            // Fallback gradient if image doesn't load
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
        {/* Tags */}
        {project.tags && (
          <div className="mb-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title and Subtitle */}
        <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
          <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-md leading-relaxed">{project.subtitle}</p>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/30">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
  );
};

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <BaseSection containerClassName="md:max-w-[768px] lg:max-w-[1200px] xl:max-w-[1440px]">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        {/* Header */}
        <div className="text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">Our projects</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">We help bring ideas to life and create digital products that work.</p>
        </div>

        {/* Category Filter Tabs */}
        <nav className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 border-b border-gray-200 dark:border-gray-700 overflow-x-auto pb-1" role="tablist">
          {projectCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                pb-3 md:pb-4 text-sm md:text-base lg:text-lg font-medium 
                transition-all duration-300 whitespace-nowrap
                ${
                  activeCategory === category.id
                    ? 'border-b-2 border-black dark:border-white text-black dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }
              `}
              role="tab"
              aria-selected={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </nav>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[400px] md:auto-rows-[350px] lg:auto-rows-[400px] gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </BaseSection>
  );
};

export default ProjectPage;
