import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to="/home">
          <img src="public/images/logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="icon">
        <Link to="/home" className="icon-link">
          <i className="fa fa-home"></i>
        </Link>
      </div>

      <div className="icon">
        <Link to="/createpost" className="icon-link">
          <i className="fas fa-plus-square"></i>
        </Link>
      </div>

      <div className="icon">
        <Link to="/profile" className="icon-link">
          <i className="fas fa-user"></i>
        </Link>
      </div>

      <div className="ellipsis" ref={dropdownRef}>
        <div className="settings" onClick={toggleDropdown}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        {isDropdownOpen && (
          <div className="dropdown">
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
