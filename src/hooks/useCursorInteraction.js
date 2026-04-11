import { useRef, useEffect, useState } from 'react';
import { useCursor } from '../context/CursorContext';
import gsap from 'gsap';

export const useCursorInteraction = ({
  content = null,
  textColor = 'text-secondary',
  size = 'small',
  magnetic = false,
  sticky = false,
  fill = 'primary',
  cursorSize = null,
} = {}) => {
  const targetRef = useRef(null);
  const boundsRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();
  const [hasMouse, setHasMouse] = useState(true);

  useEffect(() => {
    // Best practice: Detect actual pointer capability, not screen width, for tablets and mobile devices
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHasMouse(mediaQuery.matches);
    const handler = (e) => setHasMouse(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const target = targetRef.current;
    const hitArea = boundsRef.current || target;

    // Immediately abort if device lacks a mouse, eliminating 100% of calculation and listeners on mobile
    if (!hasMouse || !hitArea || (magnetic && !target)) return;

    let xTo, yTo;

    if (magnetic && target) {
      xTo = gsap.quickTo(target, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
      yTo = gsap.quickTo(target, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    }

    const handleMouseEnter = () => {
      setCursor({
        isActive: true,
        size,
        content,
        textColor,
        isSticky: Boolean(sticky),
        stickyElement: sticky ? hitArea : null,
        fill,
        cursorSize,
      });
    };

    const handleMouseLeave = () => {
      if (magnetic && xTo && yTo) {
        xTo(0);
        yTo(0);
      }
      resetCursor();
    };

    const handleMouseMove = e => {
      if (magnetic && xTo && yTo && target) {
        const { clientX, clientY } = e;
        const { height, width, left, top } = target.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      }
    };

    hitArea.addEventListener('mouseenter', handleMouseEnter);
    hitArea.addEventListener('mouseleave', handleMouseLeave);

    if (magnetic) {
      hitArea.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      hitArea.removeEventListener('mouseenter', handleMouseEnter);
      hitArea.removeEventListener('mouseleave', handleMouseLeave);
      if (magnetic) {
        hitArea.removeEventListener('mousemove', handleMouseMove);
      }
      resetCursor();
    };
  }, [content, textColor, size, magnetic, sticky, fill, cursorSize, hasMouse, setCursor, resetCursor]);

  return { targetRef, boundsRef };
};

export const useCursorHoverContent = (content = null, fill = 'primary', size = 'small', textColor = 'text-secondary') => {
  const { boundsRef } = useCursorInteraction({ content, size, fill, textColor, magnetic: false, sticky: false });
  return boundsRef;
};
