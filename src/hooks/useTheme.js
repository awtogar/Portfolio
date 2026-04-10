import { useEffect, useState } from 'react';

const getThemeTokens = (isDark) => {
  const tokens = [];
  if (isDark) tokens.push('dark');
  return tokens.join(' ');
};

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.dataset.theme = getThemeTokens(true);
    } else {
      setIsDark(false);
      document.documentElement.dataset.theme = getThemeTokens(false);
      if (!savedTheme) localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    document.documentElement.dataset.theme = `theme-changing ${newIsDark ? 'dark' : ''}`.trim();
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);

    setTimeout(() => {
      document.documentElement.dataset.theme = getThemeTokens(newIsDark);
    }, 700);
  };

  return { toggleTheme, isDark };
};