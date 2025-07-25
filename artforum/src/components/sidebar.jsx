import React from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to="/">
          <img src="public\images\logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="icon">
        <Link to="/" className="icon-link">
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
      <div className="icon">
        <div className="settings">
          <i className="fas fa-lightbulb"></i>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
