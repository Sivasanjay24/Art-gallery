import React from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to="/"><img src="public\images\logo.jpg" alt="Logo"/></Link>
      </div>
      <div className="icon active">
        <Link to="/"><i className="fas fa-home"></i></Link>
      </div>
      <div className="icon">
        <i className="fas fa-plus-square"></i>
      </div>
      <div className="icon">
        <i className="fas fa-user"></i>
      </div>
      <div className="icon">
        <i className="fas fa-gear"></i>
      </div>
    </aside>
  );
}

export default Sidebar;
