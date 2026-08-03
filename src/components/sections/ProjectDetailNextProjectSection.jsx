'use client';

import React from 'react';
import { TransitionLink } from '@/components';
import { RiArrowRightUpLine } from '@remixicon/react';
import { projects } from '@/data/projects';

const ProjectDetailNextProjectSection = ({ project }) => {
  const projectIndex = projects.findIndex(p => p.slug === project?.slug);
  const nextProject = projectIndex !== -1 ? projects[(projectIndex + 1) % projects.length] : null;

  if (!nextProject) return null;

  return (
    <div className="border-t border-neutral-300 dark:border-neutral-700 pt-6 mt-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">Next</span>
          <TransitionLink to={`/projects/${nextProject.slug}`} className="group inline-block">
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
              {nextProject.client}
            </h3>
          </TransitionLink>
        </div>

        <TransitionLink
          to={`/projects/${nextProject.slug}`}
          className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          View
          <RiArrowRightUpLine size={16} />
        </TransitionLink>
      </div>
    </div>
  );
};

export default ProjectDetailNextProjectSection;
