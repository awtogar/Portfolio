import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './styles/globals.css';
import Header from './components/Header/Header';
import SmoothScrollLenis from './components/Scroller/SmoothScrollLenis';
import StickyCursor from './components/StickyCursor';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import Preloader from './components/Preloader/Preloader';

const App = () => {
  const burgerElement = useRef(null);
  const themeToggleElement = useRef(null);
  const logoElement = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!isLoading && (
        <SmoothScrollLenis>
          <main id="main" className="main-wrapper bg-based">
            <Header burgerRef={burgerElement} themeToggleRef={themeToggleElement} logoElement={logoElement} />
            <StickyCursor stickyElements={[burgerElement, themeToggleElement, logoElement]} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/work" element={<ProjectPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </SmoothScrollLenis>
      )}
    </Router>
  );
};

export default App;
