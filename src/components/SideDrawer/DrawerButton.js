import React from "react";
import "./DrawerButton.css";

const drawerButton = props => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  );
};

export default drawerButton;
