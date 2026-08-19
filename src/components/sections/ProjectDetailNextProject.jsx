'use client';

import React from 'react';
import { TransitionLink } from '@/components';
import { RiArrowRightUpLine } from '@remixicon/react';
import { projects } from '@/data/projects';

const ProjectDetailNextProject = ({ project }) => {
  const projectIndex = projects.findIndex(p => p.slug === project?.slug);
  const nextProject = projectIndex !== -1 ? projects[(projectIndex + 1) % projects.length] : null;

  if (!nextProject) return null;

  return (
    <div className="pt-6 mt-2 border-t border-neutral-300 dark:border-neutral-700">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400">Next</span>
          <TransitionLink to={`/projects/${nextProject.slug}`} className="inline-block group">
            <h3 className="text-xl font-semibold text-neutral-900 transition-colors md:text-2xl dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400">
              {nextProject.client}
            </h3>
          </TransitionLink>
        </div>

        <TransitionLink
          to={`/projects/${nextProject.slug}`}
          className="flex items-center gap-1 text-sm text-neutral-600 transition-colors dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          View
          <RiArrowRightUpLine size={16} />
        </TransitionLink>
      </div>
    </div>
  );
};

export default ProjectDetailNextProject;
