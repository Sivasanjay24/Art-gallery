import React, { useState } from "react";
import "../css/search.css";

function SearchBar({ placeholder = "Search...", onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBar;
