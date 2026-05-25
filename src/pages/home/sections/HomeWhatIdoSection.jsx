import React from 'react';
import { services } from '@/data/content';
import { BaseSection, CardParallax, TextReveal } from '@/components';
// import { useDimensions } from '@/hooks';

const HomeWhatIdoSection = () => {
  return (
    <BaseSection containerID="what-i-do" sectionClassName="section-padding-xy">
      <div className="flex flex-col gap-16 lg:gap-24 bg-neutral-900 dark:bg-neutral-50 px-4 pt-16 lg:pt-24 pb-4 rounded-3xl lg:rounded-[20px]">
        <div className="flex flex-col md:hidden">
          <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16">
            <h2 className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-400 dark:text-neutral-300 uppercase font-medium tracking-wider mb-2 md:mb-0 md:pt-1 md:min-w-[120px] lg:min-w-[160px] shrink-0">
              <div className="relative block overflow-clip">
                <div className="relative block">Services</div>
              </div>
            </h2>
            <TextReveal as="p" className="text-neutral-100 dark:text-neutral-900 text-base-lg font-medium leading-[1.1] lg:leading-[1.05] flex-1">
              A multidisciplinary creative developer with designs and development background. Interested to explore and learn new things.
            </TextReveal>
          </div>
        </div>

        {/* desktop */}
        <div className="grid-cols-12 gap-8 px-6 hidden md:grid">
          <h2 className="col-span-2 text-base text-neutral-400 dark:text-neutral-300 uppercase font-medium tracking-wider pt-1 shrink-0">
            <div className="relative block overflow-clip">
              <TextReveal className="relative block">Services</TextReveal>
            </div>
          </h2>
          <TextReveal as="p" className="col-span-10 text-neutral-100 dark:text-neutral-900 text-base-lg font-medium leading-[1.1] lg:leading-[1.05]">
            A multidisciplinary creative developer with designs and development background. Interested to explore and learn new things.
          </TextReveal>
        </div>

        <div className="flex flex-col bg-neutral-800 dark:bg-white rounded-xl lg:rounded-2xl px-4 lg:px-5">
          <ul className="flex flex-col">
            {services.map((service, i) => (
              <li
                key={i}
                className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-10 last:pb-4 not-last:pb-10 lg:last:pb-10 md:not-last:border-b md:not-last:border-neutral-700 dark:not-last:border-neutral-200"
              >
                <div className="flex items-center gap-3 mb-4 md:mb-0 lg:contents">
                  <div className="text-base-lg text-neutral-50 dark:text-neutral-500 uppercase font-medium tracking-wider lg:col-span-2">
                    <div className="relative block overflow-clip">
                      <div className="relative block">
                        <TextReveal as="span" startDelay={0.25} className="relative block">
                          {String(service.number).padStart(2, '0')}
                        </TextReveal>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base-lg text-neutral-50 dark:text-neutral-900 font-medium lg:col-span-4  lg:mb-0">
                    <div className="relative block overflow-clip">
                      <TextReveal startDelay={0.25} className="relative block">
                        {service.title}
                      </TextReveal>
                    </div>
                  </h3>
                </div>
                <div className="text-base-lg text-neutral-50 dark:text-neutral-900 flex flex-col gap-4 lg:gap-6 lg:col-span-3 mb-8 lg:mb-0">
                  <TextReveal as="p" startDelay={0.75}>
                    {service.description}
                  </TextReveal>
                  <ul className="flex flex-wrap gap-1.5 mt-1.5">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-[10px] text-neutral-50 uppercase tracking-[1.1] bg-neutral-500 dark:bg-neutral-100 px-3 pt-2 pb-1.5 rounded-full whitespace-nowrap"
                      >
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3">
                  {/* add stagger for orchestra */}
                  <CardParallax
                    src={service.image}
                    alt={service.title}
                    scrollRange={i === 0 ? ['-2vh', '0vh'] : ['-2vh', '0vh']}
                    containerClassName="h-[220px] sm:h-[400px] md:h-[450px] lg:h-[clamp(220px,15vw,360px)]"
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

export default HomeWhatIdoSection;
