'use client';

import { use } from 'react';
import { projects } from '@/data/projects';
import NotFoundPage from '@/components/common/NotFoundPage';
import {
  ProjectDetailHero,
  ProjectDetailInfo,
  ProjectMedia,
} from '@/components/sections';

export default function ProjectDetailPage({ params }) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);

  if (!project) return <NotFoundPage />;

  return (
    <section className="px-2 lg:px-12 pt-[200px] md:pt-[clamp(128px,12vw,500px)]">
      <div className="flex flex-col items-center gap-[clamp(64px,6vw,200px)] px-3 lg:px-6 pt-[clamp(64px,10vw,128px)] pb-3 lg:pb-8 rounded-2xl lg:rounded-[20px] bg-surface-invert transition-colors duration-smooth">
        <ProjectDetailHero project={project} />
        <div className="flex flex-col w-full gap-12 lg:gap-16 2xl:gap-[clamp(64px,5vw,150px)] px-4 lg:px-6 pt-5 lg:pt-8 pb-4 lg:pb-5 rounded-lg lg:rounded-xl bg-surface-invert-raised transition-colors duration-smooth">
          <ProjectDetailInfo project={project} />
          <ProjectMedia images={project.gallery} altPrefix={project.client || 'Project'} />
        </div>
      </div>
    </section>
  );
}
