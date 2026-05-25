import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Logo, SideBar } from '../..';
import { useLenis } from '../../../context/LenisContext';
import { useLoading } from '@/context';
import { HamburgerButton, ThemeToggleButton, TransitionLink, TextReveal } from '@/components';
import { RiArrowLeftLine } from '@remixicon/react';
import { useDimensions, useTheme } from '@/hooks';

const SCROLL_UP_THRESHOLD = 120;
const SCROLL_DOWN_TRIGGER = 80;

const pages = {
  home: { title: 'Home', href: '/' },
  projects: { title: 'Projects', href: '/projects' },
  about: { title: 'About', href: '/about' },
  contact: { title: 'Contact', href: '/contact' },
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectDetail = /^\/projects\/[^/]+$/.test(location.pathname);

  const [isActive, setIsActive] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  const scrollPositionRef = useRef(0);
  const scrollUpAccumRef = useRef(0);

  const { lenis } = useLenis();
  const { toggleTheme } = useTheme();
  const { phase } = useLoading();
  const { width } = useDimensions();
  const isDesktop = width >= 1024;

  useEffect(() => {
    if (phase === 'wait-for-ready') setIsActive(false);
  }, [phase]);

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
        className="pt-8 top-0 fixed w-full z-[9998] mix-blend-difference"
        initial={{ translateY: 0 }}
        animate={{
          translateY: scrollDirection === 'down' && !isActive ? -100 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="max-w-[1920px] mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
          {/* LEFT */}
          <div className="flex items-center">
            {isProjectDetail ? (
              <div
                data-cursor
                data-cursor-magnetic
                data-cursor-sticky
                data-cursor-content="arrow"
                data-cursor-size="large"
                onClick={() => navigate('/projects')}
                className={`relative pl-2 flex items-center justify-center h-[60px] w-[60px] group cursor-pointer transition-all duration-300 ${isActive ? 'opacity-0 invisible lg:opacity-100 lg:visible' : 'opacity-100 visible'}`}
              >
                <div className="relative flex items-center justify-center w-9 h-9 rounded-full border-2 border-neutral-100 dark:border-primary mix-blend-difference transition-all duration-300 ease-in-out group-hover:scale-110">
                  <RiArrowLeftLine
                    size={24}
                    className="text-white mix-blend-difference transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5 group-hover:rotate-[15deg]"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`flex items-center font-bold font-secondary tracking-tighter justify-center md:text-2xl antialiased px-4 h-[60px] mix-blend-difference transition-all duration-300 ${isActive ? 'opacity-0 invisible lg:opacity-100 lg:visible' : 'opacity-100 visible'}`}
              >
                <TransitionLink to="/" className="relative cursor-pointer text-white" aria-label="Home">
                  <TextReveal as="span" className="relative inline-block" isHero startDelay={0.15}>
                    <Logo className="w-auto h-6 md:h-8 lg:h-10" />
                  </TextReveal>
                </TransitionLink>
              </div>
            )}
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
                          <TextReveal as="span" className="link-text-top relative inline-block" isHero startDelay={0.35 + index * 0.1}>
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
      <AnimatePresence mode="wait">{isActive && !isDesktop && <SideBar closeMenu={closeMenu} />}</AnimatePresence>
    </header>
  );
};

export default Header;
