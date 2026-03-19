import React from 'react';
import video1 from '../../../assets/videos/video-1.mp4';
import { CreativeButton, VideoLoader } from '../../../components';
import BaseSection from '../BaseSection';

const IntroSection = () => {
  return (
    <>
      <BaseSection sectionClassName="" containerClassName="max-w-full">
        <div className="h-[468px] overflow-hidden lg:h-[640px]">
          <VideoLoader src={video1} className="w-full h-full object-cover -inset-1px lg:h-[calc(100%_+_2px)] lg:w-[calc(100%_+_2px)] transform overflow-clip rounded-[inherit]" />
        </div>
      </BaseSection>
      <BaseSection className="z-10 section-padding-xy">
        <div className="m-auto w-full">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full flex-col gap-s400 text-primary">
              <div className="flex flex-col">
                <span className="hsAccent uppercase text-primary/75">(Background)</span>
                <h2 className="text-h200 uppercase">Career</h2>
              </div>
              <p>With 2 years in graphic design and 100+ global clients, now focusing on web design and creative development to build impactful digital experiences.</p>
            </div>
            <div className="flex gap-s600 bg-primary rounded-xl p-s600 items-center justify-center">
              <div className="flex flex-col justify-center items-center text-center">
                <span className="text-3xl font-semibold text-secondary">100+</span>
                <span className="text-secondary/60 text-xs">Clients Worldwide</span>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <span className="text-3xl font-semibold text-secondary">2+</span>
                <span className="text-secondary/60 text-xs">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </BaseSection>
    </>
  );
};

export default IntroSection;
