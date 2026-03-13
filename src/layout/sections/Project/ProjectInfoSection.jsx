import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../../../data/data';
import { RiGithubLine, RiExternalLinkLine } from '@remixicon/react';
import { useCursorHover } from '../../../hooks';
import ReactMarkdown from 'react-markdown';
import BaseSection from '../../sections/BaseSection';
import { RiArrowRightUpLine } from '@remixicon/react';

const markdownFiles = import.meta.glob('../../../content/projects/*.md', { query: '?raw', import: 'default' });

/* ─── Animation presets ──────────────────────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } };

/* ─── MetaRow — single field ─────────────────────────────────────────────── */
const MetaRow = ({ label, children }) => (
  <div className="flex flex-col gap-s100">
    <span className="hsAccent text-primary/30">{label}</span>
    <div className="text-primary">{children}</div>
  </div>
);

/* ─── Desktop metadata sidebar ───────────────────────────────────────────── */
const MetaDesktop = ({ project, index, total }) => {
  const githubRef = useCursorHover('arrow');
  const liveRef   = useCursorHover('arrow');

  return (
    <motion.aside
      className="hidden md:flex flex-col gap-s600 sticky top-24 self-start"
      {...fadeUp}
      transition={{ duration: 0.65, delay: 0.3, ease }}
    >
      <div className="flex items-center gap-s300 pb-s400 border-b border-primary/10">
        <span className="font-mono text-base-sm text-primary/30">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1 h-px bg-primary/10" />
        <span className="font-mono text-base-sm text-primary/20">
          {String(total).padStart(2, '0')}
        </span>
      </div>

      {project.role   && <MetaRow label="(Role)">{project.role}</MetaRow>}
      {project.client && <MetaRow label="(Client)">{project.client}</MetaRow>}
      {project.date   && (
        <MetaRow label="(Year)">
          {project.date.year}
        </MetaRow>
      )}

      {project.tags?.length > 0 && (
        <div className="flex flex-col gap-s200">
          <span className="hsAccent text-primary/30">(Technologies)</span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-base-sm text-primary/60 border border-primary/15 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex flex-col pt-s200 border-t border-primary/10">
          {project.githubUrl && (
            <a
              ref={githubRef}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-s300 border-b border-primary/10 text-primary/40 hover:text-primary transition-colors duration-200 group"
            >
              <span className="flex items-center gap-s200 text-base-sm">
                <RiGithubLine size={14} /> GitHub
              </span>
              <RiArrowRightUpLine size={13} className="opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
            </a>
          )}
          {project.liveUrl && (
            <a
              ref={liveRef}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-s300 border-b border-primary/10 text-primary/40 hover:text-primary transition-colors duration-200 group"
            >
              <span className="flex items-center gap-s200 text-base-sm">
                <RiExternalLinkLine size={14} /> Live site
              </span>
              <RiArrowRightUpLine size={13} className="opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
            </a>
          )}
        </div>
      )}
    </motion.aside>
  );
};

/* ─── Prose classes ──────────────────────────────────────────────────────── */
const proseClasses = [
  'prose prose-invert max-w-none',
  'prose-p:text-primary/70 prose-p:leading-relaxed',
  'prose-headings:text-primary prose-headings:font-normal',
  'prose-h1:text-h400',
  'prose-h2:text-h500 prose-h2:pb-s300 prose-h2:border-b prose-h2:border-primary/10',
  'prose-h3:text-h600',
  'prose-strong:text-primary prose-strong:font-normal',
  'prose-em:text-primary/55',
  'prose-a:text-brand-secondary prose-a:no-underline hover:prose-a:underline',
  'prose-blockquote:border-l-2 prose-blockquote:border-primary/20',
  'prose-blockquote:text-primary/50 prose-blockquote:not-italic',
  'prose-code:text-primary/80 prose-code:bg-primary/5',
  'prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded',
  'prose-code:before:content-none prose-code:after:content-none',
  'prose-pre:bg-neutral-200 prose-pre:border prose-pre:border-primary/10',
  'prose-li:text-primary/70 prose-li:font-normal',
  'prose-hr:border-primary/10',
].join(' ');

