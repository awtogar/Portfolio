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
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section className="overflow-hidden">
      <div className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-22" ref={container}>
        <motion.div className="w-full max-w-6xl" style={{ y, opacity }}>
          <div className="text-center sm:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-6">
                {/* TODO: LANJUTIN SPACING DAN LINE HEIGHT DAN JUGA FONT WEIGHT KAYAK SHAKURO */}
              <h1 className="text-left text-4xl font-[450] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-shade-800">
                <span className='text-accent-400'>a graphics </span>designer<br/>
                <span>and web <span className='text-accent-400'>development</span></span>
                <br />
                <span>enthusiast</span>
              </h1>
              
              <div className="w-16 sm:w-24 h-px bg-shade-300 my-6 sm:my-8 mx-auto sm:mx-0"></div>
              
              <p className="text-sm sm:text-base lg:text-lg text-shade-600 leading-relaxed max-w-sm sm:max-w-lg lg:max-w-2xl font-light mx-auto sm:mx-0">
                I design visuals that speak and build websites that work — clean, responsive, and purpose-driven.
              </p>
              
              <p className="text-base sm:text-lg text-shade-500 max-w-xs sm:max-w-md lg:max-w-xl leading-relaxed mx-auto sm:mx-0">
                Always learning, always creating with passion and curiosity.
              </p>
            </motion.div>
            
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-start items-center gap-4 sm:gap-6 pt-6 sm:pt-8"
            >
              <button className="group bg-shade-800 text-shade-100 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-shade-700 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto">
                Get in touch
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <a 
                href="#works" 
                className="text-shade-600 hover:text-shade-800 transition-colors text-base sm:text-lg border-b border-transparent hover:border-shade-300 pb-1"
              >
                works
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;