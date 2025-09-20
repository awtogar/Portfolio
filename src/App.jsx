import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import './styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Animation
import { AnimatePresence } from 'framer-motion';

import { Preloader, Header, StickyCursor, Footer } from './components';
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
    }
  }, [isLoading, scrollTo]);

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      prevLocation.current = location.pathname;
      if (lenis) {
        // Small delay to make sure lenis ready
        setTimeout(() => {
          lenis.stop();
          window.scrollTo(0, 0);
          lenis.scrollTo(0, { immediate: true });
          lenis.start();
        }, 50);
      }
    }
  }, [location.pathname, lenis]);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Preloader key="preloader" />}</AnimatePresence>
      <Header burgerRef={burgerElement} themeToggleRef={themeToggleElement} logoElement={logoElement} />
      <StickyCursor stickyElements={[burgerElement, themeToggleElement, logoElement]} />
      <main id="main" className="main-wrapper bg-neutral-100" style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Routes>
          <Route path={pages_data.home.href} element={<HomePage />} />
          <Route path={pages_data.about.href} element={<AboutPage />} />
          <Route path={pages_data.project.href} element={<ProjectPage />} />
          <Route path={pages_data.contact.href} element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
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
