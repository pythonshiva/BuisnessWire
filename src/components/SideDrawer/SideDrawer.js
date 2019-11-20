import React from "react";
import "./SideDrawer.css";

const SideDrawer = () => {
  return (
    <div className="sidenav">
      <p>
        <a href="#">Business Wire Platform</a>
      </p>
      <hr className="ruler" />
      <a href="#">Home</a>
      <a className="text-info" href="#">
        Sign In
      </a>
      <a href="#">Help</a>
    </div>
  );
};

export default SideDrawer;
