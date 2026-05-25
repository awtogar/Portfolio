import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { Card, SvgImageMask, BaseSection } from '@/components';
import { useDimensions } from '@/hooks';

import { site2, site3 } from '@/assets';

const maskSVG = `data:image/svg+xml;base64,${btoa(`${SvgImageMask()}`)}`;

const images = [
  { src: site2, alt: 'Image 2' },
  { src: site3, alt: 'Image 3' },
];

const AboutImageRevealSection = () => {
  const containerMaskRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerMaskRef,
    offset: ['start end', 'end end'],
  });

  const dimensions = useDimensions();
  const maxMaskSize = Math.max(dimensions.width, dimensions.height) * 3;

  const step = 1 / images.length;

  return (
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
                <Card
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
    </BaseSection>
  );
};

export default AboutImageRevealSection;
