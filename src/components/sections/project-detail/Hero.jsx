'use client';

import { motion } from 'motion/react';

const Hero = ({ project }) => {
  return (
    <div className="overflow-hidden w-full inverted">
      <motion.h1
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="w-full text-5xl font-bold text-center leading-[0.85] uppercase text-neutral-100 md:text-[clamp(64px,8vw,180px)]"
      >
        {project.client}
      </motion.h1>
    </div>
  );
};

export default Hero;
