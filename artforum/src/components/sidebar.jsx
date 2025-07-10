import React from "react";
import "../css/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="icon">
        <img src="/logo.jpg" alt="Logo"/>
      </div>
      <div className="icon active">
        <i className="fas fa-home"></i>
      </div>
      <div className="icon">
        <i className="fas fa-search"></i>
      </div>
      <div className="icon">
        <i className="fas fa-plus-square"></i>
      </div>
      <div className="icon">
        <i className="fas fa-user"></i>
      </div>
    </aside>
  );
}

export default Sidebar;
