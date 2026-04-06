import { createContext, useContext, useState, useCallback } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export function CursorProvider({ children }) {
  const [cursorState, setCursorState] = useState({
    isActive: false,
    size: 'small',
    content: null,
    textColor: 'text-secondary',
    isSticky: false,
    stickyElement: null,
    fill: 'primary',
    cursorSize: null,
  });

  const setCursor = useCallback((state) => {
    setCursorState((prev) => ({ ...prev, ...state }));
  }, []);

  const resetCursor = useCallback(() => {
    setCursorState({
      isActive: false,
      size: 'small',
      content: null,
      textColor: 'text-secondary',
      isSticky: false,
      stickyElement: null,
      fill: 'primary',
      cursorSize: null,
    });
  }, []);

  return (
    <CursorContext.Provider value={{ cursorState, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
}
