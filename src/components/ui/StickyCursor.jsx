/* eslint-disable no-unused-vars */
import { useEffect, useCallback, useMemo, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from "motion/react"
import { useSticky } from '../../context/StickyContext';

const StickyCursor = () => {
  const { stickyElements } = useSticky();
  const [isHovered, setIsHovered] = useState(false);
  const [currentStickyElement, setCurrentStickyElement] = useState(null);
  const cursorSize = isHovered ? 60 : 6;
  const cursorTrack = useRef(null);

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

  const manageMouseMove = useCallback(
    e => {
      // Skip if cursor is not visible (mobile)
      if (!isCursorVisible()) return;
      const { clientX, clientY } = e;
      if (currentStickyElement && currentStickyElement.current) {
        const { left, top, height, width } = currentStickyElement.current.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };

        if (isHovered) {
          const distance = { x: clientX - center.x, y: clientY - center.y };

          mouseX.set(center.x - cursorSize / 2 + distance.x * 0.1);
          mouseY.set(center.y - cursorSize / 2 + distance.y * 0.1);
        } else {
          // Normal cursor movement
          mouseX.set(clientX - cursorSize / 2);
          mouseY.set(clientY - cursorSize / 2);
        }
      } else {
        // Fallback to normal cursor movement
        mouseX.set(clientX - cursorSize / 2);
        mouseY.set(clientY - cursorSize / 2);
      }
    },
    [mouseX, mouseY, currentStickyElement, isHovered, cursorSize, isCursorVisible]
  );

  const manageMouseOver = useCallback(
    element => {
      if (!isCursorVisible()) return;
      setIsHovered(true);
      setCurrentStickyElement(element);
    },
    [isCursorVisible]
  );

  const manageMouseLeave = useCallback(() => {
    if (!isCursorVisible()) return;
    setIsHovered(false);
    setCurrentStickyElement(null);
  }, [isCursorVisible]);

  useEffect(() => {
    if (stickyElements && stickyElements.length > 0) {
      const eventListeners = [];

      stickyElements.forEach(stickyElement => {
        if (stickyElement && stickyElement.current) {
          const element = stickyElement.current;
          const mouseOverHandler = () => manageMouseOver(stickyElement);
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
  }, [stickyElements, manageMouseOver, manageMouseLeave]);

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [manageMouseMove]);

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
      // 1. ini harus dibawah z index header supaya tidak tertutup icon headernya
      className="hidden lg:block fixed w-[15px] h-[15px] bg-primary rounded-full pointer-events-none z-[49]"
    ></motion.div>
  );
};

export default StickyCursor;
