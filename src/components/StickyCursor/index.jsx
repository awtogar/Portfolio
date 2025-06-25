/* eslint-disable no-unused-vars */
import { useEffect, useCallback, useMemo, useState } from 'react';
import './stickyCursor.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const StickyCursor = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);
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
    
    if (stickyElement && stickyElement.current) {
      const { left, top, height, width } = stickyElement.current.getBoundingClientRect();
      
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
  }, [mouseX, mouseY, stickyElement, isHovered, cursorSize]);

  const manageMouseOver = useCallback(() => {
    setIsHovered(true);
  }, []);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    if (stickyElement && stickyElement.current) {
      const element = stickyElement.current;
      element.addEventListener("mouseenter", manageMouseOver);
      element.addEventListener("mouseleave", manageMouseLeave);
      
      return () => {
        element.removeEventListener("mouseenter", manageMouseOver);
        element.removeEventListener("mouseleave", manageMouseLeave);
      };
    }
  }, [stickyElement, manageMouseOver, manageMouseLeave]);

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    }
  }, [manageMouseMove]);

  return (
    <div className="cursor-container">
      <motion.div 
        style={{
          left: smoothX, 
          top: smoothY,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize
        }}
        className="cursor">
      </motion.div>
    </div>
  )
}

export default StickyCursor;
