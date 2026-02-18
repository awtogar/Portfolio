import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AnimatePresence } from 'motion/react';
import { Preloader, Header, StickyCursor, Footer, Transition } from './components';
import { LenisProvider } from './providers/LenisProvider';
import { StickyProvider } from './providers/StickyProvider';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import { pages } from './data/data';
import ScrollToTopPages from './function/ScrollToTopPages';

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Preloader timer
  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    }, 2000);

    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <Header />
      <StickyCursor />
      <ScrollToTopPages />

      <AnimatePresence mode="wait">
        <main id="main" className="bg-neutral-100" style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
          <Routes location={location} key={location.pathname}>
            <Route
              path={pages.home.href}
              element={
                <Transition isLoading={isLoading}>
                  <HomePage />
                  <Footer />
                </Transition>
              }
            />
            <Route
              path={pages.about.href}
              element={
                <Transition isLoading={isLoading}>
                  <AboutPage />
                  <Footer />
                </Transition>
              }
            />
            <Route
              path={pages.project.href}
              element={
                <Transition isLoading={isLoading}>
                  <ProjectPage />
                  <Footer />
                </Transition>
              }
            />
            <Route
              path={pages.contact.href}
              element={
                <Transition isLoading={isLoading}>
                  <ContactPage />
                </Transition>
              }
            />
          </Routes>
        </main>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <>
      <SpeedInsights />
      <Router>
        <LenisProvider>
          <StickyProvider>
            <AppContent />
          </StickyProvider>
        </LenisProvider>
      </Router>
    </>
  );
};

export default App;
