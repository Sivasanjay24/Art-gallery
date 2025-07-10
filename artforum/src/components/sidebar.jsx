import React from "react";
import "../css/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="/logo.jpg" alt="Logo"/>
      </div>
      <div className="icon active">
        <i className="fas fa-home"></i>
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
