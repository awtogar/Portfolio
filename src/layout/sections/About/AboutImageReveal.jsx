import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import BaseSection from '../BaseSection';
import { ScrollAnimatedImg, Splatter, Marquee, MarqueeItem, SlideText } from '../../../components';
import { useWindowDimensions } from '../../../function';
import { RiArrowRightUpLine } from '@remixicon/react';

import images_2 from '../../../assets/images/about/about-1.jpg';
import images_3 from '../../../assets/images/about/about-2.jpg';

const maskSVG = `data:image/svg+xml;base64,${btoa(`${Splatter()}`)}`;

const images = [
  { src: images_2, alt: 'Image 2' },
  { src: images_3, alt: 'Image 3' },
];

const AboutImageReveal = () => {
  const containerMaskRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerMaskRef,
    offset: ['start end', 'end end'],
  });

  const dimensions = useWindowDimensions();
  const maxMaskSize = Math.max(dimensions.width, dimensions.height) * 3;

  const step = 1 / images.length;

  return (
    <>
      <BaseSection sectionClassName="pt-s200">
        <div ref={containerMaskRef} className="h-[300dvh] relative">
          <div className="sticky top-0 h-screen overflow-hidden bg-neutral-100">
            {images.map((image, i) => {
              const start = step * i;
              const end = step * (i + 1);
              const target = Math.max(0, maxMaskSize - 0);
              const maskSize = useTransform(scrollYProgress, [start, end], ['136px', `${target}px`]);
              return (
                <motion.div
                  key={i}
                  className="absolute inset-0 w-full h-full max-h-[100dvh] mask-no-repeat mask-center"
                  style={{
                    maskImage: `url('${maskSVG}')`,
                    WebkitMaskImage: `url('${maskSVG}')`,
                    maskSize,
                    WebkitMaskSize: maskSize,
                  }}
                >
                  <ScrollAnimatedImg
                    src={image.src}
                    alt={image.alt}
                    containerClassName="absolute inset-0 w-full h-full "
                    imageClassName="w-full h-full object-cover"
                    scrollRange={['0%', '8%']}
                    offset={['start start', 'end start']}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="bg-primary section-padding-y text-secondary">
          <SlideText texts={['MADE NOT BORN', 'EVERYTHING IS POSSIBLE']} velocity={18} className="text-[4rem] leading-[3rem]" />
        </div>
      </BaseSection>
    </>
  );
};

export default AboutImageReveal;
