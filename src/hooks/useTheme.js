import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Only use saved preference, default to light if none exists
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      // Set to light theme by default if no preference is saved
      if (!savedTheme) localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);
  };

  return { toggleTheme, isDark };
};