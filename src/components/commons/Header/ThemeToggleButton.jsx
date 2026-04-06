import { RiSunLine, RiMoonLine } from '@remixicon/react';
import { motion } from 'motion/react';
import { useCursorInteraction } from '../../../hooks';

const ThemeToggleButton = ({ isActive, toggleTheme }) => {
  const { targetRef, boundsRef } = useCursorInteraction({ magnetic: true, sticky: true });

  return (
    <motion.div
      className="toggle hidden md:flex text-neutral-100 dark:text-primary h-[60px] items-center justify-center w-[60px] md:pointer-events-none cursor-pointer"
      animate={{
        opacity: isActive ? 0 : 1,
        pointerEvents: isActive ? 'none' : 'auto',
      }}
      transition={{
        opacity: {
          duration: isActive ? 0.3 : 1.5,
          ease: 'easeInOut',
        },
      }}
    >
      <div
        ref={targetRef}
        className={`relative flex items-center justify-center w-full h-full group ${isActive ? 'pointer-events-none' : 'cursor-pointer'}`}
        onClick={isActive ? undefined : toggleTheme}
        aria-label="Toggle dark mode"
        type="button"
      >
        <div className="relative">
          <RiSunLine className="hidden dark:inline transition-transform duration-300 ease-in-out group-hover:-rotate-90" size={24} />
          <RiMoonLine className="inline dark:hidden transition-transform duration-300 ease-in-out group-hover:rotate-45" size={24} />
        </div>
        <div ref={boundsRef} className={`hidden md:block absolute top-0 left-0 w-[100%] h-[100%] pointer-events-auto hover:scale-[3] ${isActive ? '!pointer-events-none' : ''}`} />
      </div>
    </motion.div>
  );
};

export default ThemeToggleButton;
