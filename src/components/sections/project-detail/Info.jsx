'use client';

import React from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';

const ProjectDetailInfo = ({ project }) => {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-8 md:gap-x-8 md:gap-y-10 lg:grid-cols-12 lg:gap-y-0">
      <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-3">
        <div className="overflow-hidden">
          <p className="text-xs font-medium tracking-wider uppercase text-neutral-400 lg:text-[clamp(14px,0.8vw,18px)]">Year</p>
        </div>
        <div className="overflow-hidden">
          <p className="text-[clamp(48px,3.5vw,96px)] font-semibold leading-[0.8] tracking-tight text-neutral-200">{project.year}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:col-span-1 lg:col-span-3">
        <div className="overflow-hidden">
          <p className="text-xs font-medium tracking-wider uppercase text-neutral-400 lg:text-[clamp(14px,0.8vw,18px)]">Services</p>
        </div>
        <ul className="flex flex-wrap gap-1.5 2xl:gap-2">
          {project.tags?.map((tag, i) => (
            <li
              key={i}
              className="px-2 pt-2 pb-1.5 text-[10px] tracking-[1.1] uppercase whitespace-nowrap bg-neutral-100/10 text-neutral-200 rounded-md lg:text-[clamp(12px,0.7vw,16px)] 3xl:px-3"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-6">
        <div className="overflow-hidden">
          <p className="text-xs font-medium tracking-wider uppercase text-neutral-400 lg:text-[clamp(14px,0.8vw,18px)]">Summary</p>
        </div>
        <div className="overflow-hidden">
          <p className="text-[clamp(16px,1.3vw,30px)] font-medium leading-[1.3] text-neutral-100">{project.description}</p>
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="overflow-hidden mt-2">
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-fit gap-1 text-xs font-medium tracking-wider uppercase text-neutral-200 transition-all duration-300 lg:text-[clamp(14px,0.8vw,18px)] hover:underline hover:text-neutral-100"
            >
              Visit site <RiArrowRightUpLine size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailInfo;
