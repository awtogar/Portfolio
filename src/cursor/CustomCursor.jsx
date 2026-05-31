import { useCallback, useMemo, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { useCursor } from './CursorProvider';
import { CURSOR_SIZES, CURSOR_FILLS, CURSOR_CONTENTS, CURSOR_TEXT_COLORS } from './constants';

const CustomCursor = () => {
  const { cursorState, hasMouse } = useCursor();
  const { isActive, size, content, textColor, isSticky, stickyElement, fill, cursorSize: explicitSize } = cursorState;

  const cursorTrack = useRef(null);
  const isVisibleRef = useRef(true);

  const sizes = CURSOR_SIZES[size] || CURSOR_SIZES.small;
  const cursorSize = isActive ? (explicitSize ?? sizes.hovered) : sizes.idle;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothOptions = useMemo(
    () => ({
      damping: 20,
      stiffness: 300,
      mass: 0.5,
    }),
    []
  );

  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  const isActivelyTracking = hasMouse && cursorTrack.current;

  useEffect(() => {
    if (!isActivelyTracking) return;
    const checkVisibility = () => {
      if (!cursorTrack.current) return;
      isVisibleRef.current = window.getComputedStyle(cursorTrack.current).display !== 'none';
    };
    checkVisibility();
    window.addEventListener('resize', checkVisibility);
    return () => window.removeEventListener('resize', checkVisibility);
  }, [isActivelyTracking]);

  const manageMouseMove = useCallback(
    e => {
      if (!isVisibleRef.current) return;
      const { clientX, clientY } = e;

      if (isActive && isSticky && stickyElement) {
        const { left, top, height, width } = stickyElement.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };

        mouseX.set(center.x - cursorSize / 2 + distance.x * 0.1);
        mouseY.set(center.y - cursorSize / 2 + distance.y * 0.1);
      } else {
        mouseX.set(clientX - cursorSize / 2);
        mouseY.set(clientY - cursorSize / 2);
      }
    },
    [mouseX, mouseY, isActive, isSticky, stickyElement, cursorSize]
  );

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [manageMouseMove]);

  const cursorTextColor = CURSOR_TEXT_COLORS[textColor] || textColor || CURSOR_TEXT_COLORS.primary;
  const cursorFill = fill && CURSOR_FILLS[fill] ? CURSOR_FILLS[fill] : fill || CURSOR_FILLS.primary;
  const displayContent = CURSOR_CONTENTS[content] !== undefined ? CURSOR_CONTENTS[content] : content;

  if (!hasMouse) return null;

  return (
    <motion.div
      ref={cursorTrack}
      style={{
        left: smoothX,
        top: smoothY,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      className={`hidden md:block fixed rounded-full pointer-events-none z-[49] ${cursorFill}`}
    >
      <AnimatePresence>
        {isActive && content && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`w-full h-full flex items-center justify-center font-secondary font-bold text-sm tracking-tight pointer-events-none ${cursorTextColor}`}
          >
            {displayContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;
