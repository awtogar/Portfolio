import React from 'react';
import { RiGeminiFill, RiHand } from '@remixicon/react';

import BaseSection from '../BaseSection';
import { ScrollAnimatedImg, CircularText, CreativeButton } from '../../../components';
import images_1 from '../../../assets/images/about/about-0.jpeg';

const AboutHero = () => {
  return (
    <BaseSection containerID="about-intro">
      <div className="section-pad max-h-screen flex flex-col">
        <div className="relative">
          <div className="w-full h-full">
            <ScrollAnimatedImg
              src={images_1}
              scrollRange={['0%', '15%']}
              alt="Intro Image 1"
              containerClassName="w-full h-[428px] md:h-[682px] lg:h-[912px] rounded-lg"
              imageClassName="object-cover rounded-lg object-center"
            />
          </div>
          <div className="flex absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden">
            <CircularText
              text={'MADE*NOT*BORN*'}
              onHover="slowDown"
              className="text-secondary dark:text-primary"
              centerClassName="bg-neutral-100"
              centerIcon={<RiGeminiFill className="text-secondary dark:text-primary" size={48} />}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-s300 pt-6">
            <p className="font-bold tracking-widest mb-2 flex items-center">
              Hey! It's me Togar,
              <span className="items-center ml-2">
                <RiHand size={20} />
              </span>
            </p>
            <h1 className="text-h200">A Creative Developer & Website Designer</h1>
            <p className="text-base-lg">I help global brands bring their ideas to life with impactful solutions and keep their brand identity.</p>
          </div>
          <div className="flex items-center gap-s400 pt-s500">
            <div className="flex-1">
              <CreativeButton to="/contact" variant={'outline'}>
                See my resume
              </CreativeButton>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutHero;
