import React from 'react';
import BaseSection from '../BaseSection';
import { experience } from '../../../data/data';
import { calculateDuration, formatDate } from '../../../utils/calculateDurations';

const AboutTimeline = () => {
  return (
    <BaseSection sectionClassName="section-padding-xy" containerID="experience">
      <div className="flex flex-col gap-s500 mb-s700">
        <div className="flex flex-col gap-s200">
          <span className="hsAccent">(Career)</span>
          <h2 className="text-h200 uppercase leading-heading tracking-heading">
            Experience
          </h2>
        </div>
        <p className="text-base max-w-[48ch] text-primary/55 leading-body">
          I can help you create stunning visuals, seamless user experiences and be impactful based on your needs.
        </p>
      </div>

      <div className="w-full">
        {experience.map((exp, index) => (
          <article key={exp.id} className="w-full group">
            <div className="w-full h-[2px] bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-s700">
              <div
                className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-s300 py-s500 md:py-s700 md:pr-s600"
                style={{ borderRight: undefined }}
              >
                <div className="flex flex-col gap-s100">
                  <span className="font-mono tabular-nums text-base-xs tracking-label text-primary/25">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="hidden md:block text-base-xs tracking-label uppercase text-primary/40">
                    {exp.position}
                  </span>
                </div>

                <div className="flex flex-row md:flex-col gap-s100 md:mt-auto">
                  <span className="font-mono tabular-nums text-base-sm text-primary/55">
                    {formatDate(exp.startDate)}
                  </span>
                  <span className="font-mono text-base-sm text-primary/20">
                    —
                  </span>
                  <span className="font-mono tabular-nums text-base-sm text-primary/35">
                    {formatDate(exp.endDate)}
                  </span>
                </div>
              </div>

              <div className="py-s600 md:py-s700 flex flex-col gap-s600">
                <div className="flex flex-col gap-s200">
                  <h3 className="text-h400 leading-heading tracking-heading text-primary">
                    {exp.title}
                  </h3>
                  <span className="text-h600 leading-heading text-primary/45">
                    {exp.company}
                  </span>
                </div>

                <div className="flex flex-col gap-s300">
                  <p className="text-base-xs tracking-label uppercase text-primary/30 border-b border-border pb-s200">
                    Key Performance
                  </p>
                  <ul className="flex flex-col gap-s300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-s300">
                        <span className="shrink-0 mt-[9px] block w-[12px] h-[1px] bg-primary/30" />
                        <p className="text-base-sm text-primary/65 leading-body">
                          {achievement}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-s600 pt-s500 border-t border-border">
                  {[
                    { label: 'Competencies', items: exp.competencies },
                    { label: 'Tools', items: exp.tools },
                  ].map(({ label, items }) => (
                    <div key={label} className="flex flex-col gap-s200">
                      <p className="text-base-xs tracking-label uppercase text-primary/30">
                        {label}
                      </p>
                      <ul className="flex flex-col gap-s100">
                        {items.map((item, i) => (
                          <li key={i} className="text-base-sm text-primary/60 leading-body">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className="w-full h-px bg-border" />
      </div>
    </BaseSection>
  );
};

export default AboutTimeline;
