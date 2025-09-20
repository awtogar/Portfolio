import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import './styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Animation
import { AnimatePresence } from 'framer-motion';

import { Preloader, Header, StickyCursor, Grain } from './components';
import SmoothScrollWrapper from './function/LenisScroll';
import { useLenis } from './hooks/useLenis';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

// Data
import { pages_data } from './data/data';
import { PRELOADER_DURATION } from './data/const';

const AppContent = () => {
  const burgerElement = useRef(null);
  const themeToggleElement = useRef(null);
  const logoElement = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const { lenis, scrollTo } = useLenis();
  const location = useLocation();
  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    }, PRELOADER_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && scrollTo) {
      scrollTo(0, { immediate: true });
      console.log('Scrolled using Lenis context');
    }
  }, [isLoading, scrollTo]);

  // TODO: THIS LENIS SCROLL RESET IS STILL NOT WORKING PERFECTLY ALWAYS FALLBACK TO WINDOW SCROLL
  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      console.log('Route changed from', prevLocation.current, 'to', location.pathname);
      // Update the ref for next comparison
      prevLocation.current = location.pathname;
      // Try multiple approaches to reset scroll
      if (scrollTo) {
        // Try the context method first
        scrollTo(0, { immediate: true });
        console.log('Reset scroll using context scrollTo');
      }

      if (lenis) {
        // Directly use the lenis instance as backup
        lenis.scrollTo(0, { immediate: true });
        console.log('Reset scroll using direct lenis instance');
      }

      // Fallback to window scroll as last resort
      window.scrollTo(0, 0);
      console.log('Reset scroll using window.scrollTo fallback');
    }
  }, [location.pathname, scrollTo, lenis]);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Preloader key="preloader" />}</AnimatePresence>
      {/* <Grain /> */}
      <main id="main" className="main-wrapper bg-neutral-100" style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Header burgerRef={burgerElement} themeToggleRef={themeToggleElement} logoElement={logoElement} />
        <StickyCursor stickyElements={[burgerElement, themeToggleElement, logoElement]} />
        <Routes>
          <Route path={pages_data.home.href} element={<HomePage />} />
          <Route path={pages_data.about.href} element={<AboutPage />} />
          <Route path={pages_data.project.href} element={<ProjectPage />} />
          <Route path={pages_data.contact.href} element={<ContactPage />} />
        </Routes>
      </main>
    </>
  );
};

const App = () => {
  return (
    <>
      <SpeedInsights />
      <Router>
        <SmoothScrollWrapper>
          <AppContent />
        </SmoothScrollWrapper>
      </Router>
    </>
  );
};

export default App;
