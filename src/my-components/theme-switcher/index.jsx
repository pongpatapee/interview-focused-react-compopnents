import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import "./style.css";

function MyThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <h1>My Component</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default MyThemedComponent;
