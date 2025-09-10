import React, { useContext } from "react";
import "../css/search.css";
import { ThemeContext } from "../Themecontext";

function SearchBar({ placeholder = "Search...", onSearch }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [query, setQuery] = React.useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      
      <div
        className={`theme-switch ${theme}`}
        onClick={toggleTheme}
        role="button"
        aria-label="Toggle Theme"
      >
        <div className="knob">{theme === "light" ? "☀" : "⏾"}</div>
      </div>
    </div>
  );
}

export default SearchBar;
