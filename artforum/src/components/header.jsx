import React from "react";
import Search from './search.jsx'
import Sidebar from './sidebar.jsx'
import "../css/header.css";

function Header() {
  return (
    <>
    <header className="header">
      {/* <div>
      </div> */}
      <Search/>
      {/* <div className="profile">
        <img
          src="/account.png"
          alt="Profile"
          className="profile-icon"
        />
      </div> */}
    </header>
    <Sidebar/>
    </>
  );
}

export default Header;
