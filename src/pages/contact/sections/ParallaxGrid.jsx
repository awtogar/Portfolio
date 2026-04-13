'use client';
import { useRef } from 'react';
import { useDimensions } from '@/hooks/useDimensions';
import { motion, useScroll, useTransform } from 'motion/react';
import { aboutHeroImg, aboutImg1, aboutImg2, img1, img3, img4, img5, img6 } from '@/assets';
import BaseSection from '@/components/common/BaseSection';

const images = [aboutHeroImg, aboutImg1, aboutImg2, img1, img3, img4, img5, img6, aboutImg1, img5, img4, aboutHeroImg];

export default function ParallaxGrid() {
  const gallery = useRef(null);
  const dimension = useDimensions();

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
      <BaseSection sectionClassName="" containerClassName="max-w-full">
    <div className="h-[100vh]">

{/* will comming soon component */}

    </div>
    <div ref={gallery} className="h-[175vh] overflow-hidden bg-[#2D2D2D]">
      <div className="relative -top-[12.5vh] h-[200vh] flex gap-[2vw] p-[2vw]">
        <Column images={[images[0], images[1], images[2]]} y={y} topClass="-top-[45%]" />
        <Column images={[images[3], images[4], images[5]]} y={y2} topClass="-top-[80%]" />
        <Column images={[images[6], images[7], images[8]]} y={y3} topClass="-top-[30%]" />
        <Column images={[images[9], images[10], images[11]]} y={y4} topClass="-top-[60%]" />
      </div>
    </div>
    <div className="h-[100vh]">

      {/* old footer content here */}

    </div>
  </BaseSection>
  );
}
const Column = ({ images, y, topClass }) => {
  return (
    <motion.div className={`relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] whitespace-nowrap ${topClass}`} style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className="relative h-[33%] w-full rounded-[1vw] overflow-hidden">
          <img src={src} alt="image" className="object-cover w-full h-full" />
        </div>
      ))}
    </motion.div>
  );
};
