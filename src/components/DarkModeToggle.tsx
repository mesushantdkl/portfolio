import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full z-50 shadow"
    >
      {dark ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-gray-800" />}
    </button>
  );
};

export default DarkModeToggle;
