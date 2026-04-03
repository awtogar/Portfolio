import { useCallback, useMemo, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { useCursor } from '../../context/CursorContext';
import { RiArrowRightUpLine } from '@remixicon/react';

const CURSOR_SIZES = {
  scale: { idle: 6, hovered: 60 },
  arrow: { idle: 6, hovered: 60 },
  scale2: { idle: 6, hovered: 60 },
  text: { idle: 6, hovered: 70 },
};

const CURSOR_FILLS = {
  scale: 'bg-primary',
  arrow: 'bg-primary',
  scale2: 'bg-primary',
  text: 'bg-primary',
};

const CustomCursor = () => {
  const { cursorState } = useCursor();
  const { isActive, variant, text, isSticky, stickyElement, fill } = cursorState;
  
  const cursorTrack = useRef(null);
  const isVisibleRef = useRef(true);

  const sizes = CURSOR_SIZES[variant] || CURSOR_SIZES.scale;
  const cursorSize = isActive ? sizes.hovered : sizes.idle;

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

  // Cache visibility check — only re-evaluate on resize
  useEffect(() => {
    const checkVisibility = () => {
      if (!cursorTrack.current) return;
      isVisibleRef.current = window.getComputedStyle(cursorTrack.current).display !== 'none';
    };
    checkVisibility();
    window.addEventListener('resize', checkVisibility);
    return () => window.removeEventListener('resize', checkVisibility);
  }, []);

  const manageMouseMove = useCallback(
    (e) => {
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

  const isArrowVariant = isActive && variant === 'arrow' && !text;
  const isTextVariant = isActive && (variant === 'text' || text);
  const cursorFill = fill || CURSOR_FILLS[variant] || 'bg-primary';

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
        {isArrowVariant && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full h-full flex items-center justify-center"
          >
            <RiArrowRightUpLine className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
          </motion.div>
        )}
        {isTextVariant && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full h-full flex items-center justify-center font-secondary font-bold text-sm tracking-tight text-secondary pointer-events-none"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;
