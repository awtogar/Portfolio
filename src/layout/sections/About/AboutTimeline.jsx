import React from 'react';
import BaseSection from '../BaseSection';
import { work_experience } from '../../../data/data';

const AboutTimeline = () => {
  return (
    <BaseSection sectionClassName="section-padding-xy bg-neutral-100 dark:bg-neutral-100" containerID="experience">
      {/* Header - Mobile Friendly */}
      <div className="w-full max-w-7xl mb-s700 lg:mb-s900">
        <div className="flex items-center gap-s300 mb-s400">
          <div className="h-[2px] w-12 bg-primary"></div>
          <span className="text-primary/30 text-base-sm font-mono uppercase tracking-[0.25em]">Career</span>
        </div>
        <h2 className="text-h300 sm:text-h200 font-sans font-black leading-[0.85] tracking-tighter mb-s400">Experience</h2>
        <p className="text-primary/50 text-base-sm max-w-full lg:max-w-xl leading-[1.6]">A chronological overview of my career in design and frontend engineering.</p>
      </div>

      {/* Timeline - Swiss Mobile Layout */}
      <div className="w-full space-y-s800 max-w-7xl mx-auto">
        {work_experience.map((experience, index) => (
          <article key={experience.id} className="w-full">
            {/* Swiss Grid Layout */}
            <div className="grid grid-cols-[60px_4px_1fr] lg:grid-cols-[80px_4px_1fr] gap-s400 lg:gap-s500">
              {/* Date Column */}
              <div className="flex flex-col items-end pt-1">
                <p className="text-[11px] lg:text-base-sm font-black leading-none text-primary mb-0.5">{experience.startDate}</p>
                <p className="text-[11px] lg:text-base-sm font-black leading-none text-primary mb-4">{experience.endDate}</p>
                <div className="mt-6 lg:mt-8">
                  <p className="text-[9px] lg:text-[10px] font-bold text-primary/40 uppercase tracking-tighter [writing-mode:vertical-rl] rotate-180">
                    {/* Calculate duration if needed */}
                    Position {String(index + 1).padStart(2, '0')}
                  </p>
                </div>
              </div>

              {/* Timeline Bar */}
              <div className="bg-primary w-full"></div>

              {/* Content Column */}
              <div className="flex flex-col pb-s600">
                {/* Type Badge */}
                <div className="inline-block bg-primary text-neutral-100 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 mb-s400 self-start">
                  {experience.type || 'Full-time'}
                </div>

                {/* Title */}
                <h1 className="text-primary tracking-tighter text-[32px] sm:text-[42px] lg:text-h300 font-black leading-[0.85] mb-s400">
                  {experience.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i < experience.title.split(' ').length - 1 && <br className="hidden sm:block" />}
                      {i < experience.title.split(' ').length - 1 && <span className="sm:hidden"> </span>}
                    </React.Fragment>
                  ))}
                </h1>

                {/* Company */}
                <div className="flex items-baseline gap-2 mb-s600 lg:mb-s700">
                  <h2 className="text-primary text-lg sm:text-xl lg:text-h500 font-bold tracking-tight">{experience.company}</h2>
                </div>

                <div className="mb-s700 lg:mb-s800">
                  <p className="text-[10px] lg:text-base-sm font-black uppercase tracking-[0.2em] text-primary/40 mb-s400 lg:mb-s500 border-b border-primary/10 pb-2">
                    Achievements
                  </p>
                  <ul className="space-y-s400 lg:space-y-s500">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="relative pl-0">
                        <p className="text-[13px] lg:text-base-sm text-primary/70 leading-snug">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills & Tools Grid */}
                <div className="grid grid-cols-2 gap-s600 lg:gap-s700 pt-s500 lg:pt-s600 border-t border-primary/10">
                  {/* Skills */}
                  <div>
                    <p className="text-[10px] lg:text-base-sm font-black uppercase tracking-[0.2em] text-primary/40 mb-s300 lg:mb-s400">Competencies</p>
                    <ul className="space-y-1">
                      {experience.skills.slice(0, 4).map((skill, i) => (
                        <li key={i} className="text-[12px] lg:text-base-sm tracking-tight text-primary">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <p className="text-[10px] lg:text-base-sm font-black uppercase tracking-[0.2em] text-primary/40 mb-s300 lg:mb-s400">Tools</p>
                    <ul className="space-y-1">
                      {experience.tools.slice(0, 4).map((tool, i) => (
                        <li key={i} className="text-[12px] lg:text-base-sm tracking-tight text-primary">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer - Location & Index */}
                <div className="mt-s700 lg:mt-s800 flex justify-between items-end">
                  <div className="flex flex-col">
                    <p className="text-[9px] lg:text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-[12px] lg:text-base-sm font-bold uppercase tracking-tighter text-primary">{experience.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[48px] lg:text-[64px] font-black leading-none tracking-tighter text-primary/10">{String(index + 1).padStart(2, '0')}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Mark */}
      <div className="mt-s900 pt-s700 border-t border-primary/10">
        <span className="text-primary/15 text-base-sm font-mono uppercase tracking-[0.3em] block text-center">—</span>
      </div>
    </BaseSection>
  );
};

export default AboutTimeline;
