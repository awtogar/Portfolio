import { Children, useState } from 'react';
import { motion } from 'framer-motion';

export default function PrimaryButton({ children: Children, className = '', style = {}, width, height, href, onClick, ...props }) {
  const [isHovering, setIsHovering] = useState(false);

  const buttonStyle = {
    ...style,
    ...(width && { width }),
    ...(height && { height }),
  };

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href, ...props } : { onClick, ...props };

  return (
    <Component
      className={`all-unset flex content-center justify-center cursor-pointer bg-main text-based outline-none px-6 py-4 rounded-full relative overflow-clip ${className}`}
      style={buttonStyle}
      initial={false}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      {...componentProps}
    >
      <motion.p className="m-0 z-20" initial={false} transition={{ type: 'linear', duration: 0.3 }} animate={{ y: isHovering ? -36 : 0 }}>
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
        className="absolute z-10 bottom-0 left-0 h-full w-full rounded-full bg-accent-secondary outline-none"
        initial={false}
        transition={{ type: 'linear', duration: 0.3 }}
        animate={{
          y: isHovering ? '0%' : '125%',
          scaleX: isHovering ? 1 : 0.5,
        }}
      ></motion.div>
    </Component>
  );
}
