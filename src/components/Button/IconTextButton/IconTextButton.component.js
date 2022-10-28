import React from "react";
import { motion } from "framer-motion";
import "./IconTextButton.style.css";

const IconTextButton = ({
  children,
  givenText,
  givenBackground,
  textColor,
}) => {
  return (
    <motion.div
      className="ic-btn"
      style={{
        background: givenBackground,
        color: textColor,
        padding: "20px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <div className="ic-btn-text">{children}</div>
      <div className="ic-btn-icon lg-text">{givenText}</div>
    </motion.div>
  );
};

export default IconTextButton;
