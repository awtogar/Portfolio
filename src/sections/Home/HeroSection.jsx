import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';


const HeroSection = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section className="overflow-hidden padding-section-x">
      <div className="relative pt-30 pb-20" ref={container}>
        <motion.div className="m-auto w-full xl:max-w-[1408px]" style={{ y,opacity }}>
          <div className="flex flex-col gap-6 m-auto w-full max-w-2xl lg:max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: -20 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="flex flex-col gap-3 space-y-6">
                <div className="text-h100 tracking-h100 leading-h100">
                  <div className="payload-richtext">
                    <h1>
                      Graphics designer
                      <br/>
                      and web developer enthusiast
                    </h1>
                  </div>
                </div>
                <div className="font-[300] text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-8 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
                  <div className="payload-richtext">
                    <p>
                      I make visuals that hit and websites that just get it done — clean, fast, and built with meaning.
                      Helping brands talk louder with fresh design and smooth user-friendly builds.
                    </p>
                  </div>
                </div>
            </motion.div>
            
            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex w-full sm:w-auto items-center gap-4 sm:gap-6 pt-4"
            >
              <a 
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-4 bg-black text-white rounded-full font-medium text-sm hover:bg-teal-700 transition-all duration-300 active:scale-95 flex items-center justify-center flex-1 sm:flex-none sm:px-16"
              >
                Get in touch
              </a>

              <a
                href="/work"
                className="group relative px-6 py-4 bg-transparent text-black border border-black rounded-full font-medium text-sm hover:bg-black hover:text-white transition-all duration-300 active:scale-95 flex items-center justify-center flex-shrink-0"
              >
                Works
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;