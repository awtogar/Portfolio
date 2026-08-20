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



function isProjectRoute(path) {
  return path === '/projects' || path.startsWith('/projects/');
}

function getPageTitle(path) {
  const normalized = path.endsWith('/') ? path.slice(0, -1) : path;
  if (normalized === '/projects') return 'Projects';
  if (normalized.startsWith('/projects/')) {
    const slug = normalized.split('/')[2];
    const project = projects.find(p => p.slug === slug);
    return project ? project.client : 'Project';
  }
  return '';
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

  // Navigate with curtain transition — only meaningful for project routes.
  // For home or section scroll, call scrollToSection instead.
  const navigateTo = useCallback(
    path => {
      if (path === pathname) return;
      if (transitionRef.current) return;

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const leavingProjectRoute = isProjectRoute(pathname);
      const enteringProjectRoute = isProjectRoute(path);

      if (prefersReducedMotion || (!leavingProjectRoute && !enteringProjectRoute)) {
        router.push(path);
        return;
      }

      transitionRef.current = true;
      setTargetPath(path);
      setPageTitle(getPageTitle(path));
      setPhase('exit');
    },
    [pathname, router]
  );

  // Scroll to a section by ID (with Lenis if available), or navigate to /#id if not on home.
  const scrollToSection = useCallback(
    (sectionId, lenisInstance) => {
      const isHome = pathname === '/';
      if (isHome) {
        // Update URL bar without triggering Next.js router (avoids double-scroll from HashScrollHandler)
        window.history.replaceState(null, '', `/#${sectionId}`);
        if (lenisInstance) {
          lenisInstance.scrollTo(`#${sectionId}`, { offset: -80, duration: 1.4, easing: t => 1 - Math.pow(1 - t, 4) });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Use navigateTo so the curtain transition fires when leaving a project route.
        // HashScrollHandler picks up the hash after arrival.
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
