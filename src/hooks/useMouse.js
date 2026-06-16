import { useState, useEffect, useRef } from 'react';

export const useMouseX = ref => {
  const [x, setX] = useState(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = e => {
      const rect = element.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      setX(Math.min(rect.width, Math.max(0, relativeX)));
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, [ref]);

  return x;
};
