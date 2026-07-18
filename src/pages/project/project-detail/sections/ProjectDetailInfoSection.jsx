import React from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';

const ProjectDetailInfoSection = ({ project }) => {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-8 md:gap-x-8 md:gap-y-10 lg:grid-cols-12 lg:gap-y-0">
      <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-3">
        <div className="overflow-hidden">
          <p className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-200 uppercase font-medium tracking-wider">Year</p>
        </div>
        <div className="overflow-hidden">
          <p className="text-[clamp(48px,3.5vw,96px)] text-neutral-200 font-semibold tracking-tight leading-[0.8]">{project.year}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:col-span-1 lg:col-span-3">
        <div className="overflow-hidden">
          <p className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-200 uppercase font-medium tracking-wider">Services</p>
        </div>
        <ul className="flex gap-1.5 2xl:gap-2 flex-wrap">
          {project.tags?.map((tag, i) => (
            <li
              key={i}
              className="text-[10px] text-neutral-200 lg:text-[clamp(12px,0.7vw,16px)] uppercase tracking-[1.1] bg-neutral-100/10 px-2 3xl:px-3 pt-2 pb-1.5 rounded-md whitespace-nowrap"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-6">
        <div className="overflow-hidden">
          <p className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-400 uppercase font-medium tracking-wider">Summary</p>
        </div>
        <div className="overflow-hidden">
          <p className="text-[clamp(16px,1.3vw,30px)] text-neutral-400 font-medium leading-[1.3]">{project.description}</p>
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="overflow-hidden mt-2">
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-400 uppercase font-medium tracking-wider flex items-center gap-1 hover:underline hover:text-neutral-100 transition-all duration-300 w-fit"
            >
              Visit site <RiArrowRightUpLine size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailInfoSection;
