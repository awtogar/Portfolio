'use client';

import { use } from 'react';
import { projects } from '@/data/projects';
import { BaseSection, TransitionLink } from '@/components';
import { RiArrowLeftLine } from '@remixicon/react';
import {
  ProjectDetailHeroSection,
  ProjectDetailInfoSection,
  ProjectMediaSection,
} from '@/components/sections';

const NotFound = () => (
  <BaseSection sectionClassName="section-padding-xy">
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-s500 text-center">
      <h1 className="text-h200 leading-heading tracking-heading">Project not found</h1>
      <p className="text-base text-primary/45">The project you're looking for doesn't exist.</p>
      <TransitionLink to="/projects" className="flex items-center gap-s200 transition-opacity duration-300 hover:opacity-60 text-base-sm text-primary/50">
        <RiArrowLeftLine size={14} />
        Back to Projects
      </TransitionLink>
    </div>
  </BaseSection>
);

export default function ProjectDetailPage({ params }) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);

  if (!project) return <NotFound />;

  return (
    <section className="px-2 lg:px-12 pt-[200px] md:pt-[clamp(128px,12vw,500px)]">
      <div className="flex flex-col items-center gap-[clamp(64px,6vw,200px)] px-3 lg:px-6 pt-[clamp(64px,10vw,128px)] pb-3 lg:pb-8 rounded-2xl lg:rounded-[20px] bg-surface-invert transition-colors duration-smooth">
        <ProjectDetailHeroSection project={project} />
        <div className="flex flex-col w-full gap-12 lg:gap-16 2xl:gap-[clamp(64px,5vw,150px)] px-4 lg:px-6 pt-5 lg:pt-8 pb-4 lg:pb-5 rounded-lg lg:rounded-xl bg-surface-invert-raised transition-colors duration-smooth">
          <ProjectDetailInfoSection project={project} />
          <ProjectMediaSection images={project.gallery} altPrefix={project.client || 'Project'} />
        </div>
      </div>
    </section>
  );
}
