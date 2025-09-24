import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState, useCallback } from 'react';
import './styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Animation
import { AnimatePresence } from 'framer-motion';

import { Preloader, Header, StickyCursor, Footer } from './components';
import { SmoothScrollWrapper, useResetScroll } from './function';
import { useLenis } from './hooks/useLenis';
import { StickyProvider } from './context/StickyContext';
 
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
  const resetScroll = useResetScroll(); // Call the hook to get the function

  // Handle initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      if (scrollTo) {
        scrollTo(0, { immediate: true });
      }
    }, PRELOADER_DURATION);
    return () => clearTimeout(timer);
  }, [scrollTo]);

  // Handle route changes
  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      prevLocation.current = location.pathname;
      if (lenis) {
        setTimeout(resetScroll, 50);
      }
    }
  }, [location.pathname, lenis, resetScroll]);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Preloader key="preloader" />}</AnimatePresence>
      <Header />
      <StickyCursor />
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
          <StickyProvider>
            <AppContent />
          </StickyProvider>
        </SmoothScrollWrapper>
      </Router>
    </>
  );
};

export default App;
