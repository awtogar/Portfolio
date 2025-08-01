import { Children, useState } from 'react';
import { motion } from 'framer-motion';

export default function MainMotionButton({ children: Children }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.button
      className="all-unset cursor-pointer bg-main text-based text-center px-6 py-4 rounded-full relative overflow-clip"
      initial={false}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <motion.p className="m-0 z-20" initial={false} transition={{ type: 'linear', duration: 0.3 }} animate={{ y: isHovering ? -32 : 0 }}>
        {Children}
      </motion.p>
      <motion.p
        className="m-0 h-full top-0 translate-y-1/2 text-main absolute flex items-center z-20 "
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? -28 : 16 }}
      >
        {Children}
      </motion.p>
      <motion.div
        className="absolute z-10 bottom-0 left-0 h-full w-full rounded-full bg-accent-secondary"
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{
          y: isHovering ? '0%' : '125%',
          scaleX: isHovering ? 1 : 0.5,
        }}
      ></motion.div>
    </motion.button>
  );
}
