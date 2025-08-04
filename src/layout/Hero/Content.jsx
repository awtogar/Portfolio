/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import Picture1 from '../../assets/images/img-1.jpg';
import Picture2 from '../../assets/images/img-2.jpg';
import Picture3 from '../../assets/images/img-3.jpg';

import PrimaryButton from '../../components/ui/CreativeButton/PrimaryButton';
import SecondaryButton from '../../components/ui/CreativeButton/SecondaryButton';

const FirstContainer = ({ scrollYProgress }) => {
  // Transform values for parallax effects
  const ContainerFirst = useTransform(scrollYProgress, [0, 1], [0.6, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
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
          <PrimaryButton className="w-[70%]" href="/contact">
            Get in touch
          </PrimaryButton>
          <SecondaryButton className="w-[30%]">Works</SecondaryButton>
        </div>
      </div>
    </motion.section>
  );
};

const SecondContainer = ({ scrollYProgress }) => {
  const cardRef = useRef(null);

  // use only one scroll tracking for the card
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
          <div className="h-full w-full flex flex-col items-center justify-center padding-section-x">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main heading */}
              <motion.h2
                className="text-canvas text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Crafting Digital
                <br />
                Experiences
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="text-canvas/80 text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Where creativity meets functionality. I transform ideas into beautiful, interactive web experiences that engage and inspire.
              </motion.p>

              {/* Feature grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-canvas/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-canvas" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="text-canvas font-semibold text-lg mb-2">Design First</h3>
                  <p className="text-canvas/70 text-sm">User-centered design principles guide every decision</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-canvas/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-canvas" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 3V9H21V3M13 21H21V11H13M3 21H11V15H3M3 13H11V3H3V13Z" />
                    </svg>
                  </div>
                  <h3 className="text-canvas font-semibold text-lg mb-2">Responsive</h3>
                  <p className="text-canvas/70 text-sm">Seamless experience across all devices and platforms</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-canvas/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-canvas" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12 15.31 6 12 6M12 16C9.79 16 8 14.21 8 12S9.79 8 12 8 16 9.79 16 12 14.21 16 12 16Z" />
                    </svg>
                  </div>
                  <h3 className="text-canvas font-semibold text-lg mb-2">Performance</h3>
                  <p className="text-canvas/70 text-sm">Lightning-fast loading and smooth interactions</p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                <button className="bg-canvas text-primary px-8 py-3 rounded-full font-semibold hover:bg-canvas/90 transition-colors duration-300">View My Work</button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { FirstContainer, SecondContainer };
