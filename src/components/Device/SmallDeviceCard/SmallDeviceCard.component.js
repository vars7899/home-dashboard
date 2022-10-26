import React, { useState } from "react";
import DeviceIconSelector from "./DeviceIconSelector";
import Switch from "react-switch";
import { motion } from "framer-motion";
import "./SmallDeviceCard.style.css";

const SmallDeviceCard = ({ type, status: initialStatus }) => {
  const [status, setStatus] = useState(initialStatus);
  function handleChange() {
    setStatus((status) => !status);
  }
  return (
    <motion.div className="small" whileHover={{ scale: 1.05 }}>
      <div className="small-logo">
        <div className="small-logo-icon">
          {<DeviceIconSelector device={type} />}
        </div>
        <p className="small-logo-brand">{type}</p>
      </div>
      <div className="small-action">
        <p>{status ? "ON" : "OFF"}</p>
        <Switch
          checked={status}
          height={24}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={handleChange}
        />
      </div>
    </motion.div>
  );
};

export default SmallDeviceCard;
