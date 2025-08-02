/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import RoundedButton from '../../components/ui/CreativeButton/RoundedButton/RoundedButton';

const ContentFirst = ({ scrollYProgress }) => {
  // Transform values for parallax effects
  const ContainerFirst = useTransform(scrollYProgress, [0, 1], [0.6, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Staggered animations for text elements
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const buttonsY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  return (
    // hero section
    <motion.section className="sticky top-0 overflow-hidden" style={{ ContainerFirst, opacity }}>
      <div className="flex flex-col w-full pt-28 padding-section-x gap-8">
        <div className="m-auto w-full md:max-w-[480px] lg:max-w-[964px] xl:max-w-[1208px] flex flex-col gap-4">
          <div className="text-main text-mh100">
            <div className="payload-richtext">
              <h1>
                Graphics designer
                <br />
                and web developer enthusiast
              </h1>
            </div>
          </div>
          <div className="text-main text-p100">
            <div className="payload-richtext">
              <p>Blending design and development to build fast, user-friendly websites with purpose and impactful visuals.</p>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-8 pb-12">
          <RoundedButton
            as="a"
            href="/get-in-touch"
            textColor="var(--color-based)"
            className="w-[70%] flex-2/3 bg-primary sm:w-auto px-8 py-2 group relative rounded-full flex items-center justify-center font-medium"
            style={{ minWidth: 0 }}
          >
            Get in touch
          </RoundedButton>
          <RoundedButton
            as="a"
            href="/works"
            backgroundColor="var(--color-accent-secondary)"
            textColor="var(--color-main)"
            className="w-[30%] flex-1/3 bg-canvas border border-muted px-5 py-2 group relative rounded-full flex items-center justify-center font-medium"
          >
            Works
          </RoundedButton>
        </div>
      </div>
    </motion.section>
  );
};

const ContentSecond = ({ scrollYProgress }) => {
  const cardRef = useRef(null);
  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });
  const borderRadius = useTransform(cardScroll, [0, 1], ['3.5rem', '0rem']);
  const videoOutter = useTransform(scrollYProgress, [0, 1], [1, 48]);

  const StickyCard = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative h-full">
      {/* video */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <motion.div className="h-screen w-full flex items-center justify-center overflow-hidden md:h-[868px] max-h-max sticky top-12" style={{ y: videoOutter }}>
          <video src="/assets/videos/intro.webm" autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </motion.div>
        {/*  card */}
        <motion.div
          ref={cardRef}
          className="sticky top-0 h-screen bg-primary rounded-t-[2.5rem] md:rounded-t-[3.5rem] w-full z-[1]"
          style={{ borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius, displaySticky: StickyCard, transition: 'border-radius 0.3s ease-in-out' }}
        >
          {/* content harus as chield card! */}
          <div className="h-full text-based">
            <h2>test ajah sih</h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ContentFirst, ContentSecond };
