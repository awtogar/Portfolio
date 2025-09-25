import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
// Animation
import { AnimatePresence } from 'framer-motion';
import { Preloader, Header, StickyCursor, Footer, Transition } from './components';
import { SmoothScrollWrapper } from './function';
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
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Loading effect for the first time visiting the site.
  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    }, PRELOADER_DURATION);

    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <>
      {/* Preloader - only shows on initial load */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Main content - hidden during preloader */}
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Header />
        <StickyCursor />
        
        <main id="main" className="bg-neutral-100">
          {/* transitions */}
          <AnimatePresence mode="wait">
            <Transition key={location.pathname} backgroundColor="var(--neutral-100)">
              <Routes location={location}>
                <Route path={pages_data.home.href} element={<HomePage />} />
                <Route path={pages_data.about.href} element={<AboutPage />} />
                <Route path={pages_data.project.href} element={<ProjectPage />} />
                <Route path={pages_data.contact.href} element={<ContactPage />} />
              </Routes>
            </Transition>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
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
