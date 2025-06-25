/* eslint-disable no-unused-vars */
import { useEffect, useCallback, useMemo } from 'react';
import './stickyCursor.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const StickyCursor = ({ stickyElement }) => {
  const cursorSize = 15;
  
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
    mouseX.set(clientX - cursorSize / 2);
    mouseY.set(clientY - cursorSize / 2);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [manageMouseMove]);

  return (
    <div className="cursor-container">
      <motion.div 
        style={{
          left: smoothX, 
          top: smoothY,
        }} 
        className="cursor">
      </motion.div>
    </div>
  )
}

export default StickyCursor;