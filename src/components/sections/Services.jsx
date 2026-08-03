import React from 'react';
import { services } from '@/data/content';
import { BaseSection, CardParallax, TextReveal } from '@/components';

const Services = () => {
  return (
    <BaseSection sectionID="services">
      <div className="flex flex-col gap-16 lg:gap-28 inverted bg-surface-invert px-4 pt-16 lg:pt-24 pb-4 rounded-3xl lg:rounded-[20px]">
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-8 md:px-6">
          <h2 className="text-h200 font-serif heading-display text-on-invert-secondary mb-2 md:mb-0 md:pt-1 md:col-span-5 lg:col-span-4">
            <div className="relative block overflow-clip">
              <TextReveal as="h2" className="relative block">
                What I do?
              </TextReveal>
            </div>
          </h2>
          <TextReveal as="p" startDelay={0.15} className="text-h500 tracking-body leading-body font-[450] text-on-invert-secondary md:text-justify md:col-span-7 lg:col-span-7">
            Design and development - handled by one person. No handoff & no translation loss.
          </TextReveal>
        </div>
        <div className="flex flex-col bg-surface-invert-raised rounded-xl lg:rounded-2xl px-4 lg:px-5">
          <ul className="flex flex-col">
            {services.map((service, i) => (
              <li
                key={i}
                className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-8 last:pb-4 not-last:pb-10 lg:last:pb-10 md:not-last:border-b md:not-last:border-on-invert-border"
              >
                <div className="flex items-center pb-2 gap-2 mb-4 md:mb-0 lg:contents">
                  <div className="text-on-invert-muted lg:col-span-1 text-start">
                    <div className="text-on-invert-secondary relative block overflow-clip">
                      <TextReveal as="span" startDelay={0.1} className="text-h400 font-serif leading-heading tracking-body font-[450] relative block">
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
                <div className="body-display text-on-invert-muted flex flex-col gap-4 lg:gap-6 lg:col-span-5 md:mb-8 lg:mb-0">
                  <TextReveal as="p" startDelay={0.2}>
                    {service.description}
                  </TextReveal>
                  <ul className="flex flex-col gap-1.5 mt-2 text-base-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-baseline gap-2 text-on-invert-muted">
                        <TextReveal preset="fadeUp" delay={0.3 + idx * 0.1} as="span">
                          <span className="font-mono shrink-0">—</span>
                        </TextReveal>
                        <TextReveal preset="fadeUp" delay={0.3 + idx * 0.1} as="span">
                          <span className="body-display">{feature.name}</span>
                        </TextReveal>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full mt-4 lg:mt-0 lg:col-span-3">
                  <CardParallax
                    as="video"
                    src={service.video}
                    containerClassName="h-[250px] sm:h-[300px] md:h-[360px] lg:h-[280px] xl:h-[320px] aspect-[4/3]"
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
