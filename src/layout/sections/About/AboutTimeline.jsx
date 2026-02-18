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
        <div className="mt-s900 w-full">
          {experience.map((exp, index) => (
            <article key={exp.id} className="w-full border-t border-primary/10 group">
              {/* ── Row wrapper: stacks on mobile, side-by-side on md+ ── */}
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-s700">
                <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-s300 py-s500 md:py-s700 md:pr-s600 md:border-r md:border-primary/10">
                  <div className="flex gap-s500">
                    <span className="font-mono text-base-sm tracking-[0.2em] text-primary/30 tabular-nums">{String(index + 1).padStart(2, '0')}</span>

                    {/* Position badge */}
                    <span className="text-base-sm tracking-[0.18em] text-primary/50 hidden md:inline-flex">{exp.position}</span>
                  </div>

                  {/* Date range — stacked on md, inline on mobile */}
                  <div className="flex flex-row md:flex-col gap-s200 md:gap-0 md:mt-auto">
                    <span className="font-mono text-base-sm tabular-nums tracking-wide text-primary/60">{formatDate(exp.startDate)}</span>
                    <span className="font-mono text-base-sm text-primary/25 hidden md:block leading-none my-[3px]">|</span>
                    <span className="font-mono text-base-sm text-primary/25 md:hidden leading-none my-[3px]">to</span>
                    <span className="font-mono text-base-sm tabular-nums tracking-wide text-primary/40">{formatDate(exp.endDate)}</span>
                  </div>
                </div>

                <div className="py-s600 md:py-s700 flex flex-col gap-s600">
                  {/* Title & Company */}
                  <div className="flex flex-col gap-s100 md:gap-s500">
                    <h3 className="text-primary text-h400 md:leading-[85%]">{exp.title}</h3>
                    <span className="text-primary/50 text-base-lg md:text-h600 tracking-tight">{exp.company}</span>
                  </div>

                  {/* Achievements */}
                  <div className="flex flex-col gap-s300">
                    <p className="text-base-sm uppercase  text-primary/30 md:font-medium border-b border-primary/8 pb-s200">Key Performance</p>
                    <ul className="flex flex-col gap-s300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-s300">
                          {/* Swiss bullet: a short horizontal rule, not a dot */}
                          <span className="flex-shrink-0 w-3 h-px bg-primary/30 mt-[9px]" />
                          <p className="text-primary/70 text-base-sm leading-relaxed">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Competencies & Tools — 2-col grid */}
                  <div className="grid grid-cols-2 gap-s600 pt-s500 border-t border-primary/8">
                    <div className="flex flex-col gap-s200">
                      <p className="text-base-sm uppercase text-primary/30 md:font-medium">Competencies</p>
                      <ul className="flex flex-col gap-[5px]">
                        {exp.competencies.map((c, i) => (
                          <li key={i} className="text-[12px] text-primary/70 font-normal leading-snug">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-s200">
                      <p className="text-base-sm uppercase tracking-[0.2em] text-primary/30 md:font-medium">Tools</p>
                      <ul className="flex flex-col gap-[5px]">
                        {exp.tools.map((t, i) => (
                          <li key={i} className="text-[12px] text-primary/70 font-normal leading-snug">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
