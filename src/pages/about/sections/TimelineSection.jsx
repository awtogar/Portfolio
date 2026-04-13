'use client';

import { useRef } from 'react';
import { BaseSection } from '@/components';
import { experience } from '@/data/content';
import { useFadeUp } from '@/hooks';

const ExperienceEntry = ({ exp, index, isLast }) => {
  const rowRef = useRef(null);
  const rightRef = useRef(null);

  useFadeUp(rightRef, {
    y: 32,
    duration: 0.9,
    config: {
      scrollTrigger: {
        trigger: rowRef,
        start: 'top 82%',
        once: false,
      },
    },
  });

  return (
    <article ref={rowRef} className="w-full group">
      <div className="w-full h-px bg-border" />
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-s700">
        <div className="hidden md:flex flex-col py-s700 pr-s600 border-r border-border relative">
          {isLast && <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-neutral-100/50 to-neutral-100 pointer-events-none" />}
          <span className="font-mono text-base-xs tracking-label text-primary/25 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
          <div className="flex flex-col gap-s100 mt-auto">
            <span className="font-mono text-base-sm text-primary/55 tabular-nums">{exp.startDate}</span>
            <span className="font-mono text-base-sm text-primary/20">—</span>
            <span className="font-mono text-base-sm text-primary/35 tabular-nums">{exp.endDate}</span>
          </div>
        </div>

        <div ref={rightRef} className="py-s600 md:py-s700 flex flex-col gap-s600">
          <div className="flex flex-col gap-s100">
            <span className="text-base-xs tracking-label uppercase text-primary/30">{exp.position}</span>
            <h3 className="text-h400 leading-heading tracking-heading text-primary">{exp.title}</h3>
            <span className="text-h600 leading-heading text-primary/45">{exp.company}</span>
          </div>

          <div className="flex flex-col gap-s300">
            <p className="text-base-xs tracking-label uppercase text-primary/30 border-b border-border pb-s200">Key Performance</p>
            <ul className="flex flex-col gap-s300">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-s300">
                  <span className="shrink-0 mt-[10px] block w-[12px] h-px bg-primary/30" />
                  <p className="text-base-sm text-primary/65 leading-body">{achievement}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-s500 md:gap-s600 pt-s500 border-t border-border">
            {[
              { label: 'Competencies', items: exp.competencies },
              { label: 'Tools', items: exp.tools },
            ].map(({ label, items }) => (
              <div key={label} className="flex flex-col gap-s200">
                <p className="text-base-xs tracking-label uppercase text-primary/30">{label}</p>
                <ul className="flex flex-col gap-s100">
                  {items.map((item, i) => (
                    <li key={i} className="text-base-xs tracking-label text-primary/60">
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
  );
};

const TimelineSection = () => {
  return (
    <BaseSection sectionClassName="section-padding-xy" containerID="experience">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[1fr_2fr] gap-s700 lg:gap-s900 items-start">
        <div className="flex flex-col gap-s500 lg:sticky lg:top-[25svh]">
          <div className="flex flex-col gap-s200">
            <span className="hsAccent">(Career)</span>
            <h2 className="text-h200 uppercase leading-heading tracking-heading">Experience</h2>
          </div>
          <p className="text-base max-w-[48ch] text-primary/55 leading-body">
            I can help you create stunning visuals, seamless user experiences and be impactful based on your needs.
          </p>
        </div>
        <div className="w-full">
          {experience.map((exp, index) => (
            <ExperienceEntry key={exp.id} exp={exp} index={index} isLast={index === experience.length - 1} />
          ))}
          <div className="w-full h-px bg-border" />
        </div>
      </div>
    </BaseSection>
  );
};

export default TimelineSection;
