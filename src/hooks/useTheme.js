import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      if (!savedTheme) localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-changing');
    
    const newIsDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);
    
    setTimeout(() => {
      document.documentElement.classList.remove('theme-changing');
    }, 700); 
  };

  return { toggleTheme, isDark };
};