import React from 'react';
import { heroReels } from '@/assets';
import { CreativeButton, VideoLoader, BaseSection } from '@/components';

const Showreel = () => {
  return (
    <BaseSection sectionClassName="section-padding-y" containerID="showreels" containerClassName="w-full m-auto">
      <div className="overflow-hidden h-[468px] md:h-[640px] lg:h-[768px]">
        <VideoLoader src={heroReels} className="overflow-clip -inset-1px w-full h-full object-cover rounded-[inherit] transform lg:w-[calc(100%_+_2px)] lg:h-[calc(100%_+_2px)]" />
      </div>
    </BaseSection>
  );
};

export default Showreel;
