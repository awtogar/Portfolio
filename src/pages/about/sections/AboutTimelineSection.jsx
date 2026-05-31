import { BaseSection } from '@/components';
import { experience } from '@/data/content';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutTimelineSection = () => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: 'top top',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        fastScrollEnd: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false,
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <BaseSection as="section" sectionClassName="overflow-x-hidden" containerClassName="">
      <div ref={wrapperRef} className="relative h-screen bg-neutral-950 text-neutral-100">
        <div ref={trackRef} className="flex h-full w-max flex-nowrap will-change-transform">
          {experience.map((exp, index) => {
            const panelNumber = String(index + 1).padStart(2, '0');
            const leadDescription = exp.description?.[0];
            const supportingNotes = exp.description?.slice(1, 3) ?? [];

            return (
              <div key={exp.id} className="h-screen w-screen shrink-0">
                {/* donot changes above! */}
                <div className="relative h-full w-full bg-neutral-950 px-6 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10">
                  <div className="flex h-full flex-col border border-neutral-800">
                    <div className="grid grid-cols-12 gap-4 border-b border-neutral-800 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500 sm:px-8 sm:text-xs">
                      <div className="col-span-4 text-neutral-300">[{panelNumber}]</div>
                      <div className="col-span-4 text-center">{exp.location}</div>
                      <div className="col-span-4 text-right tabular-nums text-neutral-300">
                        {exp.startDate} — {exp.endDate}
                      </div>
                    </div>

                    <div className="grid flex-1 grid-cols-12">
                      <div className="col-span-12 flex flex-col justify-between border-b border-neutral-800 px-5 py-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:px-8">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500 sm:text-xs">{exp.position}</span>
                          <h3 className="mt-4 text-[clamp(3rem,7vw,4rem)] font-[500] leading-[1.2] tracking-[-0.03em] text-neutral-50">{exp.company}</h3>
                          <p className="mt-5 max-w-lg text-sm leading-relaxed text-neutral-400 sm:text-base">{leadDescription}</p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {exp.competencies.map(item => (
                            <span key={item} className="border border-neutral-700 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-300 sm:text-xs">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="col-span-12 flex flex-col justify-between px-5 py-8 lg:col-span-7 lg:px-8">
                        <div className="space-y-6">
                          {exp.achievements.map((item, i) => (
                            <div key={i} className="flex gap-4 border-b border-neutral-800 pb-5 last:border-b-0 last:pb-0">
                              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-600 sm:text-xs">0{i + 1}</span>

                              <p className="max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">{item}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-10 border-t border-neutral-800 pt-5">
                          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500 sm:text-xs">
                            {exp.tools.map(tool => (
                              <span key={tool}>{tool}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* LAYOUT END */}
              </div>
            );
          })}
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutTimelineSection;
