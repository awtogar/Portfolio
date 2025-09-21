import { createContext, useContext, useRef, useCallback } from 'react';

// Inistialize
const StickyContext = createContext();

export function StickyProvider({ children }) {
  const stickyElementsRef = useRef([]);

  const registerStickyElement = useCallback(ref => {
    if (ref && !stickyElementsRef.current.some(item => item === ref)) {
      stickyElementsRef.current.push(ref);
      return true;
    }
    return false;
  }, []);

  const unregisterStickyElement = useCallback(ref => {
    if (ref) {
      const index = stickyElementsRef.current.indexOf(ref);
      if (index !== -1) {
        stickyElementsRef.current.splice(index, 1);
        return true;
      }
    }
    return false;
  }, []);

  return (
    <StickyContext.Provider
      value={{
        stickyElements: stickyElementsRef.current,
        registerStickyElement,
        unregisterStickyElement,
      }}
    >
      {children}
    </StickyContext.Provider>
  );
}

export const useSticky = () => {
  const context = useContext(StickyContext);
  if (context === undefined) {
    throw new Error('useSticky must be used within a StickyProvider');
  }
  return context;
};
