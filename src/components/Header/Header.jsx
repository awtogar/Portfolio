import { RiSunLine, RiMoonLine } from '@remixicon/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Nav from '../Header/Nav/nav';
import './header.css';
import Magnetic from '../Magnetic';
import Bounds from '../ui/Bounds/Bounds';
import { useLenis } from '../Scroller/SmoothScrollLenis';

const Header = ({ burgerRef, themeToggleRef, logoElement }) => {
  // control menu state buat hamburger
  const [isActive, setIsActive] = useState(false);
  // track scroll direction and position
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrollPosition, setScrollPosition] = useState(0);
  const { lenis } = useLenis();

  const handleToggleTheme = () => {
    // tambahin class dark ke root html
    // simpaen tema terakhir di localStorage
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    // check tema terakhir yang ada terus apply kalo ada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const handleLenisScroll = ({ scroll }) => {
      // Determine scroll direction
      if (scroll > scrollPosition && scroll > 80) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setScrollPosition(scroll);
    };

    // Add Lenis scroll event listener
    lenis.on('scroll', handleLenisScroll);

    return () => {
      // Clean up by removing the event listener
      lenis.off('scroll', handleLenisScroll);
    };
  }, [lenis, scrollPosition]);

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      {/* 2. diatas cursor agar element gak ketutupan cursor */}
      <motion.div
        className="pt-8 fixed flex w-full justify-between items-center mix-blend-difference z-[50]"
        initial={{ translateY: 0 }}
        animate={{
          translateY: scrollDirection === 'down' && !isActive ? -100 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Magnetic>
          <div className="flex items-center font-bold font-secondary tracking-tighter justify-center md:text-2xl antialiased px-4 h-[60px]">
            <a href="/" className="relative cursor-pointer text-neutral-100 dark:text-primary" aria-label="Home">
              <svg data-name="Layer 2" viewBox="0 0 29.93 28.95" width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 1">
                  <path d="M14.1,28.95c-.67-.26-1.25-.59-1.78-1.08-1.85-1.7-3.19-3.66-3.7-6.14-.07-.36-.04-1.94-.66-1.51-.32.22-.71,1.04-1.16,1.37-1.27.94-2.81.35-2.81-1.32,0-1.86.78-3.92.56-5.81-.16-1.38-1.32-1-2.27-1.19S.19,11.88.05,10.91c-.22-1.62.28-2.56.66-4.01.21-.79.36-2.52,1.02-3,1.03-.76,2.47.01,2.76,1.16.09.33.1,1.95.04,2.29-.07.39-1.78,2.38-.42,2.3.92-.06.88-1.88,1.08-2.49.62-1.9,2.09-4.12,4.09-4.72,2.94-.89,6.41-1.53,9.45-1.98C19.57.34,20.96-.02,21.73,0c1.37.03,1.54,2.45,2.3,2.77.8.34,2.72-.77,3.27.3.72,1.4-1.84,2.09-1.54,3.41.13.55.64,1.33.84,1.87.4,1.07-.25,1.71-1.34,1.43-.6-.15-1.53-.93-2.12-.87-.79.08-1.52,2.1-2.87,1.73-.57-.15-1.5-1.85-1.93-2.38-.57-.72-2.3-2.54-3.13-2.77-.16-.04-.31-.06-.47-.04-.09.09.77,1.81.87,2.08.76,2.15.91,5.11-.23,7.13-1.43,2.51-5.38,4.42-3.52,7.78.48.87,2.63,3.81,3.73,2.55.95-1.08.62-4.47,1.05-5.97.35-1.2,1.33-1.32,2.13-.4.97,1.13,1.02,2.83,1.93,3.97.43.07.33-1.08.32-1.35-.22-3.28-2.51-8.87,2.14-10.04,3.51-.89,6.25,2.55,6.57,5.74.02.17-.03.35.19.42v.66c-.33-.05-.16.54-.21.77-.1.49-.74,1.34-1.26,1.45-2.22.46-2.17-3.26-3.45-3.27-.36,0-.57.39-.61.71-.18,1.5.1,3.34,0,4.87-.09,1.31-.4,3.72-1.09,4.82-.92,1.48-2.5,1.82-3.73.47-.33-.36-.77-1.43-1.03-1.59-.91-.54-1.28.64-1.66,1.16-.6.83-1.15,1.24-2.14,1.56h-.66ZM21.84,1.51c-.48.14-.2,2.1-.71,2.67-.4.44-2.08.23-2.53.84.32.61,1.98,1.03,2.2,1.55.25.59-.38,2.53-.05,2.77.13.08.25.05.38,0,.47-.22,1.25-1.58,1.84-1.61.43-.02,2.1,1.05,2.32,1,.67-.13-.84-2.39-.78-2.74.11-.51,1.7-1.75,1.57-2.17-.13-.44-2.1.21-2.62-.01-.48-.2-.87-1.74-1.31-2.15-.1-.09-.16-.18-.32-.13ZM10.7,5.36c-.35.07-1.07.79-1.23,1.12-.48.98-1.1,4.14.47,4.39,1.23.19,2.49-.79,2.66-2.02.08-.56-.07-2.16-.33-2.65-.19-.37-1.16-.92-1.56-.83ZM10.71,13.6c-.55-.07-1.43.13-1.69.67-.2.41-.36,1.53-.35,1.99,0,.14.11.77.23.8.16,0,.28-.17.37-.29.31-.4,1.51-2.46,1.52-2.87,0-.1-.03-.21-.08-.3Z" />
                </g>
              </svg>
            </a>
            <Bounds ref={logoElement} />
          </div>
        </Magnetic>

        {/* button and hamburger */}
        <div className="flex items-center h-[60px]">
          <motion.div
            className="toggle hidden md:flex text-neutral-100 dark:text-primary relative h-[60px] items-center justify-center"
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
              <button className="cursor-pointer flex items-center justify-center h-[60px] group" onClick={handleToggleTheme} aria-label="Toggle dark mode" type="button">
                <div className="relative">
                  <RiSunLine className="inline dark:hidden transition-transform duration-300 ease-in-out group-hover:-rotate-90" size={24} />
                  <RiMoonLine className="hidden dark:inline transition-transform duration-300 ease-in-out group-hover:rotate-45" size={24} />
                </div>
                <Bounds ref={themeToggleRef} />
              </button>
            </Magnetic>
          </motion.div>
          <Magnetic>
            <div
              className={`px-4 relative flex flex-col justify-center items-center h-[60px] w-[60px] gap-[0.2rem] md:w-[4.5rem] md:gap-2 md:pointer-events-none cursor-pointer  ${isActive ? 'active' : ''}`}
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              {/* Top line (::before replacement) */}
              <div
                className={`block w-11 h-[3px] bg-neutral-100 mix-blend-difference transition-transform duration-300 ease-in-out origin-center
                ${isActive ? 'scale-x-50' : 'scale-x-60'} md:w-[30px] md:h-[2px]
                ${isActive ? 'md:scale-x-100' : 'md:scale-x-60'} dark:bg-primary`}
              />
              {/* Bottom line (::after replacement) */}
              <div
                className={`block w-11 h-[3px] bg-neutral-100 mix-blend-difference transition-transform duration-300 ease-in-out origin-center
                ${isActive ? 'scale-x-50' : 'scale-x-60'} md:w-[30px] md:h-[2px]
                ${isActive ? 'md:scale-x-100' : 'md:scale-x-60'} dark:bg-primary`}
              />
              <Bounds ref={burgerRef} />
            </div>
          </Magnetic>
        </div>
      </motion.div>
      <div className="nav-wrapper">
        <AnimatePresence mode="wait">{isActive && <Nav closeMenu={closeMenu} />}</AnimatePresence>
      </div>
    </>
  );
};

export default Header;
