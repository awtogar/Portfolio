import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pages } from '@/data/navigation';
import { projects } from '@/data/projects';

const LoadingContext = createContext(null);

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error('useLoading must be used within LoadingProvider');
  return ctx;
}

export function LoadingProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // preloader state
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [initialProgress, setInitialProgress] = useState(0);

  // transisi state
  const [phase, setPhase] = useState('idle');
  const [targetPath, setTargetPath] = useState(null);
  const [pageTitle, setPageTitle] = useState('');
  const transitionRef = useRef(false);

  const isTransitioning = phase !== 'idle';
  const isLoading = isInitialLoading || isTransitioning;

  const getPageTitle = useCallback(path => {
    const normalized = path.endsWith('/') ? path.slice(0, -1) : path;
    const page = Object.values(pages).find(p => {
      const pNorm = p.href.endsWith('/') ? p.href.slice(0, -1) : p.href;
      return pNorm === normalized;
    });
    if (page) return page.title;

    // Handle dynamic routes
    if (normalized.startsWith('/projects/')) {
      const slug = normalized.split('/')[2];
      const project = projects.find(p => p.slug === slug);
      if (project) return project.client;
      return 'Project';
    }
    return '';
  }, []);

  const navigateTo = useCallback(
    path => {
      if (path === location.pathname) return;
      if (transitionRef.current) return;

      transitionRef.current = true;
      setTargetPath(path);
      setPageTitle(getPageTitle(path));
      setPhase('exit');
    },
    [location.pathname, getPageTitle]
  );

  const onExitComplete = useCallback(() => {
    if (targetPath) {
      navigate(targetPath);
      setPhase('wait-for-ready');
    }
  }, [targetPath, navigate]);

  const setPageReady = useCallback(() => {
    if (transitionRef.current) {
      setPhase('enter');
    }
  }, []);

  const onEnterComplete = useCallback(() => {
    setPhase('idle');
    setTargetPath(null);
    setPageTitle('');
    transitionRef.current = false;
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isInitialLoading,
        setIsInitialLoading,
        isReady,
        setIsReady,
        initialProgress,
        setInitialProgress,
        phase,
        isTransitioning,
        isLoading,
        targetPath,
        pageTitle,
        navigateTo,
        onExitComplete,
        onEnterComplete,
        setPageReady,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
