import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/data';
import { TransitionLink } from '../components';
import { RiArrowLeftLine } from '@remixicon/react';
import { 
  BaseSection,
  ProjectHeroSection, 
  ProjectInfoSection,
  ProjectGallerySection, 
  NextProjectSection 
} from '../layout';

const NotFound = () => (
  <BaseSection>
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-s500">
      <h1 className="text-h200 text-primary">Project not found</h1>
      <p className="text-primary/50">The project you're looking for doesn't exist.</p>
      <TransitionLink
        to="/projects"
        className="flex items-center gap-s200 text-primary/50 hover:text-primary transition-colors duration-200 text-base-sm"
      >
        <RiArrowLeftLine size={14} /> Back to Projects
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