import { useState, useEffect, createContext } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const root = document.documentElement; // HTML root element
    root.classList.remove("light");
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.removeItem("theme");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") ?? "light";
    document.documentElement.classList.add(localTheme);
    setTheme(localTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
