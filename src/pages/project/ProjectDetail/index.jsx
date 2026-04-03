import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../data/data';
import { TransitionLink } from '../../../components';
import { RiArrowLeftLine } from '@remixicon/react';
import BaseSection from '../../../components/commons/BaseSection';
import { ProjectHeroSection, ProjectInfoSection, ProjectGallerySection, NextProjectSection } from './sections';

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

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <NotFound />;

  return (
    <div>
      <ProjectHeroSection />
      <ProjectInfoSection />
      <ProjectGallerySection />
      <NextProjectSection />
    </div>
  );
};

export default ProjectDetailPage;
