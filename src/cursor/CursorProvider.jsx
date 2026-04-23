import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CursorContext = createContext(null);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export function CursorProvider({ children }) {
  const [hasMouse, setHasMouse] = useState(true);
  const [cursorState, setCursorState] = useState({
    isActive: false,
    variant: 'scale',
    text: null,
    isSticky: false,
    stickyElement: null,
    fill: null,
    cursorSize: null,
  });

  // Single source of truth for mouse capability detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHasMouse(mediaQuery.matches);
    const handler = (e) => setHasMouse(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const setCursor = useCallback((state) => {
    setCursorState((prev) => ({ ...prev, ...state }));
  }, []);

  const resetCursor = useCallback(() => {
    setCursorState({
      isActive: false,
      variant: 'scale',
      text: null,
      isSticky: false,
      stickyElement: null,
      fill: null,
      cursorSize: null,
    });
  }, []);

  return (
    <CursorContext.Provider value={{ cursorState, setCursor, resetCursor, hasMouse }}>
      {children}
    </CursorContext.Provider>
  );
}
