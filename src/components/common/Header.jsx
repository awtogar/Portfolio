'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SideBar from './Sidebar';
import { useLenis, useLoading } from '@/context';
import { HamburgerButton, ThemeToggleButton, LogoLink, TextReveal } from '@/components';
import { cursorPresets } from '@/cursor';
import { useDimensions, useTheme } from '@/hooks';
import { sectionLink } from '@/data/data';

const SCROLL_UP_THRESHOLD = 120;
const SCROLL_DOWN_TRIGGER = 80;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  const scrollPositionRef = useRef(0);
  const scrollUpAccumRef = useRef(0);

  const { lenis } = useLenis();
  const { toggleTheme } = useTheme();
  const { isTransitioning, navigateTo, scrollToSection } = useLoading();
  const { width } = useDimensions();
  const isDesktop = width >= 1024;

  useEffect(() => {
    if (isTransitioning) setIsActive(false);
  }, [isTransitioning]);

  useEffect(() => {
    if (!lenis) return;

    const handleLenisScroll = ({ scroll }) => {
      const diff = scroll - scrollPositionRef.current;

      if (scroll <= 0) {
        scrollUpAccumRef.current = 0;
        setScrollDirection('up');
      } else if (diff > 0) {
        scrollUpAccumRef.current = 0;
        if (scroll > SCROLL_DOWN_TRIGGER) {
          setScrollDirection('down');
        }
      } else if (diff < 0) {
        scrollUpAccumRef.current += Math.abs(diff);
        if (scrollUpAccumRef.current >= SCROLL_UP_THRESHOLD) {
          setScrollDirection('up');
        }
      }

      scrollPositionRef.current = scroll;
    };

    lenis.on('scroll', handleLenisScroll);
    return () => lenis.off('scroll', handleLenisScroll);
  }, [lenis]);

  const closeMenu = useCallback(() => setIsActive(false), []);
  const toggleMenu = useCallback(() => setIsActive(prev => !prev), []);

  const handleNavClick = useCallback(
    (e, page) => {
      e.preventDefault();
      if (page.sectionId) {
        scrollToSection(page.sectionId, lenis);
      } else {
        navigateTo(page.href);
      }
    },
    [lenis, navigateTo, scrollToSection]
  );

  const navLink = Object.values(sectionLink).filter(p => p.href !== '/' || p.sectionId);

  return (
    <header>
      <motion.div
        className="px-2 md:px-4 lg:px-6 pt-8 top-0 fixed w-full z-[9998] mix-blend-difference"
        initial={{ translateY: 0 }}
        animate={{
          translateY: scrollDirection === 'down' && !isActive ? -100 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="mx-auto max-w-[1920px] flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center">
            <div
              className={`flex items-center font-bold tracking-tighter justify-center md:text-2xl antialiased px-4 h-[60px] mix-blend-difference transition-all duration-300 ${isActive ? 'opacity-0 invisible lg:opacity-100 lg:visible' : 'opacity-100 visible'}`}
            >
              <LogoLink startDelay={0.15} />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">

            {/* theme toggle, hidden by default but show only on md break points*/}
            <div className="hidden md:flex lg:hidden">
              <ThemeToggleButton isActive={isActive} toggleTheme={toggleTheme} />
            </div>
            {/* Hamburger for navigation smaller breaks point to md, above are hidden */}
            <div className="lg:hidden">
              <HamburgerButton isActive={isActive} onToggle={toggleMenu} />
            </div>

            {/* Navigation that available on lg breakpoints */}
            <div className="hidden lg:flex items-center">
              <nav className="flex items-center">
                <ul className="flex items-center gap-4 uppercase pt-[0.6rem] text-white text-body-lg">
                  {navLink.map((page, index) => (
                    <li key={`${page.href}-${page.sectionId}`} {...cursorPresets.nav}>
                      <a
                        href={page.sectionId ? `/#${page.sectionId}` : page.href}
                        onClick={e => handleNavClick(e, page)}
                        className="nav-link-hover relative inline-block cursor-pointer overflow-hidden"
                      >
                        <TextReveal as="span" className="link-text-top relative inline-block" mode="epoch" startDelay={0.35 + index * 0.1}>
                          {page.title}
                        </TextReveal>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ThemeToggleButton isActive={isActive} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence mode="wait">{isActive && !isDesktop && <SideBar closeMenu={closeMenu} skipExitAnim={isTransitioning} />}</AnimatePresence>
    </header>
  );
};

export default Header;
