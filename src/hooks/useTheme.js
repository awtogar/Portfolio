import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme === 'dark';
    
    setIsDark(initialTheme);
    document.documentElement.dataset.theme = initialTheme ? 'dark' : 'light';
    
    if (!savedTheme) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    
    const applyTheme = () => {
      document.documentElement.dataset.theme = newIsDark ? 'dark' : 'light';
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      setIsDark(newIsDark);
    };
    if (document.startViewTransition) {
      document.startViewTransition(applyTheme);
    } else {
      applyTheme();
    }
  };

  return { toggleTheme, isDark };
};