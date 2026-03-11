import { useRef, useEffect } from 'react';
import { useSticky } from '../context/StickyContext';

/**
 * Custom hook to create a ref for a sticky element and register it in the StickyContext
 * @param {string} variant - Cursor variant to use when hovering this element ('default' | 'project')
 * @returns {React.RefObject} Element ref to attach to sticky elements
 */
export const useStickyElement = (variant = 'scale', sticky = false) => {
  const { registerStickyElement, unregisterStickyElement } = useSticky();
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      registerStickyElement(elementRef, variant, sticky);
    }
    return () => {
      if (elementRef.current) {
        unregisterStickyElement(elementRef);
      }
    };
  }, [registerStickyElement, unregisterStickyElement, variant, sticky]);

  return elementRef;
};
