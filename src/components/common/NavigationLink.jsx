import { useState } from 'react';
import { motion } from 'motion/react';
import { navSlide, navDotScalling } from '@/data/anim/nav';
import TransitionLink from '../ui/TransitionLink';

export default function NavigationLink({ data, isActive, setSelectedIndicator, closeMenu }) {
  const { title, href, index } = data;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={navSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {/* indicator dot with scaling */}
      <motion.div variants={navDotScalling} animate={isActive ? 'open' : 'closed'} className="absolute -left-6 w-2 h-2 top-1/2 -translate-y-1/2 bg-secondary rounded-full" />

      {/* link text with hover effect */}
      <TransitionLink to={href} className="text-[3rem]">
        <motion.div
          className="all-unset flex cursor-pointer relative antialiased translate-z-0 will-change-transform overflow-clip"
          initial={false}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.span className="m-0 z-20 will-change-transform" initial={false} transition={{ type: 'linear', duration: 0.3 }} animate={{ y: isHovering ? '-100%' : 0 }}>
            {title}
          </motion.span>
          <motion.span
            className="m-0 h-full top-0 translate-y-full absolute flex items-center z-20 will-change-transform"
            initial={false}
            transition={{ type: 'linear', duration: 0.4 }}
            animate={{ y: isHovering ? '-100%' : '100%' }}
          >
            {title}
          </motion.span>
        </motion.div>
      </TransitionLink>
    </motion.div>
  );
}
