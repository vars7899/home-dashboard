import React from "react";
import SmallDeviceCard from "../SmallDeviceCard/SmallDeviceCard.component";
import { IoIosAddCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import "./DeviceCluster.style.css";
import { DEVICEData } from "../../../Data/DEVICE";

const DeviceCluster = () => {
  return (
    <div className="cluster">
      {DEVICEData.map((device, index) => (
        <SmallDeviceCard
          key={`small-device-controller-${index}`}
          type={device.name}
          status={device.status}
        />
      ))}
      <motion.div className="add-card" whileHover={{ scale: 1.05 }}>
        <div className="add-card-logo">
          <IoIosAddCircleOutline size={40} color="#f0f0f0" />
        </div>
        <p className="add-logo-text">Add device</p>
      </motion.div>
    </div>
  );
};

export default DeviceCluster;
