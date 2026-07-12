import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { SideBar } from '../..';
import { useLenis, usePageFlow } from '@/context';
import { HamburgerButton, ThemeToggleButton, TransitionLink, TextReveal } from '@/components';
import { RiArrowLeftLine } from '@remixicon/react';
import { useDimensions, useTheme } from '@/hooks';
import BrandLogo from '@/assets/site/gar.svg?react';

const SCROLL_UP_THRESHOLD = 120;
const SCROLL_DOWN_TRIGGER = 80;

const pages = {
  home: { title: 'Home', href: '/' },
  about: { title: 'About', href: '/about' },
  projects: { title: 'Projects', href: '/projects' },
  contact: { title: 'Contact', href: '/contact' },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  const scrollPositionRef = useRef(0);
  const scrollUpAccumRef = useRef(0);

  const { lenis } = useLenis();
  const { toggleTheme } = useTheme();
  const { isTransitioning } = usePageFlow();
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
        // scrolling down
        scrollUpAccumRef.current = 0;
        if (scroll > SCROLL_DOWN_TRIGGER) {
          setScrollDirection('down');
        }
      } else if (diff < 0) {
        // scrolling up
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
          {/* LEFT */}
          <div className="flex items-center">
            <div
              className={`flex items-center font-bold tracking-tighter justify-center md:text-2xl antialiased px-4 h-[60px] mix-blend-difference transition-all duration-300 ${isActive ? 'opacity-0 invisible lg:opacity-100 lg:visible' : 'opacity-100 visible'}`}
            >
              <TransitionLink to="/" className="relative cursor-pointer text-secondary dark:text-primary" aria-label="Home">
                <TextReveal as="span" className="relative inline-block" isHero replayOnNavigate startDelay={0.15}>
                  <BrandLogo className="w-auto md:h-4 lg:h-6 " />
                </TextReveal>
              </TransitionLink>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* md only: theme toggle */}
            <div className="hidden md:flex lg:hidden">
              <ThemeToggleButton isActive={isActive} toggleTheme={toggleTheme} />
            </div>
            {/* mobile + md: hamburger */}
            <div className="lg:hidden">
              <HamburgerButton isActive={isActive} onToggle={toggleMenu} />
            </div>
            <div className="hidden lg:flex items-center">
              <nav className="flex items-center">
                <ul className="flex items-center gap-4 uppercase pt-[0.6rem] text-white text-body-lg">
                  {Object.values(pages)
                    .filter(page => page.href !== '/')
                    .map((page, index) => (
                      <li key={page.href} data-cursor data-cursor-magnetic data-cursor-sticky data-cursor-size="small">
                        <TransitionLink to={page.href} className="nav-link-hover relative inline-block cursor-pointer overflow-hidden">
                          <TextReveal as="span" className="link-text-top relative inline-block" isHero replayOnNavigate startDelay={0.35 + index * 0.1}>
                            {page.title}
                          </TextReveal>
                        </TransitionLink>
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
