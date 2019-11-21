import React from "react";
import "./SideDrawer.css";

const SideDrawer = () => {
  return (
    <div className="sidenav">
      <span className="brand-logo">
        <span className="text-info" id="brandName">
          BWP
        </span>
        <span className="text-info">Business Wire Platform</span>
      </span>
      <hr />
      <a href="#">Home</a>
      <a className="text-info" href="#">
        Sign In
      </a>
      <a href="#">Help</a>
    </div>
  );
};

export default SideDrawer;
