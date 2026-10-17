'use client';

import { createContext, useContext, useRef, useState, useEffect, useMemo } from 'react';
import { useMotionValue, useSpring } from 'motion/react';

const CursorContext = createContext(null);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export function CursorProvider({ children }) {
  const [isSupported, setIsSupported] = useState(false);
  const [activeSubscription, setActiveSubscription] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth pointer tracking for follower
  const smoothOptions = useMemo(() => ({ damping: 20, stiffness: 300, mass: 0.5 }), []);
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  useEffect(() => {
    // Detect fine hover pointer
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsSupported(mediaQuery.matches);
    const handler = e => setIsSupported(e.matches);
    mediaQuery.addEventListener('change', handler);

    // Track mouse
    const moveHandler = e => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveHandler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
      window.removeEventListener('mousemove', moveHandler);
    };
  }, [mouseX, mouseY]);

  return (
    <CursorContext.Provider
      value={{
        isSupported,
        smoothX,
        smoothY,
        activeSubscription,
        setActiveSubscription,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}
