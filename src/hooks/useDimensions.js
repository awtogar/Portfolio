import { useState, useEffect } from 'react';

export function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
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