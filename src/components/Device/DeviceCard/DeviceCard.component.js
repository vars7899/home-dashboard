import React, { useState } from "react";
import { accent2, accent2Light1, dark2 } from "../../../styles/ColorScheme";
import SwitchButton from "../../Button/SwitchButton/SwitchButton.component";
import { motion } from "framer-motion";
import "./DeviceCard.style.css";

// https://res.cloudinary.com/dfcaehp0b/image/upload/v1666813253/Google_GoogleHome_f7071a80-60fa-48b0-bd36-872739222f45_1024x1024_dssimm.webp

const DeviceCard = ({
  name,
  status: initialStatus,
  // temp company name
  companyName = "Samsung",
  imageLink = "https://res.cloudinary.com/dfcaehp0b/image/upload/v1666813253/Google_GoogleHome_f7071a80-60fa-48b0-bd36-872739222f45_1024x1024_dssimm.webp",
}) => {
  const [status, setStatus] = useState(initialStatus);
  function handleChange() {
    setStatus((status) => !status);
  }
  return (
    <motion.div
      className="dc-container"
      style={{ background: dark2 }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="dc-content">
        <div className="dc-content-name">
          <div
            className="dc-content-brand sm-text"
            style={{ color: accent2Light1 }}
          >
            {companyName}
          </div>
          <div
            className="dc-content-appliance-name lg-text bold"
            style={{ color: accent2 }}
          >
            {name}
          </div>
        </div>
        <div className="dc-content-switch">
          <SwitchButton status={status} handleChange={handleChange} />
        </div>
      </div>
      <div className="dc-image">
        <img src={imageLink} alt="home appliance image" id="applianceImage" />
      </div>
    </motion.div>
  );
};

export default DeviceCard;
