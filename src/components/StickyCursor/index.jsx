/* eslint-disable no-unused-vars */
import { useEffect, useCallback, useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const StickyCursor = ({ stickyElements }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentStickyElement, setCurrentStickyElement] = useState(null);
  const cursorSize = isHovered ? 60 : 15;
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothOptions = useMemo(() => ({ 
    damping: 20, 
    stiffness: 300, 
    mass: 0.5 
  }), []);

  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  const manageMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    
    if (currentStickyElement && currentStickyElement.current) {
      const { left, top, height, width } = currentStickyElement.current.getBoundingClientRect();
      
      // Center position of the stickyElement
      const center = { x: left + width / 2, y: top + height / 2 };
      
      if (isHovered) {
        // Distance between the mouse pointer and the center of the custom cursor
        const distance = { x: clientX - center.x, y: clientY - center.y };
        
        // Move mouse to center of stickyElement + slightly move it towards the mouse pointer
        mouseX.set((center.x - cursorSize / 2) + (distance.x * 0.1));
        mouseY.set((center.y - cursorSize / 2) + (distance.y * 0.1));
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
  }, [mouseX, mouseY, currentStickyElement, isHovered, cursorSize]);

  const manageMouseOver = useCallback((element) => {
    setIsHovered(true);
    setCurrentStickyElement(element);
  }, []);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
    setCurrentStickyElement(null);
  }, []);

  useEffect(() => {
    if (stickyElements && stickyElements.length > 0) {
      const eventListeners = [];
      
      stickyElements.forEach((stickyElement) => {
        if (stickyElement && stickyElement.current) {
          const element = stickyElement.current;
          const mouseOverHandler = () => manageMouseOver(stickyElement);
          const mouseLeaveHandler = () => manageMouseLeave();
          
          element.addEventListener("mouseenter", mouseOverHandler);
          element.addEventListener("mouseleave", mouseLeaveHandler);
          
          eventListeners.push({
            element,
            mouseOverHandler,
            mouseLeaveHandler
          });
        }
      });
      
      return () => {
        eventListeners.forEach(({ element, mouseOverHandler, mouseLeaveHandler }) => {
          element.removeEventListener("mouseenter", mouseOverHandler);
          element.removeEventListener("mouseleave", mouseLeaveHandler);
        });
      };
    }
  }, [stickyElements, manageMouseOver, manageMouseLeave]);

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    }
  }, [manageMouseMove]);


  return (
    <div className="content_cursor">
      <motion.div 
        style={{
          left: smoothX, 
          top: smoothY,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize
        }}
        className="hidden sm:block fixed w-[15px] h-[15px] bg-shade-800 rounded-full pointer-events-none">
      </motion.div>
    </div>
  )
}

export default StickyCursor;
