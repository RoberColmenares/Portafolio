// src/Contexts/ThemeContext.jsx
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();



export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true); // Estado de modo oscuro

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children }
    </ThemeContext.Provider>
  );
};
