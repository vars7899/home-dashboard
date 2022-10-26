import React from "react";
import PropTypes from "prop-types";
import "./IconButton.style.css";

const IconButton = ({ children, backgroundColor = "#22252d" }) => {
  return (
    <div className="icon-btn" style={{ background: backgroundColor }}>
      {children}
    </div>
  );
};

IconButton.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
};

export default IconButton;
