import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import IntroVideos from '../../assets/videos/intro.webm';

export default function IntroSection() {
  const container = useRef();
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10vh', '20vh']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);

  return (
    <section ref={container} className="relative max-h-[483px] sm:max-h-none overflow-hidden h-[483px] sm:h-[420px] md:h-[524px] md:min-h-[524px] md:pb-0 lg:h-[732px] xl:min-h-[800px]">
      {/* Video with smooth parallax */}
      <motion.div 
        style={{ y, scale, opacity }} 
        className="absolute inset-0 bg-green-400"
      >
        <video src={IntroVideos} autoPlay loop muted playsInline className="w-full h-full object-cover"/>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>


    </section>
  );
}