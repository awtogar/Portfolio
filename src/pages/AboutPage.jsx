import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import intro1 from '../assets/images/img-2.jpg';
import {Splatter} from '../components';
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
      src: intro1,
      alt: 'Image 1',
    }
  ];
  const step = 1 / images.length;

  return (
    <section className="z-10 section-padding-y">
      <div className="w-full m-auto">
        <div className="h-screen flex items-center justify-center">about on development</div>
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
                    <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-cover" />
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
