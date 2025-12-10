import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';

import intro1 from '../assets/images/img-1.jpg';
import intro2 from '../assets/images/img-2.png';
import intro3 from '../assets/images/img-3.jpg';
import { CreativeButton } from '../components';
import { RiGeminiFill } from '@remixicon/react';
import { CircularText, ScrollAnimatedImg, Splatter, ShinyText } from '../components';
import { useWindowDimensions } from '../function';
import SectionLayout from '../layout/SectionLayouts';

const maskSVG = `data:image/svg+xml;base64,${btoa(`${Splatter()}`)}`;

const AboutPage = () => {
  const containerMaskRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerMaskRef,
    offset: ['start end', 'end end'],
  });

  const dimensions = useWindowDimensions();
  const maxMaskSize = Math.max(dimensions.width, dimensions.height) * 3;

  const images = [
    {
      src: intro1,
      alt: 'Image 1',
    },
  ];
  const step = 1 / images.length;

  return (
    <>
      <SectionLayout containerID="about-intro">
        <div className="h-[100dvh] max-h-screen flex flex-col">
          <div className="relative">
            <div className="w-full h-full">
              <ScrollAnimatedImg
                src={intro1}
                scrollRange={['0%', '15%']}
                alt="Intro Image 1"
                containerClassName="w-full h-[468px] md:h-[682px] lg:h-[912px] rounded-lg"
                imageClassName="object-cover rounded-lg object-center"
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
          <div className="flex flex-col">
            <div className="flex flex-col gap-s600 pt-6">
              <h1 className="text-h100">Graphics designer and web developer</h1>
              <p>I help global brands bring their ideas to life with impactful solutions and keep their brand identity.</p>
            </div>
            <div className="flex items-center gap-s400 pt-s500">
              <div className="flex-1">
                <CreativeButton to="/contact" variant={'fill'}>
                  Get in touch
                </CreativeButton>
              </div>
              <div className="flex-shrink-0">
                <CreativeButton href="https://www.linkedin.com/in/awaluddintogar/" variant={'transparent'} target="_blank" rel="noopener noreferrer">
                  <span>My Resume</span>
                </CreativeButton>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout sectionClassName="section-padding-y">
        
        <div className="flex flex-col gap-s600">
          <ShinyText text="About Me" className="text-h200" />
          <p>
            I'm Awal Uddin Togar, a passionate graphics designer and web developer with over 5 years of experience in creating visually stunning and user-friendly digital
            experiences. My journey began with a fascination for art and technology, leading me to pursue a career where I could blend both.
          </p>
        </div>
      </SectionLayout>

      {/* Mask reveal section */}
      <SectionLayout sectionClassName="section-padding-y">
        <div ref={containerMaskRef} className="h-[300dvh] relative">
          <div className="sticky top-0 h-screen overflow-hidden bg-neutral-100">
            {images.map((image, i) => {
              const start = step * i;
              const end = step * (i + 1);
              const target = Math.max(0, maxMaskSize - 500);
              const maskSize = useTransform(scrollYProgress, [start, end], ['56px', `${target}px`]);
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
                  <ScrollAnimatedImg
                    src={image.src}
                    alt={image.alt}
                    containerClassName="absolute inset-0 w-full h-full "
                    imageClassName="w-full h-full object-cover"
                    scrollRange={['0%', '5%']}
                    offset={['start start', 'end start']}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionLayout>

      <SectionLayout>
        <div className="flex flex-col">
          <ShinyText text="Let's create something amazing together." className="text-h200" />
          <p>I'm excited to collaborate with you on your next project. Let's bring your vision to life!</p>
        </div>
      </SectionLayout>
    </>
  );
};

export default AboutPage;
