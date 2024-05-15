import { createContext, useState } from 'react';

const ThemeContext = createContext("app__bg");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("app__bg");

  const toggleTheme = () => {
    setTheme(curr => (curr === "app__bg" ? "app__white" : "app__bg"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext; // Exportujemo ThemeContext kao default export
