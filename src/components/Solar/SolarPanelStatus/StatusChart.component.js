import React from "react";
import { RingProgress } from "@ant-design/plots";

const StatusChart = ({ rate }) => {
  const config = {
    height: 200,
    width: 200,
    autoFit: false,
    percent: rate,
    color: ["#5B8FF9", "#E8EDF3"],
    statistic: {
      title: {
        style: {
          color: "#f0f0f0",
          fontSize: "3rem",
        },
        formatter: () => "AP",
      },
    },
  };
  return <RingProgress {...config} />;
};

export default StatusChart;
