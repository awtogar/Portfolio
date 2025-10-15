import { createContext, useContext } from 'react';

// Context for Lenis instance and controls
export const LenisContext = createContext(null);

// Hook to access Lenis context
export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context;
};