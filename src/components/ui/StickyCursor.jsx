/* eslint-disable no-unused-vars */
import { useEffect, useCallback, useMemo, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react"
import { useSticky } from '../../context/StickyContext';
import { RiArrowRightUpLine } from '@remixicon/react';

// 1. defined size
const CURSOR_SIZES = {
  scale: { idle: 6, hovered: 60 },
  arrow: { idle: 6, hovered: 60 },
  scale2: { idle: 6, hovered: 60 },
};

// 2. defined fill color per variant
const CURSOR_FILLS = {
  scale: 'bg-primary',
  arrow: 'bg-primary',
  scale2: 'bg-primary',
};

const StickyCursor = () => {
  const { stickyElements, version } = useSticky();
  const [isHovered, setIsHovered] = useState(false);
  const [currentStickyElement, setCurrentStickyElement] = useState(null);
  const [currentVariant, setCurrentVariant] = useState('scale');
  const [currentFill, setCurrentFill] = useState(null);
  const cursorTrack = useRef(null);

  const sizes = CURSOR_SIZES[currentVariant] || CURSOR_SIZES.scale;
  const cursorSize = isHovered ? sizes.hovered : sizes.idle;

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

  // Check if cursor is visible (md breakpoint and up)
  const isCursorVisible = useCallback(() => {
    if (!cursorTrack.current) return false;
    const styles = window.getComputedStyle(cursorTrack.current);
    return styles.display !== 'none';
  }, []);

const manageMouseMove = useCallback(e => {
  if (!isCursorVisible()) return;
  const { clientX, clientY } = e;

  const isSticky = currentStickyElement?.isSticky;

  if (currentStickyElement?.ref?.current && isSticky) {
    // Sticky behavior — nempel ke center element
    const { left, top, height, width } = currentStickyElement.ref.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    if (isHovered) {
      const distance = { x: clientX - center.x, y: clientY - center.y };
      mouseX.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouseY.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      mouseX.set(clientX - cursorSize / 2);
      mouseY.set(clientY - cursorSize / 2);
    }
  } else {
    // Non-sticky — cursor normal ikut mouse
    mouseX.set(clientX - cursorSize / 2);
    mouseY.set(clientY - cursorSize / 2);
  }
}, [mouseX, mouseY, currentStickyElement, isHovered, cursorSize, isCursorVisible]);

  const manageMouseOver = useCallback((element, variant, sticky, fill) => {
  if (!isCursorVisible()) return;
  setIsHovered(true);
  setCurrentStickyElement({ ref: element, isSticky: sticky });
  setCurrentVariant(variant);
  setCurrentFill(fill);
}, [isCursorVisible]);

  const manageMouseLeave = useCallback(() => {
    if (!isCursorVisible()) return;
    setIsHovered(false);
    setCurrentStickyElement(null);
    setCurrentVariant('scale');
    setCurrentFill(null);
  }, [isCursorVisible]);

  useEffect(() => {
    if (stickyElements && stickyElements.length > 0) {
      const eventListeners = [];

      stickyElements.forEach(stickyItem => {
        const stickyElement = stickyItem.ref;
        const variant = stickyItem.variant || 'default';

        if (stickyElement && stickyElement.current) {
          const element = stickyElement.current;
          const mouseOverHandler = () => manageMouseOver(stickyElement, variant, stickyItem.sticky, stickyItem.fill);
          const mouseLeaveHandler = () => manageMouseLeave();

          element.addEventListener('mouseenter', mouseOverHandler);
          element.addEventListener('mouseleave', mouseLeaveHandler);

          eventListeners.push({
            element,
            mouseOverHandler,
            mouseLeaveHandler,
          });
        }
      });

      return () => {
        eventListeners.forEach(({ element, mouseOverHandler, mouseLeaveHandler }) => {
          element.removeEventListener('mouseenter', mouseOverHandler);
          element.removeEventListener('mouseleave', mouseLeaveHandler);
        });
      };
    }
  }, [stickyElements, version, manageMouseOver, manageMouseLeave]);

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [manageMouseMove]);

  const isArrowVariant = isHovered && currentVariant === 'arrow';
  // const isArrow2Variant = isHovered && currentVariant === 'arrow2';
  const cursorFill = currentFill || CURSOR_FILLS[currentVariant] || 'bg-primary';

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
      // z-index below header so it doesn't cover header icons
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
      </AnimatePresence>
    </motion.div>
  );
};

export default StickyCursor;
