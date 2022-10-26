import React, { useState, useEffect } from "react";
import { Gauge } from "@ant-design/plots";
import { motion } from "framer-motion";
import "./Temperature.style.css";

const Temperature = () => {
  const [rate, setRate] = useState(0);
  useEffect(() => {
    const tempInterval = setInterval(() => {
      setRate(() => Math.random() * 0.05 + 0.65);
    }, 5000);
    return () => clearInterval(tempInterval);
  }, [rate]);

  const config = {
    percent: rate,
    type: "meter",
    innerRadius: 0.9,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ["#988fe3", "#f0ce87", "#D56062"],
    },
    width: 180,
    height: 180,
    indicator: {
      pointer: {
        style: {
          stroke: "#D0D0D0",
        },
      },
      pin: {
        style: {
          stroke: "#D0D0D0",
        },
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: "20px",
          lineHeight: "20px",
          color: "#f0f0f0",
        },
      },
    },
  };
  return (
    <motion.div className="temperature" whileHover={{ scale: 1.009 }}>
      <div className="temperature-header">Temperature</div>
      <Gauge {...config} />;
    </motion.div>
  );
};

export default Temperature;
