import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pages } from '@/data/navigation';
import { projects } from '@/data/projects';

const PageFlowContext = createContext(null);

export function usePageFlow() {
  const ctx = useContext(PageFlowContext);
  if (!ctx) throw new Error('usePageFlow must be used within PageFlowProvider');
  return ctx;
}

export function PageFlowProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [initialProgress, setInitialProgress] = useState(0);

  const [phase, setPhase] = useState('idle');
  const [targetPath, setTargetPath] = useState(null);
  const [pageTitle, setPageTitle] = useState('');
  const transitionRef = useRef(false);

  const isTransitioning = phase !== 'idle';
  const isLoading = isInitialLoading || isTransitioning;
  const canRevealContent = isReady && phase !== 'exit';

  const [revealEpoch, setRevealEpoch] = useState(0);

  const getPageTitle = useCallback(path => {
    const normalized = path.endsWith('/') ? path.slice(0, -1) : path;
    const page = Object.values(pages).find(p => {
      const pNorm = p.href.endsWith('/') ? p.href.slice(0, -1) : p.href;
      return pNorm === normalized;
    });
    if (page) return page.title;

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

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        navigate(path);
        return;
      }

      transitionRef.current = true;
      setTargetPath(path);
      setPageTitle(getPageTitle(path));
      setPhase('exit');
    },
    [location.pathname, getPageTitle, navigate]
  );

  const onExitComplete = useCallback(() => {
    if (targetPath) {
      navigate(targetPath);
      setPhase('wait-for-ready');
    }
  }, [targetPath, navigate]);

  const setPageReady = useCallback(() => {
    if (transitionRef.current) {
      setRevealEpoch(e => e + 1);
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
    <PageFlowContext.Provider
      value={{
        isInitialLoading,
        setIsInitialLoading,
        isReady,
        setIsReady,
        initialProgress,
        setInitialProgress,
        phase,
        isTransitioning,
        canRevealContent,
        revealEpoch,
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
    </PageFlowContext.Provider>
  );
}
