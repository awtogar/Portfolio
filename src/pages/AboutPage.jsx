import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import intro1 from '../assets/images/img-2.jpg';
import intro2 from '../assets/images/img-1.jpg';

import { RiGeminiFill } from '@remixicon/react';
import { CircularText, ScrollAnimatedImg, Splatter, ShinyText } from '../components';
import { useWindowDimensions } from '../function';

const maskSVG = `data:image/svg+xml;base64,${btoa(`${Splatter()}`)}`;

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const dimensions = useWindowDimensions();
  const maxMaskSize = Math.max(dimensions.width, dimensions.height) * 3;

  const images = [
    {
      src: intro2,
      alt: 'Image 1',
    },
  ];
  const step = 1 / images.length;

  return (
    <section className="z-10">
      {/* content first */}
      <div className="section-padding-xy w-full m-auto lg:max-w-[1408px]">
        <div className="h-screen max-h-screen flex flex-col">
          <div className="relative">
            <div className="w-full h-full">
              <ScrollAnimatedImg
                src={intro1}
                scrollRange={['0%', '15%']}
                alt="Intro Image 1"
                containerClassName="w-full h-[468px] md:h-[696px] rounded-lg"
                imageClassName="object-cover rounded-lg"
              />
            </div>
            <div className="flex absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden">
              <CircularText
                text={'MADE*NOT*BORN*'}
                onHover="slowDown"
                className="text-primary"
                centerClassName="bg-neutral-100"
                centerIcon={<RiGeminiFill className="text-secondary" size={48} />}
              />
            </div>
          </div>

          <div className="flex flex-col pt-s500">
            <ShinyText text="Hello, I'm Togar!" disabled={true} speed={6} />
            <span className="text-normal"></span>
            <div className="flex flex-col gap-s400">
              <h1 className="text-h100">Graphics designer and web developer</h1>
              <p>I help global brands bring their ideas to life with impactful, mission-driven solutions that deliver results.</p>
            </div>
          </div>
        </div>
      </div>

      {/* content second */}
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen overflow-hidden bg-neutral-100">
          {images.map((image, i) => {
            const start = step * i;
            const end = step * (i + 1);
            const maskSize = useTransform(scrollYProgress, [start, end], ['0px', `${maxMaskSize}px`]);

            return (
              <motion.div
                key={i}
                className="absolute inset-0 w-full h-full mask-no-repeat mask-center"
                style={{
                  maskImage: `url('${maskSVG}')`,
                  WebkitMaskImage: `url('${maskSVG}')`,
                  maskSize,
                  WebkitMaskSize: maskSize,
                }}
              >
                <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">on development</div>
    </section>
  );
};

export default AboutPage;
