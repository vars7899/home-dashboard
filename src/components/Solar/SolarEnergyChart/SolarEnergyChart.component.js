import React from "react";
import { Line } from "@ant-design/plots";
import { SOLARData } from "../../../Data/SOLAR";
import "./SolarEnergyChart.style.css";

const SolarEnergyChart = () => {
  const config = {
    data: SOLARData,
    xField: "time",
    yField: "value",
    seriesField: "category",
  };

  return (
    <div className="solar-energy-chart" style={{ padding: "20px" }}>
      <Line {...config} />
    </div>
  );
};

export default SolarEnergyChart;
