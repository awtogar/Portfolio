import { useCursorInteraction } from './useCursorInteraction';

/**
 * Custom hook to register an element for cursor HOVER effect only (non-sticky).
 * This acts as a backwards-compatible wrapper around useCursorInteraction.
 */
export const useCursorHoverContent = (variant = 'scale', text = null, fill = null) => {
  const { boundsRef } = useCursorInteraction({ variant, text, fill, magnetic: false, sticky: false });
  return boundsRef;
};

export const useCursorHover = useCursorHoverContent;
