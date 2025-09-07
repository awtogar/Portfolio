import { Children, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// motion components
const MotionLink = motion(Link);
const MotionA = motion.a;
const MotionButton = motion.button;

export default function PrimaryButton({
  children: Children,
  className = 'w-full px-6 py-4 font-light text-center',
  href,
  to,
  onClick,
  background1 = 'bg-primary',
  background2 = 'bg-brand-secondary',
  textcolor1 = 'text-secondary',
  textcolor2 = 'text-primary',
  outline1 = 'outline outline-1 outline-secondary',
  outline2 = 'outline outliner-1 outline-secondary',
  ...props }) {
  const [isHovering, setIsHovering] = useState(false);

  // Determine which component to use
  let Component;
  let componentProps = {};

  if (to) {
    Component = MotionLink;
    componentProps = { to, ...props };

  } else if (href) {
    Component = MotionA;
    componentProps = { href, ...props };

  } else {
    Component = MotionButton;
    componentProps = { onClick, ...props };
  }

  return (
    <Component
      className={`ring-0 all-unset flex content-center justify-center cursor-pointer ${background1} ${outline1} rounded-full relative overflow-clip ${className} antialiased translate-z-0 will-change-transform`}
      initial={false}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...componentProps}
    >
      <motion.p className={`m-0 z-20 will-change-transform ${textcolor1}`} initial={false} transition={{ type: 'linear', duration: 0.3 }} animate={{ y: isHovering ? -36 : 0 }}>
        {Children}
      </motion.p>

      <motion.p
        className={`m-0 h-full top-0 translate-y-1/2 absolute flex items-center z-20 will-change-transform ${textcolor2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{ y: isHovering ? -24 : 16 }}
      >
        {Children}
      </motion.p>

      <motion.div
        className={`ring-0 absolute z-10 bottom-0 left-0 h-full w-full rounded-full will-change-transform ${background2} ${outline2}`}
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{
          y: isHovering ? '0%' : '125%',
          scaleX: isHovering ? 1 : 2,
        }}
      />
    </Component>
  );
}
