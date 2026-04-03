import React from 'react';
import { services } from '../../../data/data';
import SelectedWorksSection from './SelectedWorksSection';
import BaseSection from '../../../components/commons/BaseSection';

const WhatIdoSection = () => {
  return (
    <BaseSection containerID="what-i-do" sectionClassName="section-padding-x pt-s900 bg-neutral-200 text-primary">
      {/* Services Header */}
      <div className="flex flex-col rounded-t-lg">
        <div className="flex w-full flex-col gap-s400 text-primary">
          <div className="flex flex-col">
            <span className="hsAccent">(WHAT I DO?)</span>
            <h2 className="text-h200">SERVICES</h2>
          </div>
          <p>I can help you create stunning visuals, seamless user experiences and be impactful based on your needs.</p>
        </div>
        {/* Services List */}
        <div className="w-full m-auto">
          <div className="mt-s900 gap-y-s800 flex flex-col justify-between">
            {services.map((service, i) => {
              const topValue = `calc(10vh + ${i * 5.75}em)`;
              const marginBottomValue = `${17.75 - i * 5.75}em`;
              return (
                <div key={i} className="sticky top-0 border-t border-t-primary/30 bg-neutral-200 mt-s300" style={{ top: topValue, marginBottom: marginBottomValue }}>
                  <div className="flex items-center justify-between">
                    <div className="flex grid-cols-12 items-center justify-start gap-4 py-6 text-left spy-5 ">
                      <span className="text-h500 col-span-2 self-center text-nowrap text-primary/75 font-mono">({service.number})</span>
                      <h3 className="uppercase text-h300">{service.title}</h3>
                    </div>
                  </div>
                  <div className="pt-s400">
                    <p className="text-primary">{service.description}</p>
                    <div className="flex flex-col pt-s200">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center mt-s200 gap-s200 text-primary/75">
                          <p>({feature.number})</p>
                          <p>{feature.name}</p>
                        </div>
                      ))}
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
