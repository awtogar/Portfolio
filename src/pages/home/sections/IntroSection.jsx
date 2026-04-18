import React from 'react';
import { introVideo1 } from '@/assets';
import { CreativeButton, VideoLoader } from '../../../components';
import BaseSection from '../../../components/common/BaseSection';

const IntroSection = () => {
  return (
    <>
      <BaseSection sectionClassName="" containerClassName="max-w-full">
        <div className="h-[468px] overflow-hidden lg:h-[640px]">
          <VideoLoader
            src={introVideo1}
            className="w-full h-full object-cover -inset-1px lg:h-[calc(100%_+_2px)] lg:w-[calc(100%_+_2px)] transform overflow-clip rounded-[inherit]"
          />
        </div>
      </BaseSection>
    </>
  );
};

export default IntroSection;
