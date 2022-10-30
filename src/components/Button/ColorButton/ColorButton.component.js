import React from "react";
import "./ColorButton.style.css";

const ColorButton = ({ givenColor, onClick }) => {
  return (
    <div
      className="style-btn"
      style={{
        backgroundColor: `hsla(${givenColor.hue},${givenColor.saturation}%,${givenColor.luminosity}%,${givenColor.alpha})`,
      }}
      onClick={() => onClick(givenColor)}
    ></div>
  );
};

export default ColorButton;
