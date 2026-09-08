'use client';

import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { useMotionValue } from 'motion/react';
import gsap from 'gsap';
import { CURSOR_SIZES } from './constants';

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
    textColor: null,
    stickyElement: null,
    fill: null,
    cursorSize: null,
    idleFill: null,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorInfoRef = useRef({
    isActive: false,
    isSticky: false,
    stickyElement: null,
    cursorSize: CURSOR_SIZES.small.idle,
  });

  useEffect(() => {
    const sizes = CURSOR_SIZES[cursorState.size] || CURSOR_SIZES.small;
    cursorInfoRef.current = {
      isActive: cursorState.isActive,
      isSticky: cursorState.isSticky,
      stickyElement: cursorState.stickyElement,
      cursorSize: cursorState.isActive ? (cursorState.cursorSize ?? sizes.hovered) : sizes.idle,
    };
  }, [cursorState]);

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
    setCursorState(prev => ({
      isActive: false,
      variant: 'scale',
      text: null,
      isSticky: false,
      stickyElement: null,
      fill: null,
      cursorSize: null,
      textColor: null,
      idleFill: prev.idleFill,
    }));
  }, []);

  useEffect(() => {
    if (!hasMouse) return;

    let xTo, yTo, currentTarget = null, currentIdleRegion = null;

    const getConfig = el => ({
      magnetic: el.dataset.cursorMagnetic !== undefined,
      sticky: el.dataset.cursorSticky !== undefined,
      textColor: el.dataset.cursorTextColor || 'primary',
      fill: el.dataset.cursorFill || 'primary',
      size: el.dataset.cursorSize || 'small',
      content: el.dataset.cursorContent || null,
    });

    const handleMouseEnter = e => {
      const el = e.target.closest('[data-cursor]');
      if (!el || currentTarget === el) return;

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
        textColor: config.textColor,
      });
    };

    const handleMouseMove = e => {
      const { clientX, clientY } = e;

      // Magnetic
      if (currentTarget && xTo && yTo) {
        const config = getConfig(currentTarget);
        if (config.magnetic) {
          const { height, width, left, top } = currentTarget.getBoundingClientRect();
          xTo((clientX - (left + width / 2)) * 0.35);
          yTo((clientY - (top + height / 2)) * 0.35);
        }
      }

      // Cursor dot position (centering offset + sticky snap)
      const { isActive, isSticky, stickyElement, cursorSize } = cursorInfoRef.current;
      if (isActive && isSticky && stickyElement) {
        const { left, top, height, width } = stickyElement.getBoundingClientRect();
        const cx = left + width / 2;
        const cy = top + height / 2;
        mouseX.set(cx - cursorSize / 2 + (clientX - cx) * 0.1);
        mouseY.set(cy - cursorSize / 2 + (clientY - cy) * 0.1);
      } else {
        mouseX.set(clientX - cursorSize / 2);
        mouseY.set(clientY - cursorSize / 2);
      }
    };

    const handleMouseLeave = e => {
      const el = e.target.closest('[data-cursor]');
      if (!el) return;
      if (e.relatedTarget && el.contains(e.relatedTarget)) return;

      if (xTo && yTo) { xTo(0); yTo(0); }
      xTo = yTo = currentTarget = null;
      resetCursor();
    };

    const handleIdleRegionEnter = e => {
      const region = e.target.closest('[data-cursor-idle-fill]');
      if (!region || region === currentIdleRegion) return;
      currentIdleRegion = region;
      setCursor({ idleFill: region.dataset.cursorIdleFill });
    };

    const handleIdleRegionLeave = e => {
      const region = e.target.closest('[data-cursor-idle-fill]');
      if (!region) return;
      if (e.relatedTarget && region.contains(e.relatedTarget)) return;
      currentIdleRegion = null;
      setCursor({ idleFill: null });
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseover', handleIdleRegionEnter);
    document.addEventListener('mouseout', handleIdleRegionLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseover', handleIdleRegionEnter);
      document.removeEventListener('mouseout', handleIdleRegionLeave);
    };
  }, [hasMouse, setCursor, resetCursor, mouseX, mouseY]);

  return (
    <CursorContext.Provider value={{ cursorState, setCursor, resetCursor, hasMouse, mouseX, mouseY }}>
      {children}
    </CursorContext.Provider>
  );
}
