import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 16px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
        margin: "10px",
        background: theme === "light" ? "#374151" : "#e0e7ff",
        color: theme === "light" ? "#f3f4f6" : "#1f2937",
        transition: "0.3s",
      }}
    >
      {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
    </button>
  );
}
