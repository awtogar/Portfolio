import React from 'react';
import { services } from '@/data/content';
import { BaseSection, CardParallax, TextReveal } from '@/components';
// import { useDimensions } from '@/hooks';

const HomeWhatIdoSection = () => {
  return (
    <BaseSection containerID="what-i-do" sectionClassName="section-padding-xy">
      <div className="flex flex-col gap-16 lg:gap-28 bg-neutral-900 dark:bg-neutral-50 px-4 pt-16 lg:pt-24 pb-4 rounded-3xl lg:rounded-[20px]">
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-8 md:px-6">
          <h2 className="heading-medium text-neutral-400 dark:text-neutral-300 uppercase font-medium tracking-wider mb-2 md:mb-0 md:pt-1 md:col-span-4">
            <div className="relative block overflow-clip">
              <TextReveal as="span" className="relative block">
                Services
              </TextReveal>
            </div>
          </h2>
          <TextReveal as="p" className="text-neutral-100 heading-medium dark:text-neutral-900 text-base-lg md:text-justify md:col-span-8">
            A multidisciplinary creative developer come with sense of designs and development to make it a live.
          </TextReveal>
        </div>
        <div className="flex flex-col bg-neutral-800 dark:bg-white rounded-xl lg:rounded-2xl px-4 lg:px-5">
          <ul className="flex flex-col">
            {services.map((service, i) => (
              <li
                key={i}
                className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-8 last:pb-4 not-last:pb-10 lg:last:pb-10 md:not-last:border-b md:not-last:border-neutral-700 dark:not-last:border-neutral-200"
              >
                <div className="flex items-center gap-3 mb-4 md:mb-0 lg:contents">
                  <div className="text-neutral-400 dark:text-neutral-500 lg:col-span-1 text-start">
                    <div className="relative block overflow-clip">
                      <div className="relative block">
                        <TextReveal as="h2" startDelay={0.25} className="relative block text-base-lg uppercase heading-normal font-mono">
                          {String(service.number).padStart(2, '0')}
                        </TextReveal>
                      </div>
                    </div>
                  </div>
                  <div className="text-neutral-50 dark:text-neutral-900 lg:col-span-3 lg:mb-0">
                    <div className="relative block overflow-clip">
                      <TextReveal as="h2" startDelay={0.25} className="relative block text-base-lg uppercase heading-medium">
                        {service.title}
                      </TextReveal>
                    </div>
                  </div>
                </div>
                <div className=" text-neutral-50 dark:text-neutral-900 flex flex-col gap-4 lg:gap-6 lg:col-span-5 mb-8 lg:mb-0">
                  <TextReveal as="p" startDelay={0.75} className="">
                    {service.description}
                  </TextReveal>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {service.tags.map((tags, idx) => (
                      <li
                        key={idx}
                        className="text-base-sm text-primary bg-brand-secondary border border-primary px-2.5 pt-1.5 pb-1 rounded-full whitespace-nowrap backdrop-blur-sm transition-colors"
                      >
                        {tags}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3">
                  <CardParallax
                    src={service.image}
                    alt={service.title}
                    scrollRange={i === 0 ? ['-2vh', '0vh'] : ['-2vh', '0vh']}
                    containerClassName="h-[220px] sm:h-[400px] md:h-[450px] lg:h-auto lg:aspect-[4/3]"
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
