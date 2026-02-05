import React from 'react';
import video1 from '../../../assets/videos/video-1.mp4';
import { CreativeButton, VideoLoader } from '../../../components';

const IntroSection = () => {
  return (
    <>
      <section className="z-10">
        <div className="m-auto w-full">
          <div className="h-[468px] overflow-hidden">
            <VideoLoader src={video1} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="z-10 section-padding-xy">
        <div className="m-auto w-full lg:max-w-[1408px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full flex-col gap-s400 text-primary">
              <div className="flex flex-col">
                <span className="text-primary/75">THE START OF</span>
                <h2 className="text-h200">MY JOURNEY</h2>
              </div>
              <p>
                With over 2 years of experience and 100+ global clients, I specialize in creating impactful visual identities and digital experiences. Now, I extend my expertise to
                web design & development, crafting solutions that blend creativity and functionality.
              </p>
            </div>
            {/* Stats */}
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
      </section>
    </>
  );
};

export default IntroSection;
