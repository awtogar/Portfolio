import React from 'react';
import { services } from '@/data/content';
import BaseSection from '../../../components/common/BaseSection';
import CustomCard from '../../../components/ui/CustomCard';

const WhatIdoSection = () => {
  return (
    <BaseSection containerID="what-i-do" sectionClassName="px-2 lg:px-4 py-16 lg:py-24" containerClassName="bg-neutral-900 rounded-2xl lg:rounded-[20px]">
      {/* Header Section */}
      <div className="flex flex-col gap-16 lg:gap-24 px-4 pt-16 lg:pt-24 pb-4">
        <div className="lg:grid lg:grid-cols-12 gap-24">
          <div className="flex flex-col col-span-12 lg:col-span-10 lg:col-start-3">
            <h2 className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-400 uppercase font-medium tracking-wider mb-2">Services</h2>
            <p className="text-neutral-100 text-[clamp(24px,3.3vw,56px)] font-medium leading-[1.1] lg:leading-[1.05]">
              Evolving with every brief and built for impact, my process spans design, development, and brand strategy—aligning vision with execution to bring clarity and edge to
              every project.
            </p>
          </div>
        </div>

        {/* Services List with Sticky Cards */}
        <div className="flex flex-col bg-neutral-800 rounded-xl lg:rounded-2xl px-4 lg:px-5">
          <div className="flex flex-col">
            {services.map((service, i) => {
              const topValue = `calc(15dvh + ${i * 5.75}em)`;
              const marginBottomValue = `${17.75 - i * 5.75}em`;

              return (
                <div key={i} className="sticky top-0 bg-neutral-800 mt-s300" style={{ top: topValue, marginBottom: marginBottomValue }}>
                  <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-10 last:pb-4 not-last:pb-10 lg:last:pb-10 not-last:border-b not-last:border-neutral-700">
                    {/* Number */}
                    <p className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-300 uppercase font-medium tracking-wider mb-1 lg:col-span-2">
                      {String(service.number).padStart(2, '0')}
                    </p>

                    {/* Title */}
                    <h3 className="text-[clamp(24px,3.3vw,56px)] text-neutral-100 font-medium lg:col-span-4 mb-6 lg:mb-0 lg:-mt-4">{service.title}</h3>

                    {/* Description & Tags */}
                    <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-3 mb-8 lg:mb-0">
                      <p className="text-[clamp(16px,1.2vw,20px)] text-neutral-100 font-medium leading-[1.3]">{service.description}</p>
                      <ul className="flex gap-1.5 flex-wrap">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-[10px] text-neutral-100 uppercase tracking-[1.1] bg-neutral-100/10 px-2 3xl:px-3 pt-2 pb-1.5 rounded-md whitespace-nowrap">
                            {feature.name}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-3">
                      <CustomCard
                        src={service.image || `/images/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}.png`}
                        alt={service.title}
                        scrollRange={['0%', '25%']}
                        offset={['start end', 'end start']}
                        containerClassName="h-[400px] md:h-[450px] lg:h-[clamp(220px,15vw,360px)] rounded-lg overflow-hidden"
                        imageClassName="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default WhatIdoSection;
