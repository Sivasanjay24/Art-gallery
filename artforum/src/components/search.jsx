import React, { useContext, useState } from "react";
import { ThemeContext } from "../Themecontext";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/search.css";

function SearchBar({ placeholder = "Search...", onSearch }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  const handleSearch = () => {
    if (query.trim() === "") return;

    onSearch?.(query);

    if (location.pathname !== "/home") {
      navigate("/home");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`search-bar ${theme}`}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
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
