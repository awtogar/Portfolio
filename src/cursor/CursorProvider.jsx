import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import gsap from 'gsap';

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

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHasMouse(mediaQuery.matches);
    const handler = e => setHasMouse(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const setCursor = useCallback(state => {
    setCursorState(prev => ({ ...prev, ...state }));
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

  useEffect(() => {
    if (!hasMouse) return;

    let xTo,
      yTo,
      currentTarget = null;

    const getConfig = el => ({
      magnetic: el.dataset.cursorMagnetic !== undefined,
      sticky: el.dataset.cursorSticky !== undefined,
      fill: el.dataset.cursorFill || 'primary',
      size: el.dataset.cursorSize || 'small',
      content: el.dataset.cursorContent || null,
    });

    const handleMouseEnter = e => {
      const el = e.target.closest('[data-cursor]');
      if (!el) return;
      if (currentTarget === el) return;

      const config = getConfig(el);
      currentTarget = el;

      if (config.magnetic) {
        xTo = gsap.quickTo(el, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
        yTo = gsap.quickTo(el, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });
      }

      setCursor({
        isActive: true,
        size: config.size,
        content: config.content,
        isSticky: config.sticky,
        stickyElement: config.sticky ? el : null,
        fill: config.fill,
      });
    };

    const handleMouseMove = e => {
      if (!currentTarget) return;
      const config = getConfig(currentTarget);
      if (!config.magnetic || !xTo || !yTo) return;

      const { clientX, clientY } = e;
      const { height, width, left, top } = currentTarget.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = e => {
      const el = e.target.closest('[data-cursor]');
      if (!el) return;

      const relatedTarget = e.relatedTarget;
      if (relatedTarget && el.contains(relatedTarget)) return;

      if (xTo && yTo) {
        xTo(0);
        yTo(0);
      }
      xTo = yTo = currentTarget = null;
      resetCursor();
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [hasMouse, setCursor, resetCursor]);

  return <CursorContext.Provider value={{ cursorState, setCursor, resetCursor, hasMouse }}>{children}</CursorContext.Provider>;
}
