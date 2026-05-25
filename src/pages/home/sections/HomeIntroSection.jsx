import React from 'react';
import { siteReels3 } from '@/assets';
import { CreativeButton, VideoLoader } from '../../../components';
import BaseSection from '../../../components/common/BaseSection';

const HomeIntroSection = () => {
  return (
    <>
      <BaseSection containerID="showreels" sectionClassName="section-padding-y" containerClassName="m-auto w-full max-w-[1920px]">
        <div className="h-[468px] overflow-hidden lg:h-[640px]">
          <VideoLoader
            src={siteReels3}
            className="w-full h-full object-cover -inset-1px lg:h-[calc(100%_+_2px)] lg:w-[calc(100%_+_2px)] transform overflow-clip rounded-[inherit]"
          />
        </div>
      </BaseSection>
    </>
  );
};

export default HomeIntroSection;
