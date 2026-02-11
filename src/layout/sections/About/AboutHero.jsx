// AboutHero.jsx
import React from 'react';
import { RiGeminiFill, RiHand } from '@remixicon/react';
import BaseSection from '../BaseSection';
import { ScrollAnimatedImg, CircularText, CreativeButton } from '../../../components';
import images_1 from '../../../assets/images/about/about-1.jpg';

const AboutHero = () => {
  return (
    <BaseSection className="">
      <div className="lg:max-h-none flex flex-col gap-s200 lg:gap-s800">
        {/* Image Section */}
        <div className=" w-full lg:max-w-[1408px] lg:mx-auto">
          <div className="w-full h-full">
            <ScrollAnimatedImg
              src={images_1}
              scrollRange={['0%', '15%']}
              alt="Intro Image 1"
              containerClassName="w-full h-[368px] md:h-[682px] lg:h-[912px] rounded-lg lg:rounded-2xl"
              imageClassName="object-cover rounded-lg lg:rounded-2xl object-center"
            />
          </div>
          <div className="flex absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 overflow-hidden">
            <CircularText
              text={'MADE*NOT*BORN*'}
              onHover="slowDown"
              className="text-secondary dark:text-primary scale-90 md:scale-100 lg:scale-110"
              centerClassName="bg-neutral-100"
              centerIcon={<RiGeminiFill className="text-secondary dark:text-primary" size={48} />}
            />
          </div>
        </div>

        {/* Introduce */}
        <div className="flex flex-col w-full lg:max-w-[1408px] lg:mx-auto">
          <div className="flex flex-col gap-s300 pt-6 max-w-3xl">
            <p className="mb-2 flex items-center lg:text-base">
              Hey! It's me Togar,
              <span className="items-center ml-2">
                <RiHand size={20} className="lg:w-6 lg:h-6" />
              </span>
            </p>
            <h1 className="text-h200 ts-200">A Creative Developer & Website Designer</h1>
            <p className="text-base lg:text-lg leading-relaxed">I help global brands bring their ideas to life with impactful solutions and keep their brand identity.</p>
          </div>
          <div className="flex items-center gap-s400 pt-s500 max-w-xs">
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
