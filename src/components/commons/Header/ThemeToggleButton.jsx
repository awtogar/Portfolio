import { RiSunLine, RiMoonLine } from '@remixicon/react';
import { motion } from 'motion/react';
import { Magnetic, Bounds } from '../..';

const ThemeToggleButton = ({ isActive, toggleTheme, stickyRef }) => (
  <motion.div
    className="toggle hidden md:flex text-neutral-100 dark:text-primary h-[60px] items-center justify-center w-[60px] md:w-[4.5rem] md:pointer-events-none cursor-pointer"
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
    <Magnetic>
      <div
        className={`px-2 relative flex items-center justify-center h-[60px] w-[60px] md:w-[4.5rem] group ${isActive ? 'pointer-events-none' : 'cursor-pointer'}`}
        onClick={isActive ? undefined : toggleTheme}
        aria-label="Toggle dark mode"
        type="button"
      >
        <div className="relative">
          <RiSunLine className="hidden dark:inline transition-transform duration-300 ease-in-out group-hover:-rotate-90" size={24} />
          <RiMoonLine className="inline dark:hidden transition-transform duration-300 ease-in-out group-hover:rotate-45" size={24} />
        </div>
        <Bounds ref={stickyRef} className={isActive ? '!pointer-events-none' : ''} />
      </div>
    </Magnetic>
  </motion.div>
);

export default ThemeToggleButton;
