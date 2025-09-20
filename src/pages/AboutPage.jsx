import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import intro1 from '../assets/images/img-1.jpg';
import intro2 from '../assets/images/img-2.jpg';
import Splatter from '../components/ui/Splatter';

const maskSVG = `data:image/svg+xml;base64,${btoa(`${Splatter()}`)}`;

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Update dimensions on mount and resize
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max mask size based on larger dimension kemudian dikali 3
  const maxMaskSize = Math.max(dimensions.width, dimensions.height) * 3;

  const images = [
    {
      src: intro1,
      alt: 'Image 1',
    },
    {
      src: intro2,
      alt: 'Image 2',
    },
  ];
  const step = 1 / images.length;

  return (
    <section className="z-10 section-padding-y">
      <div className="min-h-screen">
        <div className="h-screen flex items-center justify-center">about on development</div>

        <div ref={containerRef} className="relative h-[600vh]">
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
