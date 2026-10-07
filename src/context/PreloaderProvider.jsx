'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { useMotionValue } from 'motion/react';

const PreloaderContext = createContext(null);

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (!context) throw new Error('usePreloader must be used within PreloaderProvider');
  return context;
}

export function PreloaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const progress = useMotionValue(0);

  const value = useMemo(
    () => ({ isLoading, setIsLoading, isReady, setIsReady, progress }),
    [isLoading, isReady, progress]
  );

  return <PreloaderContext.Provider value={value}>{children}</PreloaderContext.Provider>;
}