import { useState, useEffect } from 'react';

export const useDeviceDetection = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Check for touch capability
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Check screen size
      const isSmallScreen = window.innerWidth < breakpoint;
      
      // Check user agent for mobile devices (additional check)
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      setIsMobile(isTouchDevice || isSmallScreen || isMobileUA);
    };

    // Debounced resize handler
    let resizeTimeout;
    const debouncedCheck = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkDevice, 150);
    };

    // Initial check
    checkDevice();

    // Listen for resize events
    window.addEventListener('resize', debouncedCheck);
    
    // Listen for orientation change (mobile devices)
    window.addEventListener('orientationchange', debouncedCheck);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', debouncedCheck);
      window.removeEventListener('orientationchange', debouncedCheck);
    };
  }, [breakpoint]);

  return isMobile;
};
