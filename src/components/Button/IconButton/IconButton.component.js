import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { dark1 } from "../../../styles/ColorScheme";
import "./IconButton.style.css";

const IconButton = ({ children, backgroundColor = { dark1 }, onClick }) => {
  return (
    <motion.div
      className="icon-btn"
      style={{ background: backgroundColor }}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      {children}
    </motion.div>
  );
};

IconButton.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
