import React, { useState } from "react";
import Sidebar from "./components/sidebar.jsx";
import SearchBar from "./components/search.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <div className="searchbar-wrapper">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <div className="page-content">
          <Outlet context={{ searchQuery }} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
