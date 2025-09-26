import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AnimatePresence } from 'framer-motion';
import { Preloader, Header, StickyCursor, Footer, Transition } from './components';
import { SmoothScrollWrapper } from './function';
import { StickyProvider } from './context/StickyContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import { pages_data } from './data/data';
import { PRELOADER_DURATION } from './data/const';

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Preloader timer
  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    }, PRELOADER_DURATION);

    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Preloader key="preloader" />}</AnimatePresence>
      <Header />
      <StickyCursor />

      <AnimatePresence mode="wait">
        <main id="main" className="bg-neutral-100" style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
          <Routes location={location} key={location.pathname}>
            <Route
              path={pages_data.home.href}
              element={
                <Transition>
                  <HomePage />
                </Transition>
              }
            />
            <Route
              path={pages_data.about.href}
              element={
                <Transition>
                  <AboutPage />
                </Transition>
              }
            />
            <Route
              path={pages_data.project.href}
              element={
                <Transition>
                  <ProjectPage />
                </Transition>
              }
            />
            <Route
              path={pages_data.contact.href}
              element={
                <Transition>
                  <ContactPage />
                </Transition>
              }
            />
          </Routes>
        </main>
      </AnimatePresence>

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
