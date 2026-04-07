import { useCursorInteraction } from './useCursorInteraction';

export const useCursorHoverContent = (content = null, fill = 'primary', size = 'small', textColor = 'text-secondary') => {
  const { boundsRef } = useCursorInteraction({ content, size, fill, textColor, magnetic: false, sticky: false });
  return boundsRef;
};

export const useCursorHover = useCursorHoverContent;
