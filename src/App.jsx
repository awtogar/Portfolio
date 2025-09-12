import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import './styles/globals.css';

// Animation imports
import { AnimatePresence } from 'framer-motion';


import Header from './components/Header/Header';
import StickyCursor from './components/ui/StickyCursor';
import Preloader from './components/ui/Preloader';
import Grain from './components/ui/Grain';
import LenisScroller from './components/Scroller';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

// Data
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
      <LenisScroller>
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
      </LenisScroller>
    </Router>
  );
};

export default App;
