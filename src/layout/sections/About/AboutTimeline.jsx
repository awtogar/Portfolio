import React from 'react';
import BaseSection from '../BaseSection';
import { work_experience } from '../../../data/data';
import { RiArrowRightUpLine, RiBriefcaseLine, RiMapPinLine } from '@remixicon/react';

const AboutTimeline = () => {
  return (
    <BaseSection sectionClassName="section-padding-xy bg-neutral-100 dark:bg-neutral-100" containerID="experience">
      {/* Header */}
      <div className="flex w-full flex-col gap-s400 text-primary max-w-5xl">
        <div className="flex flex-col gap-s200">
          <span className="text-primary/50 text-base-sm font-mono uppercase tracking-wider">(Career)</span>
          <h2 className="text-h100 font-serif leading-[0.9] tracking-tight">Experience</h2>
        </div>
        <p className="text-primary/60 text-base-lg max-w-2xl leading-relaxed">
          A chronological overview of my career in design and frontend engineering, showcasing growth, achievements, and technical evolution.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="mt-s900 space-y-6 max-w-6xl mx-auto">
        {work_experience.map((experience, index) => (
          <article key={experience.id} className="bg-neutral-200 border border-neutral-900/10 overflow-hidden rounded-2xl">
            {/* Header Bar */}
            <div className="bg-primary px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 text-xs font-mono">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-neutral-100 text-lg font-medium tracking-tight">{experience.title}</h3>
              </div>
              <div className="flex items-center gap-4 text-sm text-neutral-400 justify-between">
                <span className="font-mono">
                  {experience.startDate}—{experience.endDate}
                </span>
                <span className={`px-2 py-1 text-xs font-mono ${experience.isCurrent ? 'bg-neutral-100 text-neutral-900' : 'border border-neutral-600 text-neutral-400'}`}>
                  {experience.isCurrent ? 'ACTIVE' : 'COMPLETED'}
                </span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Main Content */}
              <div className="lg:col-span-8 p-8 space-y-8">
                {/* Company & Location */}
                <div className="grid grid-cols-2 gap-6 pb-6 border-b border-neutral-900/10">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-400 mb-2 font-mono">Company</div>
                    <div className="text-sm text-neutral-900 font-medium">{experience.company}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-400 mb-2 font-mono">Location</div>
                    <div className="text-sm text-neutral-900 font-medium">{experience.location}</div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 mb-4 font-mono">Key Achievements</h4>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <span className="text-neutral-400 text-sm flex-shrink-0 mt-1">{String(i + 1).padStart(2, '0')}</span>
                        <p className="text-sm text-neutral-700 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 bg-neutral-200 p-8 space-y-8 border-t lg:border-t-0 lg:border-l border-neutral-900/10">
                {/* Skills */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 mb-4 font-mono">Technical Skills</h4>
                  <div className="space-y-2">
                    {experience.skills.map((skill, i) => (
                      <div key={i} className="px-3 py-2 bg-neutral-200 border border-neutral-900/10 text-xs text-neutral-900 font-medium">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 mb-4 font-mono">Tools & Software</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 bg-neutral-200 text-xs text-neutral-700 font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Decoration */}
      <div className="mt-s900 flex items-center justify-center gap-s300">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/20" />
        <span className="text-primary/30 text-sm font-mono">End of Timeline</span>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/20" />
      </div>
    </BaseSection>
  );
};

export default AboutTimeline;
