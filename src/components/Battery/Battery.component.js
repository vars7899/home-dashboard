import React from "react";
import BatteryChart from "./BatteryChart.component";
import { motion } from "framer-motion";
import "./Battery.style.css";

const Battery = () => {
  return (
    <motion.div className="battery" whileHover={{ scale: 1.009 }}>
      <div className="battery-header">
        <p>Battery status</p>
      </div>
      <div className="battery-chart">
        <BatteryChart />
      </div>
      <div className="battery-info">
        <div className="info-row">
          <p>Input voltage</p>
          <p>208 V</p>
        </div>
        <div className="info-row">
          <p>Output voltage</p>
          <p>220 V</p>
        </div>
        <div className="info-row">
          <p>Temperature</p>
          <p>35°C</p>
        </div>
        <div className="info-row">
          <p>Noise</p>
          <p>34 dB</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Battery;
