import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkModeEnabled);
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.classList.toggle('dark', darkMode);
    }
  }, [darkMode, isLoaded]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {isLoaded && children}
    </DarkModeContext.Provider>
  );
};