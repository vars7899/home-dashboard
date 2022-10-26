import React from "react";
import PropTypes from "prop-types";
import { Gauge } from "@ant-design/plots";
import { motion } from "framer-motion";
import "./SoloGauge.style.css";

const SoloGauge = ({ currentRate, GaugeName }) => {
  const config = {
    percent: currentRate,
    type: "meter",
    innerRadius: 0.75,
    height: 220,
    width: 220,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ["#988FE3", "#F0CE87", "#D56062"],
    },
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
          //   Color of the text dependant on the currentRate of value passed to the gauge
          color:
            currentRate <= 0.3
              ? "#988FE3"
              : currentRate > 0.3 && currentRate <= 0.7
              ? "#F0CE87"
              : "#D56062",
        },
      },
    },
  };
  return (
    <motion.div className="solo">
      <p className="solo-header">{GaugeName}</p>
      <Gauge {...config} />
    </motion.div>
  );
};

SoloGauge.propTypes = {
  currentRate: PropTypes.number,
  GaugeName: PropTypes.string,
};

export default SoloGauge;
