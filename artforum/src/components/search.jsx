import React, { useContext, useState } from "react";
import { ThemeContext } from "../Themecontext";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/search.css";

function SearchBar({ placeholder = "Search...", onSearch }) {
  const { theme } = useContext(ThemeContext);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value); // 🔎 live search
  };

  const handleSearch = () => {
    if (query.trim() === "") return;

    onSearch?.(query);

    // ✅ redirect to /home if not already there
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
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
