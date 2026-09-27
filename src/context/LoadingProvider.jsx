'use client';

import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { projects } from '@/data/data';

const LoadingContext = createContext(null);

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error('useLoading must be used within LoadingProvider');
  return ctx;
}

const TRANSITION_ROUTES = [
  {
    // Projects route transition
    match: p => p === '/projects' || p.startsWith('/projects/'),
    getTitle: p => {
      const slug = p.split('/')[2];
      const project = projects.find(pr => pr.slug === slug);
      return project ? project.client : 'Projects';
    },
  },

  {
    // Guestbook route transition
    match: p => p === '/guestbook' || p.startsWith('/guestbook/'),
    getTitle: () => 'Welcome',
  },
  {
    // Home route back transition
    match: p => p === '/',
    getTitle: () => 'Loading',
  },
];

function isTransitionRoute(path) {
  return TRANSITION_ROUTES.some(r => r.match(path));
}

function getPageTitle(to, from) {
  const normalized = to.endsWith('/') ? to.slice(0, -1) : to;
  const normalizedFrom = from ? (from.endsWith('/') ? from.slice(0, -1) : from) : null;
  const route = TRANSITION_ROUTES.find(r => r.match(normalized));
  return route ? route.getTitle(normalized, normalizedFrom) : '';
}

export function LoadingProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();

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
  const navigateTo = useCallback(
    path => {
      if (path === pathname) return;
      if (transitionRef.current) return;

      const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const leavingProjectRoute = isTransitionRoute(pathname);
      const enteringProjectRoute = isTransitionRoute(path);

      if (prefersReducedMotion || (!leavingProjectRoute && !enteringProjectRoute)) {
        router.push(path);
        return;
      }

      transitionRef.current = true;
      setTargetPath(path);
      setPageTitle(getPageTitle(path, pathname));
      setPhase('exit');
    },
    [pathname, router]
  );

  // Scroll to a section by ID (with Lenis if available), or navigate to /#id if not on home.
  const scrollToSection = useCallback(
    (sectionId, lenisInstance) => {
      const isHome = pathname === '/';
      if (isHome) {
        window.history.replaceState(null, '', `/#${sectionId}`);
        if (lenisInstance) {
          lenisInstance.scrollTo(`#${sectionId}`, { offset: -80, duration: 1.4, easing: t => 1 - Math.pow(1 - t, 4) });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigateTo(`/#${sectionId}`);
      }
    },
    [pathname, navigateTo]
  );

  const onExitComplete = useCallback(() => {
    if (targetPath) {
      router.push(targetPath);
      setPhase('wait-for-ready');
    }
  }, [targetPath, router]);

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
        canRevealContent,
        revealEpoch,
        isLoading,
        targetPath,
        pageTitle,
        navigateTo,
        scrollToSection,
        onExitComplete,
        onEnterComplete,
        setPageReady,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
