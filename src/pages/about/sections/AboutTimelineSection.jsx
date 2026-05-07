import { useRef } from 'react';
import { BaseSection, TimelineSVGLine } from '@/components';
import { experience } from '@/data/content';
import { useFadeUp } from '@/hooks';

const ExperienceEntry = ({ exp }) => {
  const ref = useRef(null);

  useFadeUp(ref, {
    y: 24,
    duration: 0.7,
    config: {
      scrollTrigger: {
        trigger: ref,
        start: 'top 88%',
        once: true,
      },
    },
  });

  return (
    <article ref={ref} className="relative pl-[28px] md:pl-[48px] h-svh flex items-center">
      <div className="flex flex-col gap-s400 w-full border-b border-border pb-s500">
        {/* META */}
        <div className="flex items-baseline justify-between gap-s300 flex-wrap">
          <div className="flex flex-col gap-[2px]">
            <span className="text-base-xs tracking-label uppercase text-primary/30">{exp.position}</span>
            <h3 className="text-h300 leading-heading text-primary">{exp.company}</h3>
            <span className="text-base-sm text-primary/40">{exp.title}</span>
          </div>
          <span className="font-mono text-base-xs text-primary/30 tabular-nums">
            {exp.startDate} — {exp.endDate}
          </span>
        </div>

        {/* ACHIEVEMENTS */}
        <ul className="flex flex-col gap-s200">
          {exp.achievements.map((item, i) => (
            <li key={i} className="text-base-sm text-primary/60 leading-body">
              — {item}
            </li>
          ))}
        </ul>

        {/* TAGS */}
        <div className="flex flex-col gap-s300 pt-s300 border-t border-border">
          <div className="flex flex-wrap gap-s100">
            {exp.competencies.map((item, i) => (
              <span key={i} className="text-base-xs text-primary/40 border border-border px-s200 py-[2px]">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-s100">
            {exp.tools.map((item, i) => (
              <span key={i} className="text-base-xs text-primary/30">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const AboutTimelineSection = () => {
  const listRef = useRef(null);

  return (
    <BaseSection containerID="experience" sectionClassName="" containerClassName="top-0">
      {/* Outer: flex row, full height of right content */}
      <div className="flex items-start">
        <div className="hidden lg:flex sticky top-0 h-svh w-[38%] shrink-0 flex-col justify-center gap-s400 section-padding-xy pr-s900">
          <span className="hsAccent">(Career)</span>
          <h2 className="text-h200 uppercase tracking-heading">Experience</h2>
          <p className="text-base-sm text-primary/50 max-w-[32ch]">Selected journey and professional experience across design and development.</p>
        </div>

        {/* RIGHT — natural scroll, each entry is 100vh */}
        {/* SVG progress line */}

        <div ref={listRef} className="relative flex-row md:flex-1 section-padding-xy pl-0">
          <div className="absolute left-0 top-[18rem] bottom-0 w-[1px] pointer-events-none">
            <TimelineSVGLine containerRef={listRef} />
          </div>
          <div className="flex flex-col gap-s400 lg:hidden h-svh justify-center">
            <span className="hsAccent">(Career)</span>
            <h2 className="text-h200 uppercase tracking-heading">Experience</h2>
            <p className="text-base-sm text-primary/50 max-w-[40ch]">Selected journey and professional experience across design and development.</p>
          </div>

          {experience.map(exp => (
            <ExperienceEntry key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutTimelineSection;
