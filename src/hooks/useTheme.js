import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Automatically apply and set initial state without triggering delays
    const initialTheme = savedTheme === 'dark';
    
    setIsDark(initialTheme);
    document.documentElement.dataset.theme = initialTheme ? 'dark' : 'light';
    
    if (!savedTheme) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    
    // Abstract the DOM + Data mutation
    const applyTheme = () => {
      document.documentElement.dataset.theme = newIsDark ? 'dark' : 'light';
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      setIsDark(newIsDark);
    };

    // Use smooth, hardware-accelerated View Transition API where supported (super buttery!) 
    // Fallbacks perfectly to an instant change for older browsers, stopping layout stutter
    if (document.startViewTransition) {
      document.startViewTransition(applyTheme);
    } else {
      applyTheme();
    }
  };

  return { toggleTheme, isDark };
};