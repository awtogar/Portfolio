import { useCursorInteraction } from './useCursorInteraction';

/**
 * Custom hook to register an element for cursor HOVER effect only (non-sticky).
 * This acts as a backwards-compatible wrapper around useCursorInteraction.
 */
export const useCursorHoverContent = (content = null, fill = 'primary', size = 'small', textColor = 'text-secondary') => {
  const { boundsRef } = useCursorInteraction({ content, size, fill, textColor, magnetic: false, sticky: false });
  return boundsRef;
};

export const useCursorHover = useCursorHoverContent;
