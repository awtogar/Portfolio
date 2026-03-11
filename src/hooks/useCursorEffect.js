import { useRef, useLayoutEffect } from 'react';
import { useSticky } from '../context/StickyContext';

/**
 * Custom hook to register an element for cursor HOVER effect only (non-sticky).
 * The cursor will change appearance on hover but will NOT snap to the element's center.
 * @param {string} variant - Cursor variant to use when hovering ('scale' | 'arrow' | 'scale2')
 * @returns {React.RefObject} Element ref to attach to the target element
 */
export const useCursorHover = (variant = 'scale') => {
  const { registerStickyElement, unregisterStickyElement } = useSticky();
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const el = elementRef.current;
    if (el) {
      registerStickyElement(elementRef, variant, false);
      return () => {
        unregisterStickyElement(elementRef);
      };
    }
  }, [elementRef.current, variant, registerStickyElement, unregisterStickyElement]);

  return elementRef;
};

/**
 * Custom hook to register an element for STICKY cursor effect.
 * The cursor will snap to the element's center and follow with an elastic offset.
 * @param {string} variant - Cursor variant to use when hovering ('scale' | 'arrow' | 'scale2')
 * @returns {React.RefObject} Element ref to attach to the target element
 */
export const useStickyElement = (variant = 'scale') => {
  const { registerStickyElement, unregisterStickyElement } = useSticky();
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const el = elementRef.current;
    if (el) {
      registerStickyElement(elementRef, variant, true);
      return () => {
        unregisterStickyElement(elementRef);
      };
    }
  }, [elementRef.current, variant, registerStickyElement, unregisterStickyElement]);

  return elementRef;
};
