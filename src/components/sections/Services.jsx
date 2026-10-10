import React from 'react';
import { services } from '@/data/data';
import { BaseSection, CardParallax, TextReveal } from '@/components';

const Services = () => {
  const servicesCaption =
    'I have different skills that could help turn an idea into something real or just from small concept to turn it into  visual design and i’m open for freelance work or collaboration.';

  return (
    <BaseSection sectionID="services">
      <div data-cursor-idle-fill="secondary" className="flex flex-col gap-16 px-4 pt-16 pb-4 bg-surface-invert rounded-3xl inverted lg:gap-28 lg:pt-24 lg:rounded-[20px]">
        <div className="flex flex-col md:gap-2 md:px-4">
          <div className="flex flex-col mb-2 md:col-span-5 md:mb-0 md:pt-1 lg:col-span-4 ">
            <TextReveal as="p" className="text-base font-[450] leading-body tracking-body text-justify text-on-invert-secondary">
              {'(SERVICES)'}
            </TextReveal>
          </div>
          <TextReveal as="p" startDelay={0.15} className="text-h500 font-[500] leading-[1.5] text-secondary md:col-span-7 md:text-justify lg:col-span-8">
            {servicesCaption}
          </TextReveal>
        </div>
        <div className="flex flex-col px-4 bg-surface-invert-raised rounded-xl lg:px-5 lg:rounded-2xl">
          <ul className="flex flex-col">
            {services.map((service, i) => (
              <li
                key={i}
                className="flex flex-col pt-8 lg:grid lg:grid-cols-12 lg:gap-8 last:pb-4 not-last:pb-10 lg:last:pb-10 md:not-last:border-b md:not-last:border-on-invert-border"
              >
                <div className="text-secondary flex items-center gap-2 mb-2 md:pb-2 md:mb-0 lg:contents">
                  <div className="text-start lg:col-span-1">
                    <div className="block overflow-clip relative">
                      <TextReveal as="span" startDelay={0.1} className="block relative text-h300 font-serif font-[450] leading-heading tracking-body">
                        ({String(service.number).padStart(2, '0')})
                      </TextReveal>
                    </div>
                  </div>
                  <div className="lg:col-span-3 lg:mb-0">
                    <div className="relative block overflow-clip">
                      <TextReveal as="h2" startDelay={0.1} className="block relative text-h300 font-serif font-[450] leading-heading tracking-body">
                        {service.title}
                      </TextReveal>
                    </div>
                  </div>
                </div>
                <div className="text-secondary flex flex-col gap-4 body-display text-base md:mb-8 lg:col-span-5 lg:gap-6 lg:mb-0">
                  <TextReveal as="p" startDelay={0.2}>
                    {service.description}
                  </TextReveal>
                  <ul className="flex flex-col gap-1.5 mt-2 text-base text-secondary">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-baseline gap-2">
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
                <div className="w-full pt-6 lg:col-span-3 lg:pt-0">
                  <CardParallax as="video" src={service.video} containerClassName="aspect-[4/3] h-[250px] sm:h-[300px] md:h-[360px] lg:h-[280px] xl:h-[320px]" />
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
