import React from 'react';
import { heroReels } from '@/assets';
import { CreativeButton, VideoLoader, BaseSection } from '@/components';

const Showreel = () => {
  return (
    <BaseSection sectionClassName="section-padding-y" containerID="showreels" containerClassName="m-auto w-full">
      <div className="h-[468px] md:h-[640px] lg:h-[768px] overflow-hidden">
        <VideoLoader src={heroReels} className="w-full h-full object-cover -inset-1px lg:h-[calc(100%_+_2px)] lg:w-[calc(100%_+_2px)] transform overflow-clip rounded-[inherit]" />
      </div>
    </BaseSection>
  );
};

export default Showreel;
