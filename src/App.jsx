import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Preloader, Header, StickyCursor, Footer, Transition } from './components';
import { LenisProvider } from './providers/LenisProvider';
import { StickyProvider } from './providers/StickyProvider';
import { TransitionProvider } from './context/TransitionContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
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

      {/* Global transition overlay — rendered once, persists across route changes */}
      <Transition />

      <main id="main" className="bg-neutral-100" style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Routes location={location} key={location.pathname}>
          <Route
            path={pages.home.href}
            element={
              <>
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path={pages.about.href}
            element={
              <>
                <AboutPage />
                <Footer />
              </>
            }
          />
          <Route
            path={pages.project.href}
            element={
              <>
                <ProjectPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <>
                <ProjectDetailPage />
                <Footer />
              </>
            }
          />
          <Route
            path={pages.contact.href}
            element={<ContactPage />}
          />
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
        <LenisProvider>
          <StickyProvider>
            <TransitionProvider>
              <AppContent />
            </TransitionProvider>
          </StickyProvider>
        </LenisProvider>
      </Router>
    </>
  );
};

export default App;
