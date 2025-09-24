import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import intro1 from '../assets/images/img-2.jpg';
import intro2 from '../assets/images/img-1.jpg';

import { RiGeminiFill } from '@remixicon/react';
import { CircularText, Splatter } from '../components';
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
    <section className="z-10 section-padding-xy">
      <div className="w-full m-auto">
        <div className="relative flex flex-col h-screen pt-8 gap-2">
          <div className="flex-1 h-full bg-primary/10 rounded-lg flex flex-col lg:flex-row gap-6">
            <div className="absolute right-4 top-1/3 overflow-hidden">
              <CircularText
                text={'MADE*NOT*BORN*'}
                onHover="slowDown"
                className="text-primary"
                centerClassName="bg-neutral-100"
                centerIcon={<RiGeminiFill className="text-secondary" size={48} />}
              />
            </div>
            <img src={intro1} alt="Introduction" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-1">
            <h1 className="text-h200">A Graphics and web designer</h1>
            <p>I'm a person with a multidisciplinary background in design and development — learning through doing.</p>
          </div>
        </div>

        <div ref={containerRef} className="relative h-[200vh]">
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
                  <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="h-screen flex items-center justify-center">on development</div>
      </div>
    </section>
  );
};

export default AboutPage;
