import React from 'react';
import BaseSection from '../BaseSection';
import { work_experience } from '../../../data/data';
import { calculateDuration, formatDate } from '../../../utils/calculateDurations';

const AboutTimeline = () => {
  return (
    <BaseSection sectionClassName="section-padding-xy bg-neutral-100 dark:bg-neutral-100" containerID="experience">
      <div className="flex w-full flex-col gap-s400 text-primary">
        <div className="flex flex-col">
          <span className="text-primary/75">(Career)</span>
          <h2 className="text-h200">Experience</h2>
        </div>
        <p>A chronological overview of my career in design and web development.</p>
      </div>

      {/* timeline */}
      <div className="mt-s900 gap-y-s800 w-full space-y-s800 max-w-7xl mx-auto">
        {work_experience.map((experience, index) => (
          <article key={experience.id} className="w-full">
            <div className="">
              <div className="flex flex-col items-start">
                <div className="flex item-center justify-center">
                  <p className="text-[11px] lg:text-base-sm font-black leading-none text-primary mb-0.5">{formatDate(experience.startDate)}</p>
                </div>
                <p className="text-[11px] lg:text-base-sm font-black leading-none text-primary mb-4">{formatDate(experience.endDate)}</p>
                <div className="flex flex-col h-full items-center justify-center lg:mt-8">
                  <p className="text-[9px] lg:text-[10px] font-bold text-primary/40 uppercase tracking-tighter [writing-mode:vertical-rl] rotate-180">
                    {calculateDuration(experience.startDate, experience.endDate)}
                  </p>
                </div>
              </div>

              <div className="bg-primary w-full"></div>

              <div className="flex flex-col py-s600">
                <h1 className="text-primary tracking-tighter text-[32px] sm:text-[42px] lg:text-h300 font-black leading-[0.85] mb-s400">({experience.title})</h1>
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

                <div className="grid grid-cols-2 gap-s600 lg:gap-s700 pt-s500 lg:pt-s600 border-t border-primary/10">
                  <div>
                    <p className="text-[10px] lg:text-base-sm font-black uppercase tracking-[0.2em] text-primary/40 mb-s300 lg:mb-s400">Competencies</p>
                    <ul className="space-y-1">
                      {experience.skills.map((skill, i) => (
                        <li key={i} className="text-[12px] lg:text-base-sm tracking-tight text-primary">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[10px] lg:text-base-sm font-black uppercase tracking-[0.2em] text-primary/40 mb-s300 lg:mb-s400">Tools</p>
                    <ul className="space-y-1">
                      {experience.tools.map((tool, i) => (
                        <li key={i} className="text-[12px] lg:text-base-sm tracking-tight text-primary">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

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
      {/* end timeline */}

      <div className="mt-s600 pt-s600 ">
        <p className="text-primary text-base-lg uppercase tracking-[0.3em] block text-center">See the work</p>
      </div>
    </BaseSection>
  );
};

export default AboutTimeline;
