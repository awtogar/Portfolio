import React from 'react';
import { services } from '@/data/content';
import BaseSection from '../../../components/common/BaseSection';
import { ParallaxImage } from '../../../components';

const WhatIdoSection = () => {
  return (
    <BaseSection containerID="what-i-do" sectionClassName="section-padding-xy" containerClassName="bg-neutral-900 dark:bg-neutral-50 rounded-2xl lg:rounded-[20px]">
      <div className="flex flex-col gap-16 lg:gap-24 px-4 pt-16 lg:pt-24 pb-4">
        <div className="lg:grid lg:grid-cols-12 gap-24">
          <div className="flex flex-col col-span-12 lg:col-span-10 lg:col-start-3">
            <h2 className="text-base text-neutral-400 dark:text-neutral-300 uppercase font-medium tracking-wider mb-2">Services</h2>
            <p className="text-neutral-100 dark:text-neutral-900 text-base-lg font-medium leading-[1.1] lg:leading-[1.05]">
              Evolving with every brief and built for impact, my process spans design, development, and brand strategy—aligning vision with execution to bring clarity and edge to
              every project.
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-neutral-800 dark:bg-white rounded-xl lg:rounded-2xl px-4 lg:px-5">
          <div className="flex flex-col">
            {services.map((service, i) => (
              <div
                key={i}
                className="sticky bg-neutral-800 dark:bg-white"
                style={{
                  top: `calc(172px + ${i * 24}px)`,
                  zIndex: i + 1,
                }}
              >
                <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-10 pb-10 border-b border-neutral-700 dark:border-neutral-200 last:border-0 last:pb-4">
                  <div className="flex items-center gap-3 pb-4 lg:pb-0 lg:contents">
                    <p className="text-base text-neutral-300 dark:text-neutral-500 uppercase font-medium tracking-wider lg:col-span-2">{String(service.number).padStart(2, '0')}</p>
                    <h3 className="text-base-lg text-neutral-100 dark:text-neutral-900 font-medium lg:col-span-4 lg:-mt-4">{service.title}</h3>
                  </div>
                  <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-3 mb-8 lg:mb-0">
                    <p className="text-base text-neutral-100 dark:text-neutral-800 font-medium leading-[1.3]">{service.description}</p>
                    <ul className="flex gap-1.5 flex-wrap">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-base-xs text-neutral-100 dark:text-neutral-50 uppercase tracking-[1.1] bg-neutral-100/10 dark:bg-neutral-100 px-2 pt-2 pb-1.5 rounded-md whitespace-nowrap"
                        >
                          {feature.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-3">
                    <ParallaxImage src={service.image} alt={service.title} containerClassName="h-[220px] sm:h-[400px] md:h-[450px] lg:h-[clamp(220px,15vw,360px)]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default WhatIdoSection;
