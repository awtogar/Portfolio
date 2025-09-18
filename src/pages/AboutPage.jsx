import React from 'react';
import profilPhoto from '../assets/images/img-2.jpg';
import { CircularText, HoverRotate } from '../components';

const AboutPage = () => {
  return (
    <>
      <section className="z-10 section-padding pt-12">
        <div className="w-full m-auto">
          <div className="rounded-b-[50%] bg-cover bg-center h-[50dvh] overflow-hidden flex justify-end" style={{ backgroundImage: `url(${profilPhoto})` }}>
            <div className="absolute h-full flex flex-col justify-end overflow-hidden">
              <CircularText text="THE*ONE*AND*ONLY*" centerIcon={
                <div className="flex">
                <HoverRotate className='text-secondary' to={"mailto:awaludintogar@gmail.com"}>
                  <span>YOURS</span>
                </HoverRotate>
                </div>
              } />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
