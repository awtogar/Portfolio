import React from 'react';
import { siteReels3 } from '@/assets';
import { CreativeButton, VideoLoader, BaseSection } from '@/components';

const ShowreelSection = () => {
  return (
    <BaseSection sectionClassName="section-padding-y" containerID="showreels" containerClassName="m-auto w-full">
      <div className="h-[468px] md:h-[640px] lg:h-[768px] overflow-hidden">
        <VideoLoader src={siteReels3} className="w-full h-full object-cover -inset-1px lg:h-[calc(100%_+_2px)] lg:w-[calc(100%_+_2px)] transform overflow-clip rounded-[inherit]" />
      </div>
    </BaseSection>
  );
};

export default ShowreelSection;
