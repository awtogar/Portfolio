import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { ImageMaskSVG, BaseSection } from '@/components';
import { useDimensions } from '@/hooks';
import { site2, site3 } from '@/assets';

// Hoisted outside render — mask is a static string
const maskURL = `data:image/svg+xml;base64,${btoa(`${ImageMaskSVG()}`)}`;

const images = [
  { src: site2, alt: 'Image 2' },
  { src: site3, alt: 'Image 3' },
];

// Each image gets its own component so hooks are called at the top level
const MaskImage = ({ src, alt, start, end, maxMaskSize, scrollYProgress }) => {
  const maskSize = useTransform(scrollYProgress, [start, end], ['136px', `${maxMaskSize}px`]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full max-h-[100dvh] mask-no-repeat mask-center"
      style={{
        maskImage: `url('${maskURL}')`,
        WebkitMaskImage: `url('${maskURL}')`,
        maskSize,
        WebkitMaskSize: maskSize,
      }}
    >
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </motion.div>
  );
};

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
          {images.map((image, i) => (
            <MaskImage
              key={i}
              src={image.src}
              alt={image.alt}
              start={step * i}
              end={step * (i + 1)}
              maxMaskSize={maxMaskSize}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutImageRevealSection;
