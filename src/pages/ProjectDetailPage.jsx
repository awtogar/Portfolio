import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { BaseSection } from '../layout';
import { projects } from '../data/data';
import { ScrollAnimatedImg, CreativeButton, TransitionLink } from '../components';
import { RiArrowLeftLine, RiArrowRightUpLine } from '@remixicon/react';
import { useCursorHover } from '../hooks/useCursorEffect';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const nextBtnRef = useCursorHover('arrow');

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // 404 fallback
  if (!project) {
    return (
      <BaseSection>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-s500">
          <h1 className="text-h200 text-primary">Project not found</h1>
          <p className="text-primary/50">The project you're looking for doesn't exist.</p>
          <TransitionLink
            to="/projects"
            className="px-6 py-3 rounded-full bg-primary text-secondary text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Back to Projects
          </TransitionLink>
        </div>
      </BaseSection>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-6 left-4 md:left-12 lg:left-24 z-20"
        >
        </motion.div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden">
          <ScrollAnimatedImg
            src={project.image}
            alt={project.title}
            containerClassName="w-full aspect-[16/9] md:aspect-[21/9]"
            imageClassName="object-cover w-full h-full"
            scrollRange={['0%', '8%']}
            offset={['start start', 'end start']}
          />
        </div>
      </section>

      {/* Project Info Section */}
      <BaseSection containerClassName="max-w-full md:max-w-[768px] lg:max-w-[1080px] xl:max-w-[1440px]">
        <div className="flex flex-col gap-s700">
          {/* Title & Subtitle */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-s300"
          >
            <span className="hsAccent">({project.category})</span>
            <h1 className="text-h100">{project.title}</h1>
            <p className="text-h500 text-primary/60 max-w-2xl">{project.subtitle}</p>
          </motion.div>

          {/* Metadata + Overview Grid */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-s700 md:gap-s900 border-t border-primary/10 pt-s700"
          >
            {/* Left — Metadata */}
            <div className="flex flex-col gap-s600">
              {/* Role */}
              <div className="space-y-s200">
                <span className="text-xs uppercase tracking-widest text-primary/40 font-medium">Role</span>
                <p className="text-primary font-medium">{project.role}</p>
              </div>

              {/* Client */}
              <div className="space-y-s200">
                <span className="text-xs uppercase tracking-widest text-primary/40 font-medium">Client</span>
                <p className="text-primary font-medium">{project.client}</p>
              </div>

              {/* Date */}
              {project.date && (
                <div className="space-y-s200">
                  <span className="text-xs uppercase tracking-widest text-primary/40 font-medium">Date</span>
                  <p className="text-primary font-medium">{project.date.month} {project.date.year}</p>
                </div>
              )}

              {/* Tags */}
              {project.tags && (
                <div className="space-y-s200">
                  <span className="text-xs uppercase tracking-widest text-primary/40 font-medium">Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium text-primary/70 border border-primary/15 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — Overview */}
            <div className="space-y-s500">
              <p className="text-primary/70 text-base-lg leading-[170%]">
                {project.overview || project.description}
              </p>
            </div>
          </motion.div>
        </div>
      </BaseSection>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <BaseSection
          sectionClassName="section-padding-x py-s500"
          containerClassName="max-w-full md:max-w-[768px] lg:max-w-[1080px] xl:max-w-[1440px]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-s500"
          >
            <span className="hsAccent">(gallery)</span>

            <div className="flex flex-col gap-s500 md:gap-s600">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden rounded-2xl"
                >
                  <ScrollAnimatedImg
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    containerClassName="w-full aspect-[16/10]"
                    imageClassName="object-cover w-full h-full rounded-2xl"
                    scrollRange={['0%', '10%']}
                    offset={['start end', 'end start']}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </BaseSection>
      )}

      {/* Next Project Section */}
      {nextProject && (
        <section className="border-t border-primary/10">
          <BaseSection containerClassName="max-w-full md:max-w-[768px] lg:max-w-[1080px] xl:max-w-[1440px]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-s500"
              >
                <div className="flex flex-col gap-s300">
                  <span className="text-xs uppercase tracking-widest text-primary/40 font-medium">
                    Next Project
                  </span>
                  <h2 className="text-h200 text-primary group-hover:opacity-60 transition-opacity duration-300">
                    {nextProject.title}
                  </h2>
                  <p className="text-primary/50 max-w-lg">
                    {nextProject.subtitle}
                  </p>
                </div>
            <TransitionLink
              to={`/projects/${nextProject.slug}`}
              className="group block">
                  <CreativeButton ref={nextBtnRef} variant="outline">
 <RiArrowRightUpLine
                    size={24}
                    className="text-primary group-hover:text-secondary transition-colors duration-400"
                  />
                  </CreativeButton>
            
            </TransitionLink>

              </motion.div>
          </BaseSection>
        </section>
        
      )}
    </div>
  );
};

export default ProjectDetailPage;
