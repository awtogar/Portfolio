import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slide, scale } from '../../../anim.js';

export default function LinkComponent({ data, isActive, setSelectedIndicator, closeMenu }) {
  const { title, href, index } = data;

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
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="absolute -left-6 w-2 h-2 top-1/2 -translate-y-1/2 bg-neutral-500 rounded-full transition-all duration-300 ease-in-out"
      ></motion.div>
      <Link to={href} onClick={closeMenu}>
        {title}
      </Link>
    </motion.div>
  );
}
