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
    <section className="h-screen overflow-hidden bg-shade-100">
      <div 
        className="h-[120vh] bg-shade-100"
      >
        {/* Content Container */}
        <div className="relative h-screen flex items-center justify-center px-8 lg:px-22"  ref={container}>
          <motion.div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" style={{ y, opacity }}>
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-4xl  xl:text-xl font-light text-shade-800 leading-[1.1] tracking-tight ">
                  <span className='text-accent-400'>Graphics </span>designer
                  <br />
                  <span>and web <span className='text-accent-400'>developer</span></span>
                  <br />
                  <span>enthusiast</span>
                </h1>
                
                <div className="w-24 h-px bg-shade-300 my-8"></div>
                
                <p className="text-xl text-shade-600 leading-relaxed max-w-2xl font-light">
                  I design visuals that speak and build websites that work — clean, responsive, and purpose-driven.
                </p>
                
                <p className="text-lg text-shade-500 max-w-xl leading-relaxed">
                  Always learning, always creating with passion and curiosity.
                </p>
              </motion.div>
              
              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row sm:items-start items-center gap-6 pt-8"
              >
                <button className="group bg-shade-800 text-shade-100 px-10 py-4 rounded-full font-medium text-lg hover:bg-shade-700 transition-all duration-300 hover:scale-105 active:scale-95">
                  Get in touch
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
                
                <a 
                  href="#works" 
                  className="text-shade-600 hover:text-shade-800 transition-colors text-lg border-b border-transparent hover:border-shade-300 pb-1"
                >
                  works
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;