import React from "react";
import { Link } from "react-router-dom";
import { MenuOptions } from "./Menu.data";
import { GiCrumblingBall } from "react-icons/gi";
import { MenuIconSelector } from "./MenuIconSelector";
import { motion } from "framer-motion";
import "./Sidebar.style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <motion.div className="sidebar-logo" whileHover={{ scale: 1.25 }}>
        <div className="sidebar-logo-icon">
          <GiCrumblingBall size={40} color="#62a1ff" />
        </div>
        <div className="sidebar-logo-brand">
          <p>svar</p>
          <p>system</p>
        </div>
      </motion.div>
      <div className="sidebar-menu">
        <p>Admin tools</p>
        <ul>
          {MenuOptions.map((option, index) => (
            <motion.li
              key={`menu-option-${index}`}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#f0f0f025",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={option.location} className="sidebar-option">
                <div className="option-icon">
                  <MenuIconSelector type={option.name} />
                </div>
                <p className="option-name">{option.name}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="sidebar-copyright">
        <p>© SVAR System 2022</p>
      </div>
    </div>
  );
};

export default Sidebar;
