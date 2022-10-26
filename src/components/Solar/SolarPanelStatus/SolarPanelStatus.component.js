import React, { useState, useEffect } from "react";
import StatusChart from "./StatusChart.component";
import { motion } from "framer-motion";
import "./SolarPanelStatus.style.css";

const SolarPanelStatus = () => {
  const [rate, setRate] = useState(0);
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const tempInterval = setInterval(() => {
      setRate(() => Math.random() * 0.05 + 0.65);
      const current = new Date();
      setTimer(
        `${current.getHours()} : ${current.getMinutes()} : ${current.getSeconds()}`
      );
    }, 10000);
    return () => clearInterval(tempInterval);
  }, [rate]);

  return (
    <motion.div className="status" whileHover={{ scale: 1.009 }}>
      <div className="status-header">
        <p>Active panel status</p>
      </div>
      <div className="status-chart">
        <StatusChart rate={rate} />
      </div>
      <p className="status-active">Active solar panels</p>
      <p className="status-active-number">
        {10 + parseInt((rate * 13).toPrecision(1))}
      </p>
      <p className="status-small-text">Updated panel status</p>
      <p className="status-small-text">Today {timer}</p>
    </motion.div>
  );
};

export default SolarPanelStatus;
