import { Route, BrowserRouter as Router, Routes, Outlet, useLocation } from 'react-router-dom';
import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Preloader, Header, CustomCursor, Footer, Transition } from '@/components';
import AppProviders from '@/context/AppProviders';
import {
  HomePage,
  AboutPage,
  ProjectPage,
  ProjectDetailPage,
  ContactPage,
} from '@/pages';
import { pages } from '@/data/data';
import { useScrollToTop, usePreloader } from '@/hooks';

// Layout for pages that include the Footer
const WithFooter = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

const AppContent = () => {
  const isLoading = usePreloader();
  const location = useLocation();

  useScrollToTop();

  return (
    <>
      <Preloader isLoading={isLoading} />
      <Header />
      <CustomCursor />
      <Transition />

      <main id="main" className="bg-neutral-100">
        <Routes location={location} key={location.pathname}>
          <Route element={<WithFooter />}>
            <Route path={pages.home.href} element={<HomePage />} />
            <Route path={pages.about.href} element={<AboutPage />} />
            <Route path={pages.project.href} element={<ProjectPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          </Route>
          <Route path={pages.contact.href} element={<ContactPage />} />
        </Routes>
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
