import { useRef } from 'react';
import { motion } from 'motion/react';
import { useLoading } from '@/context/LoadingProvider';

const HeroSection = ({ project }) => {
  const { phase } = useLoading();
  const hasPlayed = useRef(false);
  if (phase === 'idle') hasPlayed.current = true;

  return (
    <div className="overflow-hidden w-full px-4">
      <motion.h1
        initial={{ y: '100%' }}
        animate={hasPlayed.current ? { y: 0 } : { y: '100%' }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="w-full text-neutral-100 text-center text-5xl md:text-[clamp(64px,8vw,180px)] font-bold uppercase leading-[0.85]"
      >
        {project.client}
      </motion.h1>
    </div>
  );
};

export default HeroSection;
