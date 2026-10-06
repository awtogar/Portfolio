'use client';

import { createContext, useContext, useState } from 'react';

const PreloaderContext = createContext(null);

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (!context) throw new Error('usePreloader must be used within PreloaderProvider');
  return context;
}

export function PreloaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  return <PreloaderContext.Provider value={{ isLoading, setIsLoading, isReady, setIsReady, progress, setProgress }}>{children}</PreloaderContext.Provider>;
}
