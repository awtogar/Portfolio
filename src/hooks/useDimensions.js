import { useState, useEffect } from 'react';

export function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Initialize dimensions
    resize();
    
    // Add event listener
    window.addEventListener('resize', resize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return dimensions;
}