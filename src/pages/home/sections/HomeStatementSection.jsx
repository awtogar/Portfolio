import { BaseSection } from '@/components';
import { placeholder } from '@/assets';
import React from 'react';

const HomeStatementSection = () => {
  return (
    <BaseSection sectionClassName="section-padding-xy" containerClassName="m-auto w-full max-w-[1920px]">
      <div className="grid grid-cols-12 gap-s200">
        <div className="col-span-7 ">
          <h2>(Statement)</h2>
          <div className="text-h300 text-primary py-s200">
            <p>A multidisciplinary creative developer come with sense of designs and development to make it a live.</p>
          </div>
        </div>
        <div className="col-span-5">
          <div className="relative w-full h-full aspect-[3/4] md:max-h-[400px]">
            <img src={placeholder} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default HomeStatementSection;
