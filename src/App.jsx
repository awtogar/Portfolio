import { lazy, Suspense, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, Outlet, useLocation } from 'react-router-dom';
import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Preloader, Header, CustomCursor, Footer, Transition } from '@/components';
import AppProviders from '@/context/AppProviders';
import { pages } from '@/data/data';
import { useScrollToTop, usePreloader } from '@/hooks';
import { useLoading } from '@/context/LoadingProvider';

// Lazy loaded pages
const HomePage = lazy(() => import('@/pages/home/HomePage'));
const AboutPage = lazy(() => import('@/pages/about/AboutPage'));
const ProjectPage = lazy(() => import('@/pages/project'));
const ProjectDetailPage = lazy(() => import('@/pages/project/ProjectDetail'));
const ContactPage = lazy(() => import('@/pages/contact/ContactPage'));

// Layout
const WithFooter = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

const RouteChangeNotifier = () => {
  const location = useLocation();
  const { setPageReady, phase } = useLoading();

  useEffect(() => {
    if (phase === 'wait-for-ready') {
      requestAnimationFrame(() => {
        setPageReady();
      });
    }
  }, [location.pathname, phase, setPageReady]);

  return null;
};

const AppContent = () => {
  usePreloader();
  const location = useLocation();

  useScrollToTop();

  return (
    <>
      <Preloader />
      <Header />
      <CustomCursor />
      <Transition />
      <main id="main" className="bg-neutral-100">
        <Suspense fallback={null}>
          <RouteChangeNotifier />
          <Routes location={location} key={location.pathname}>
            <Route element={<WithFooter />}>
              <Route path={pages.home.href} element={<HomePage />} />
              <Route path={pages.about.href} element={<AboutPage />} />
              <Route path={pages.project.href} element={<ProjectPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            </Route>
            <Route path={pages.contact.href} element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

const App = () => (
  <>
    <SpeedInsights />
    <Router>
      <AppProviders>
        <AppContent />
      </AppProviders>
    </Router>
  </>
);

export default App;
