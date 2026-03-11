import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pages } from '../data/data';

const TransitionContext = createContext(null);

export function useTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error('useTransition must be used within TransitionProvider');
  return ctx;
}

export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // "idle" | "exit" | "enter"
  const [phase, setPhase] = useState('idle');
  const [targetPath, setTargetPath] = useState(null);
  const [pageTitle, setPageTitle] = useState('');
  const isTransitioning = phase !== 'idle';

  // Guard against double-triggers
  const transitionRef = useRef(false);

  const getPageTitle = useCallback((path) => {
    const normalized = path.endsWith('/') ? path.slice(0, -1) : path;
    const page = Object.values(pages).find(p => {
      const pNorm = p.href.endsWith('/') ? p.href.slice(0, -1) : p.href;
      return pNorm === normalized;
    });
    if (page) return page.title;

    // Handle dynamic routes like /projects/:slug
    if (normalized.startsWith('/projects/')) {
      return 'Project';
    }
    return '';
  }, []);

  const navigateTo = useCallback((path) => {
    // Don't transition to the same page
    if (path === location.pathname) return;
    // Don't start a new transition if one is in progress
    if (transitionRef.current) return;

    transitionRef.current = true;
    setTargetPath(path);
    setPageTitle(getPageTitle(path));
    setPhase('exit');
  }, [location.pathname, getPageTitle]);

  // Called when exit animation completes
  const onExitComplete = useCallback(() => {
    if (targetPath) {
      navigate(targetPath);
      // Small delay to let React render the new route before enter phase
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase('enter');
        });
      });
    }
  }, [targetPath, navigate]);

  // Called when enter animation completes
  const onEnterComplete = useCallback(() => {
    setPhase('idle');
    setTargetPath(null);
    setPageTitle('');
    transitionRef.current = false;
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        phase,
        isTransitioning,
        targetPath,
        pageTitle,
        navigateTo,
        onExitComplete,
        onEnterComplete,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
