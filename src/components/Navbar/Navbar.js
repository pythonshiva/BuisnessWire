import React from "react";
import DrawerButton from "../SideDrawer/DrawerButton";

import "./Navbar.css";

const NavBar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar-logo">
          <a href="/">BWP</a>
        </div>
        <div className="separator" />
        <div className="toolbar-navigation-items">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
