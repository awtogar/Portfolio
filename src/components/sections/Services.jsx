import React from 'react';
import { services } from '@/data/content';
import { BaseSection, CardParallax, TextReveal } from '@/components';

const Services = () => {
  return (
    <BaseSection sectionID="services">
      {/* when cursor hit this element. they color should be not the same as background */}
      <div data-cursor-idle-fill="secondary" className="flex flex-col gap-16 px-4 pt-16 pb-4 bg-surface-invert rounded-3xl inverted lg:gap-28 lg:pt-24 lg:rounded-[20px]">
        <div className="flex flex-col items-end md:grid md:grid-cols-12 md:gap-8 md:px-6">
          <div className="flex flex-col mb-2 md:col-span-5 md:mb-0 md:pt-1 lg:col-span-4">
            <TextReveal as="p" className="text-h500 font-[450] leading-body tracking-body text-justify text-on-invert-secondary">
              {'{so}'}
            </TextReveal>
            <h2 className="heading-display text-h200 font-serif text-on-invert-secondary">
              <div className="block overflow-clip relative">
                <TextReveal as="h2" className="relative block">
                  What I do?
                </TextReveal>
              </div>
            </h2>
          </div>

          <TextReveal as="p" startDelay={0.15} className="text-h500 font-[450] leading-body tracking-body text-on-invert-secondary md:col-span-7 md:text-justify lg:col-span-7">
            Design and development - handled by one person. No handoff & no translation loss.
          </TextReveal>
        </div>
        <div className="flex flex-col px-4 bg-surface-invert-raised rounded-xl lg:px-5 lg:rounded-2xl">
          <ul className="flex flex-col">
            {services.map((service, i) => (
              <li
                key={i}
                className="flex flex-col pt-8 lg:grid lg:grid-cols-12 lg:gap-8 last:pb-4 not-last:pb-10 lg:last:pb-10 md:not-last:border-b md:not-last:border-on-invert-border"
              >
                <div className="flex items-center gap-2 mb-4 pb-2 md:mb-0 lg:contents">
                  <div className="text-start text-on-invert-muted lg:col-span-1">
                    <div className="block overflow-clip relative text-on-invert-secondary">
                      <TextReveal as="span" startDelay={0.1} className="block relative text-h400 font-serif font-[450] leading-heading tracking-body">
                        ({String(service.number).padStart(2, '0')}){' '}
                      </TextReveal>
                    </div>
                  </div>
                  <div className="text-on-invert-secondary lg:col-span-3 lg:mb-0">
                    <div className="relative block overflow-clip">
                      <TextReveal as="h2" startDelay={0.1} className="text-h400 font-serif leading-heading tracking-body font-[450]">
                        {service.title}
                      </TextReveal>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 body-display text-on-invert-muted md:mb-8 lg:col-span-5 lg:gap-6 lg:mb-0">
                  <TextReveal as="p" startDelay={0.2}>
                    {service.description}
                  </TextReveal>
                  <ul className="flex flex-col gap-1.5 mt-2 text-base-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-baseline gap-2 text-on-invert-muted">
                        <TextReveal preset="fadeUp" delay={0.3 + idx * 0.1} as="span">
                          <span className="shrink-0 font-mono">—</span>
                        </TextReveal>
                        <TextReveal preset="fadeUp" delay={0.3 + idx * 0.1} as="span">
                          <span className="body-display">{feature.name}</span>
                        </TextReveal>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full mt-4 lg:col-span-3 lg:mt-0">
                  <CardParallax as="video" src={service.video} containerClassName="aspect-[4/3] h-[250px] sm:h-[300px] md:h-[360px] lg:h-[280px] xl:h-[320px]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BaseSection>
  );
};

export default Services;
