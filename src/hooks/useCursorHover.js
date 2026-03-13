import { useRef, useEffect } from 'react';
import { useCursor } from '../context/CursorContext';

/**
 * Custom hook to register an element for cursor HOVER effect only (non-sticky).
 * @param {string} variant - Cursor variant to use ('scale' | 'arrow' | 'scale2')
 * @param {string} fill - Optional custom fill class (e.g. 'bg-accent')
 * @returns {React.RefObject} Element ref to attach to the target element
 */
export const useCursorHover = (variant = 'scale', fill = null) => {
  const elementRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseEnter = () => {
      setCursor({
        isActive: true,
        variant,
        isSticky: false,
        stickyElement: null,
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

/**
 * Custom hook to register an element for STICKY cursor effect.
 * The cursor will snap to the element's center and follow with an elastic offset.
 * @param {string} variant - Cursor variant to use when hovering ('scale' | 'arrow' | 'scale2')
 * @param {string} fill - Optional custom fill class (e.g. 'bg-accent'). Falls back to CURSOR_FILLS if not provided.
 * @returns {React.RefObject} Element ref to attach to the target element
 */

