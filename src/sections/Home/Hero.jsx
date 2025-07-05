import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

// Hero Component with refined parallax
const Hero = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section className="overflow-hidden padding-section-x">
      <div className="relative pt-46 pb-22" ref={container}>
        <motion.div className="m-auto w-full xl:max-w-[1408px]" style={{ y, opacity }}>
          <div className="flex flex-col gap-7 m-auto w-full max-w-2xl lg:max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="flex flex-col gap-3 space-y-6">
                <div className="payload-richtext">
                  <h1 className="text-[42px] font-primary text-shade-800 tracking-none font-[300]">
                    Graphics designer
                    <br/>
                    and web developer enthusiast
                  </h1>
                </div>
                <div className="payload-richtext">
                  <p className='text-[18px] font-[300] text-gray-600 leading-8 max-w-xl sm:max-w-2xl'>
                    I make visuals that hit and websites that just get it done — clean, fast, and built with meaning.
                    Helping brands talk louder with fresh design and smooth user-friendly builds.
                  </p>
                </div>
            </motion.div>
            
            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex w-full gap-4 pt-4 sm:w-auto sm:items-center sm:gap-6"
            >
              {/* Primary Button - Get in touch (2/3 width) */}
              <a 
                href="/get-in-touch" 
                className="group relative px-6 py-4 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center flex-1"
              >
                Get in touch
              </a>

              <a
                href="/works"
                className="group relative px-6 py-4 bg-transparent text-black border border-black rounded-full font-medium text-sm hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center flex-shrink-0"
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

export default Hero;