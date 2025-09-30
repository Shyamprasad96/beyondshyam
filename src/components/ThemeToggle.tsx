'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      // Only switch to light if explicitly set
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark mode for new visitors or if dark is set
      setIsDark(true);
      document.documentElement.classList.add('dark');
      if (!theme) {
        localStorage.setItem('theme', 'dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}