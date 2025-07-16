import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { works } from '../../data/data';

const StackingCards = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  return (
    <section ref={container} className="relative md:padding-section-x">
      <div className="w-full xl:max-w-[1408px] mx-auto">
        <div className="relative ">
          {works.map((work, index) => {
            const targetScale = 1 - ((works.length - index) * 0.05);
            const isLast = index === works.length - 1;
            
            return (
              <Card 
                key={work.id}
                work={work}
                index={index}
                progress={scrollYProgress}
                targetScale={targetScale}
                isLast={isLast}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Card = ({ work, index, progress, targetScale, isLast }) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);
  const opacity = useTransform(progress, [index * 0.25, (index + 1) * 0.25], [1, 0.8]);

  return (
    <div ref={container} className={`h-screen flex items-center justify-center ${isLast ? '' : 'sticky top-0'}`}>
      <motion.div
        style={{
          scale,
          opacity: isLast ? 1 : opacity,
          top: `calc(-5vh + ${index * 25}px)`
        }}
        className="relative w-full md:max-w-[1200px] md:h-[500px] lg:h-[700px] rounded-[25px] overflow-hidden origin-top"
      >
        {/* Background with gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400"
          style={{
            background: index % 2 === 0 
              ? 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 50%, #f1b0b7 100%)'
              : 'linear-gradient(135deg, #d4f8d4 0%, #c8f0c8 50%, #b8e6b8 100%)'
          }}
        />
        
        {/* Animated background scale */}
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10"
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-lg md:text-xl text-black/60 font-medium">
                  ({work.number})
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                  {work.title}
                </h2>
              </div>
              
              <p className="text-base md:text-lg text-black/80 max-w-2xl leading-relaxed">
                {work.description}
              </p>
            </div>
            
            {/* Navigation dot */}
            <div className="w-3 h-3 bg-black rounded-full flex-shrink-0 mt-2" />
          </div>

          {/* Services List */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {work.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: serviceIndex * 0.1 
                  }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-black/5 transition-colors group"
                >
                  <span className="text-sm text-black/50 font-medium min-w-[24px]">
                    {service.number}
                  </span>
                  <span className="text-base md:text-lg text-black/80 group-hover:text-black transition-colors">
                    {service.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle border */}
        <div className="absolute inset-0 rounded-[25px] border border-black/10" />
      </motion.div>
    </div>
  );
};

export default StackingCards;