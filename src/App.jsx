import { lazy, Suspense, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Preloader, Header, CustomCursor, Footer, PageTransition } from '@/components';
import { LenisProvider, LoadingProvider, useLenis, useLoading } from '@/context';
import { CursorProvider } from './cursor';
import { useInitialLoad, resetScrollImmediate } from '@/hooks';

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const ProjectPage = lazy(() => import('@/pages/project/ProjectPage'));
const ProjectDetailPage = lazy(() => import('@/pages/project/project-detail/ProjectDetailPage'));

// Handles the wait-for-ready → enter transition after route navigation
const RouteReadyNotifier = () => {
  const location = useLocation();
  const { setPageReady, phase } = useLoading();
  const { lenis } = useLenis();

  useEffect(() => {
    if (phase !== 'wait-for-ready') return;

    resetScrollImmediate(lenis);

    let cancelled = false;
    const waitForPaint = async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      if (!cancelled) setPageReady();
    };
    waitForPaint();

    return () => {
      cancelled = true;
    };
  }, [location.pathname, phase, setPageReady, lenis]);

  return null;
};

// Handles /#section scroll when navigating from another route to home
const HashScrollHandler = () => {
  const location = useLocation();
  const { lenis } = useLenis();
  const { isReady } = useLoading();

  useEffect(() => {
    if (!isReady || location.pathname !== '/') return;
    const hash = location.hash;
    if (!hash) return;

    const sectionId = hash.slice(1);
    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(sectionId);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (attempt < 10) {
        setTimeout(() => tryScroll(attempt + 1), 100);
      }
    };
    setTimeout(() => tryScroll(), 300);
  }, [location.pathname, location.hash, lenis, isReady]);

  return null;
};

const AppContent = () => {
  useInitialLoad();
  // useScrollToTop();

  return (
    <>
      <Preloader />
      <Header />
      <CustomCursor />
      <RouteReadyNotifier />
      <HashScrollHandler />
      <main className="page-container">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
      <PageTransition />
    </>
  );
};

const App = () => (
  <>
    <SpeedInsights />
    <Router>
      <LenisProvider>
        <CursorProvider>
          <LoadingProvider>
            <AppContent />
          </LoadingProvider>
        </CursorProvider>
      </LenisProvider>
    </Router>
  </>
);

export default App;
