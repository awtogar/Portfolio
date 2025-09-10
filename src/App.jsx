import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './styles/globals.css';
import Header from './components/Header/Header';
import SmoothScrollLenis from './components/Scroller/SmoothScrollLenis';
import StickyCursor from './components/ui/StickyCursor';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import Preloader from './components/ui/Preloader';
import Grain from './components/ui/Grain';
import { navigationLinks } from './data/data';

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
      <SmoothScrollLenis>
        <AnimatePresence mode="wait">{isLoading && <Preloader key="preloader" />}</AnimatePresence>

        {/* <Grain /> */}

        <main id="main" className="main-wrapper bg-neutral-100" style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
          <Header burgerRef={burgerElement} themeToggleRef={themeToggleElement} logoElement={logoElement} />
          <StickyCursor stickyElements={[burgerElement, themeToggleElement, logoElement]} />
          <Routes>
            <Route path={navigationLinks[0].href} element={<HomePage />} />
            <Route path={navigationLinks[1].href} element={<AboutPage />} />
            <Route path={navigationLinks[2].href} element={<ProjectPage />} />
            <Route path={navigationLinks[3].href} element={<ContactPage />} />
          </Routes>
        </main>
      </SmoothScrollLenis>
    </Router>
  );
};

export default App;
