import { useRef, useEffect } from 'react';
import { useSticky } from '../providers/StickyProvider';

/**
 * Custom hook to create a ref for a sticky element and register it in the StickyContext
 * @returns {React.RefObject} Element ref to attach to sticky elements
 */
export const useStickyElement = () => {
  const { registerStickyElement, unregisterStickyElement } = useSticky();
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      registerStickyElement(elementRef);
    }

    return () => {
      if (elementRef.current) {
        unregisterStickyElement(elementRef);
      }
    };
  }, [registerStickyElement, unregisterStickyElement]);

  return elementRef;
};
