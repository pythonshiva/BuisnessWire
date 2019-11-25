import React from "react";
import "./BackDrop.css";

const backDropContainer = props => {
  return <div className="backdrop" onClick={props.click} />;
};

export default backDropContainer;
