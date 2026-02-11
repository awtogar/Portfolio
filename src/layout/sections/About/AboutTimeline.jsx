// AboutTimeline.jsx
import React from 'react';
import BaseSection from '../BaseSection';
import { experience } from '../../../data/data';
import { calculateDuration, formatDate } from '../../../utils/calculateDurations';

const AboutTimeline = () => {
  return (
    <BaseSection sectionClassName="section-padding-xy bg-neutral-100 dark:bg-neutral-100" containerID="experience">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex w-full flex-col gap-s400 text-primary max-w-3xl">
          <div className="flex flex-col">
            <span className="text-primary/75 uppercase">(Career)</span>
            <h2 className="text-h200">EXPERIENCES</h2>
          </div>
          <p>I can help you create stunning visuals, seamless user experiences and be impactful based on your needs.</p>
        </div>

        {/* Timeline */}
        <div className="mt-s900 gap-y-s800 w-full space-y-s800">
          {experience.map((experience, index) => (
            <article key={experience.id} className="w-full pt-s600 pb-s900 border-t border-primary/10">
              <div className="flex gap-x-s200 pb-s200">
                {/* Metadata container */}
                <div className="relative flex flex-col items-center gap-4">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-10 h-10 rounded-full bg-primary/5 animate-pulse" />
                    <div className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <span className="text-[11px] font-medium text-secondary">{index + 1}</span>
                    </div>
                  </div>

                  {/* Vertical Connector */}
                  <div className="flex-1 relative w-px bg-primary/20">
                    <div className=" bg-gradient-to-b from-primary/40 to-transparent" />
                  </div>

                  {/* Date Chip */}
                  <div className="flex flex-col gap-2">
                    <div className="justify-center items-center flex px-4 py-1.5 rounded-full bg-primary text-secondary text-[11px] font-medium tracking-wide whitespace-nowrap">
                      {formatDate(experience.startDate)}
                    </div>
                    <div className="w-full h-px bg-primary/20" />
                    <div className="justify-center items-center flex px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-medium tracking-wide whitespace-nowrap">
                      {formatDate(experience.endDate)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 min-w-0">
                  {/* Job Title - Largest */}
                  <h3 className="text-primary text-h200 font-medium leading-tight mb-s300">{experience.title}</h3>

                  {/* Company - Secondary */}
                  <h4 className="text-primary text-h400 font-normal mb-s600">{experience.company}</h4>

                  {/* Achievements Section */}
                  <div className="mb-s700">
                    {/* Label smaller than content - Swiss style */}
                    <div className="inline-flex items-center gap-s400 mb-s400 border-b border-primary/10 pb-1">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-primary/40 font-medium">Key Achievements</p>
                    </div>

                    <ul className="space-y-s400">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-s300 group/item">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/30 mt-[7px]" />
                          <p className="text-primary/80">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Grid - Labels smaller than list items */}
                  <div className="gap-s700 pt-s500 border-t border-primary/10">
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-primary/40 font-medium mb-s300">Competencies</p>
                      <ul className="space-y-[6px]">
                        {experience.competencies.map((competency, i) => (
                          <li key={i} className="text-base-sm font-normal text-primary">
                            {competency}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-primary/40 font-medium mb-s300">Tools</p>
                      <ul className="space-y-[6px]">
                        {experience.tools.map((tool, i) => (
                          <li key={i} className="text-base-sm font-normal text-primary">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden flex items-center justify-between pt-s400 border-t border-primary/5 text-base-sm">
                <span className="text-primary/50">Position</span>
                <span className="text-primary">{experience.position}</span>
              </div>
            </article>
          ))}
        </div>
        {/* End timeline */}
      </div>
    </BaseSection>
  );
};

export default AboutTimeline;
