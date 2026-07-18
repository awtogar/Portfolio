import { useState } from 'react';
import { motion } from 'motion/react';
import { navSlide, navDotScalling } from '@/data/anim/nav';
import { useLoading } from '@/context';
import { useLenis } from '@/context';

export default function NavigationLink({ data, isActive, setSelectedIndicator, closeMenu }) {
  const { title, href, index, sectionId } = data;
  const [isHovering, setIsHovering] = useState(false);
  const { navigateTo, scrollToSection } = useLoading();
  const { lenis, startScroll } = useLenis();

  const handleClick = e => {
    e.preventDefault();
    closeMenu();
    if (sectionId) {
      startScroll(); // unfreeze Lenis immediately — sidebar cleanup fires after exit anim
      scrollToSection(sectionId, lenis);
    } else {
      navigateTo(href);
    }
  };

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
      <motion.div variants={navDotScalling} animate={isActive ? 'open' : 'closed'} className="absolute -left-6 w-2 h-2 top-1/2 -translate-y-1/2 bg-brand-primary rounded-full" />

      <a href={sectionId ? `/#${sectionId}` : href} onClick={handleClick} className="text-[3rem] uppercase">
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
      </a>
    </motion.div>
  );
}
