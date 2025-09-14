import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slide, scale } from '../../../../data/anim';

export default function LinkComponent({ data, isActive, setSelectedIndicator, closeMenu }) {
  const { title, href, index } = data;
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {/* Active indicator dot with scaling animation */}
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="absolute -left-6 w-2 h-2 top-1/2 -translate-y-1/2 bg-neutral-500 rounded-full"
      />
      
      {/* Link with hover text animation */}
      <Link to={href} onClick={closeMenu}>
        <motion.div
          className="all-unset flex cursor-pointer relative antialiased translate-z-0 will-change-transform overflow-clip"
          initial={false}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.span
            className="m-0 z-20 will-change-transform"
            initial={false}
            transition={{ type: 'linear', duration: 0.3 }}
            animate={{ y: isHovering ? -96 : 0 }}
          >
            {title}
          </motion.span>
          <motion.span
            className="m-0 h-full top-0 translate-y-1/2 absolute flex items-center z-20 will-change-transform"
            initial={false}
            transition={{ type: 'linear', duration: 0.4 }}
            animate={{ y: isHovering ? -48 : 24 }}
          >
            {title}
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
}