/* ─── Mobile metadata strip ──────────────────────────────────────────────── */
const MetaMobile = ({ project }) => (
  <motion.div
    className="flex flex-col gap-s500 md:hidden"
    {...fadeUp}
    transition={{ duration: 0.6, delay: 0.2, ease }}
  >
    <div className="flex items-start gap-s500 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-none">
      {project.role && (
        <div className="flex flex-col gap-s100 shrink-0">
          <span className="hsAccent text-primary/30">(Role)</span>
          <span className="text-primary text-base-sm whitespace-nowrap">{project.role}</span>
        </div>
      )}
      {project.client && (
        <>
          <div className="w-px self-stretch bg-primary/10 shrink-0" />
          <div className="flex flex-col gap-s100 shrink-0">
            <span className="hsAccent text-primary/30">(Client)</span>
            <span className="text-primary text-base-sm whitespace-nowrap">{project.client}</span>
          </div>
        </>
      )}
      {project.date && (
        <>
          <div className="w-px self-stretch bg-primary/10 shrink-0" />
          <div className="flex flex-col gap-s100 shrink-0">
            <span className="hsAccent text-primary/30">(Year)</span>
            <span className="text-primary text-base-sm whitespace-nowrap">
              {project.date.year}
            </span>
          </div>
        </>
      )}
    </div>

    {project.tags?.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 text-base-sm text-primary/60 border border-primary/15 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    )}

    {(project.githubUrl || project.liveUrl) && (
      <div className="flex flex-wrap gap-s300">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-s200 px-4 py-2 border border-primary/15 rounded-full text-primary/50 hover:text-primary hover:border-primary/30 transition-colors duration-200 text-base-sm"
          >
            <RiGithubLine size={13} /> GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-s200 px-4 py-2 border border-primary/15 rounded-full text-primary/50 hover:text-primary hover:border-primary/30 transition-colors duration-200 text-base-sm"
          >
            <RiExternalLinkLine size={13} /> Live site
          </a>
        )}
      </div>
    )}

    <div className="w-full h-px bg-primary/10" />
  </motion.div>
);

const ProjectInfoSection = () => {
  const { slug } = useParams();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];

  const [mdContent, setMdContent] = useState('');

  useEffect(() => {
    const load = async () => {
      const key = `../../../content/projects/${slug}.md`;
      setMdContent(markdownFiles[key] ? await markdownFiles[key]() : '');
    };
    load();
  }, [slug]);

  if (!project) return null;

  return (
    <BaseSection
      sectionClassName="section-padding-x pt-s600 pb-s900"
      containerClassName="max-w-full md:max-w-[768px] lg:max-w-[1080px] xl:max-w-[1440px]"
    >
      <div className="flex flex-col gap-s600 md:gap-s700">
        <motion.div
          className="flex flex-col gap-s300"
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <span className="hsAccent">({project.category})</span>
          <h1 className="text-h100">{project.title}</h1>
          {project.subtitle && (
            <p className="text-h500 text-primary/50 max-w-2xl">{project.subtitle}</p>
          )}
        </motion.div>

        <div className="w-full h-px bg-primary/10" />

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-s700 lg:gap-s900 items-start">
          <MetaDesktop project={project} index={projectIndex} total={projects.length} />

          <motion.div
            className="min-w-0"
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.35, ease }}
          >
            <div className={proseClasses}>
              {mdContent
                ? <ReactMarkdown>{mdContent}</ReactMarkdown>
                : <p>{project.overview || project.description}</p>
              }
            </div>
          </motion.div>
        </div>

        <MetaMobile project={project} />
      </div>
    </BaseSection>
  );
};

export default ProjectInfoSection;
