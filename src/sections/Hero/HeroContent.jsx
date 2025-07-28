/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import RoundedButton from "../../components/Button/RoundedButton/RoundedButton";

const ContentFirst = ({ scrollYProgress }) => {
  // Transform values for parallax effects
  const ContainerFirst = useTransform(scrollYProgress, [0, 1], [0.6, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Staggered animations for text elements
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const buttonsY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  return (
    // hero section
    <motion.section
      className="sticky top-0 bg-canvas overflow-hidden"
      style={{ ContainerFirst, opacity, scale }}
    >
      <div className="flex flex-col w-full pt-28 padding-section-x gap-8 pb-10">
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
        <div className="flex w-full gap-8">
          <RoundedButton
            as="a"
            href="/get-in-touch"
            backgroundColor="#455CE9"
            textColor="#fff"
            className="w-[60%] sm:w-auto px-8 py-2 group relative rounded-full flex items-center justify-center bg-main text-base font-medium"
            style={{ minWidth: 0 }}
          >
            Get in touch
          </RoundedButton>
          <RoundedButton
            as="a"
            href="/works"
            textColor="#0a0a0a"
            className="w-[30%] flex-1 px-5 py-2 group relative rounded-full flex items-center justify-center text-base font-medium"
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
    offset: ["start end", "start start"],
  });
  const borderRadius = useTransform(cardScroll, [0, 1], ["3.5rem", "0rem"]);
  const videoOutter = useTransform(scrollYProgress, [0, 1], [4, 82]);

  const StickyCard = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section className="relative h-[calc(200svh-75svh)] bg-primary">
      {/* video */}
      <div className="w-full flex flex-col items-center justify-center bg-canvas">
        <motion.div
          className="h-screen w-full flex items-center justify-center overflow-hidden md:h-[768px] max-h-max sticky top-4"
          style={{ y: videoOutter }}
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
        {/*  card */}
        <motion.div ref={cardRef} className="sticky top-0 min-h-screen bg-canvas rounded-t-[2.5rem] md:rounded-t-[3.5rem] w-full z-[1]" style={{
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            StickyCard,
            transition: "border-radius 0.3s ease-in-out"}}>

              <div className="flex flex-col padding-section-x">
                <div className="sticky top pt-12">
                  
                <div className="text-mh100">
                  <div className="payload-richtext"> What I do?//</div>
                </div>
                </div>
              </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ContentFirst, ContentSecond };
