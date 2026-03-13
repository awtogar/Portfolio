import { useRef, useEffect } from 'react';
import { useCursor } from '../context/CursorContext';

/**
 * Custom hook to register an element for STICKY cursor effect.
 * The cursor will snap to the element's center and follow with an elastic offset.
 * @param {string} variant - Cursor variant to use ('scale' | 'arrow' | 'scale2')
 * @param {string} fill - Optional custom fill class
 * @returns {React.RefObject} Element ref to attach to sticky elements
 */
export const useStickyElement = (variant = 'scale', fill = null) => {
  const elementRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseEnter = () => {
      setCursor({
        isActive: true,
        variant,
        isSticky: true,
        stickyElement: el,
        fill,
      });
    };

    const handleMouseLeave = () => {
      resetCursor();
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      resetCursor();
    };
  }, [variant, fill, setCursor, resetCursor]);

  return elementRef;
};