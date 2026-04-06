import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../../../../data/data';

const DetailHeroSection = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return null;

  return (
    <div className="overflow-hidden w-full px-4">
      <motion.h1 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="w-full text-neutral-100 text-center text-5xl md:text-[clamp(64px,8vw,180px)] font-bold uppercase leading-[0.85]"
      >
        {project.client}
      </motion.h1>
    </div>
  );
};

export default DetailHeroSection;
