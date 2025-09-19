import React, { useContext } from "react";
import "../css/search.css";
import { ThemeContext } from "../Themecontext";

function SearchBar({ placeholder = "Search...", onSearch }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [query, setQuery] = React.useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch?.(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>

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
