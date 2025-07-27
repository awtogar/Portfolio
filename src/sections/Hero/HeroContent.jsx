/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import RoundedButton from "../../components/Button/RoundedButton/RoundedButton";

const ContentFirst = ({ scrollYProgress }) => {
  return (
    // this is the the sticky element
    <section className="h-[75svh] sticky top-0 bg-canvas">
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
          <div className="text-muted text-p100">
            <div className="payload-richtext">
              <p>
                Blending design and development to build fast, user-friendly
                websites with purpose and impactful visuals.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-4 pt-4 sm:w-auto sm:items-center sm:gap-6">
          <a
            href="/get-in-touch"
            className="group relative px-6 py-4 bg-primary text-surface rounded-full hover:bg-muted-700 transition-all duration-300 flex items-center justify-center flex-1"
          >
            Get in touch
          </a>
          <a
            href="/works"
            className="group relative px-6 py-4 bg-transparent text-black border border-black rounded-full hover:bg-canvas hover:text-main transition-all duration-300 flex items-center justify-center flex-shrink-0"
          >
            Works
          </a>
        </div>
      </div>
    </section>
  );
};

const ContentSecond = ({ scrollYProgress }) => {
  const cardRef = useRef(null);

  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const borderRadius = useTransform(cardScroll, [0, 1], ["3.5rem", "0rem"]);

  const videoParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="relative h-[calc(200svh-75svh)] bg-primary">
      <div className="w-full flex flex-col items-center justify-center bg-canvas">
        <motion.div
          className="h-screen w-full flex items-center justify-center overflow-hidden md:h-[768px] max-h-max"
          style={{ y: videoParallax }}
        >
          <video
            src="/src/assets/videos/intro.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          ref={cardRef}
          className="bg-canvas rounded-t-[2.5rem] md:rounded-t-[3.5rem] w-full flex items-center justify-center z-[1] relative min-h-screen"
          style={{
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            transition: "border-radius 0.3s ease-in-out",
          }}>
          <div className="flex flex-col">
            <div className="text-p100">
              <div className="payload-richtext">
                <p>What I Do?</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="payload-richtext">
                  <h2>Branding</h2>
                </div>
                <div className="payload-richtext">
                  <h2>Design</h2>
                </div>
                <div className="payload-richtext">
                  <h2>Developing</h2>
                </div>
              </div>
        <RoundedButton backgroundColor="#ff6b6b" textColor="#fff"> 
          Another Button
        </RoundedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ContentFirst, ContentSecond };
