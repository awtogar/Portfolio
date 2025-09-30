import React from 'react';
import { ido } from '../../../data/data';
import SelectedWorksSection from './SelectedWorksSection';
import { RiAddLine, RiSubtractLine } from '@remixicon/react';

const WhatIdoSection = () => {
  return (
    <section id="what-i-do" className="z-10 section-padding-xy bg-primary text-brand-tertiary">
      <div className="m-auto w-full">
        {/* Services Header */}
        <div className="flex flex-col rounded-t-lg">
          <div className="flex w-full flex-col gap-s400 text-brand-tertiary">
            <div className="flex flex-col">
              <span className='text-brand-tertiary/75'>(SERVICES)</span>
              <h2 className="text-h100">How I Can Help You?</h2>
            </div>
            <p>I can help you create stunning visuals, seamless user experiences and be impactful based on your needs.</p>
          </div>
          {/* Services List */}
          <div className="w-full m-auto">
            <div className="mt-s900 gap-y-s800 flex flex-col justify-between">
              {ido.map((service, i) => {
                const topValue = `calc(10vh + ${i * 5.75}em)`;
                const marginBottomValue = `${17.25 - i * 5.75}em`;
                return (
                  <div key={i} className="sticky top-0 border-t border-t-neutral-100/40 bg-primary pt-s300" style={{ top: topValue, marginBottom: marginBottomValue }}>
                    <div className="flex items-center justify-between">
                      <div className="text-h300 flex grid-cols-12 items-center justify-start gap-4 py-6 text-left font-semibold spy-5 ">
                        <span className="col-span-2 self-center text-nowrap">( {service.number} )</span>
                        <h3 className="capitalize">{service.title}</h3>
                      </div>
                      <RiAddLine />
                      {/* <RiSubtractLine/> */}
                    </div>
                    <div className="text-brand-tertiary/75 pt-s400">
                      <p>{service.description}</p>
                      <div className="flex flex-col pt-s200">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center mt-s200 gap-s200">
                            <span>({feature.number})</span>
                            <span>{feature.name}</span>
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
        <SelectedWorksSection />
      </div>
    </section>
  );
};

export default WhatIdoSection;
