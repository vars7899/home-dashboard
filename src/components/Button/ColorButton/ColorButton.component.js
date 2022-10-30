import React from "react";
import "./ColorButton.style.css";

const ColorButton = ({ givenColor }) => {
  return (
    <div className="style-btn" style={{ backgroundColor: givenColor }}></div>
  );
};

export default ColorButton;
