
import React, { useState } from 'react';

export type ThemeSwitcherProps = {
  onThemeChange: (theme: string) => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
          color: theme === 'light' ? '#333' : '#fff',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
