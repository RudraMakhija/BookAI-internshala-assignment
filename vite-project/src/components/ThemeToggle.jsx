import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div
      onClick={toggleTheme}
      className="relative inline-flex items-center cursor-pointer bg-gray-300 dark:bg-gray-600 rounded-full w-24 h-8"
    >
      <span
        className={`absolute top-0 left-0 w-12 h-8 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-full bg-gray-900' : 'translate-x-0 bg-white'
        }`}
      />
      <span className="absolute inset-y-0 left-1 text-gray-700 dark:text-gray-300 flex items-center px-2">
      🌙
      </span>
      <span className="absolute inset-y-0 right-1 text-gray-700 dark:text-gray-300 flex items-center px-2">
         ☀️
      </span>
    </div>
  );
};

export default ThemeToggle;
