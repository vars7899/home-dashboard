import React, { useState, useEffect } from "react";
import { Liquid } from "@ant-design/plots";

const BatteryChart = () => {
  const [rate, setRate] = useState(0);
  useEffect(() => {
    const tempInterval = setInterval(() => {
      setRate(() => Math.random() * 0.05 + 0.7);
    }, 5000);
    return () => clearInterval(tempInterval);
  }, [rate]);

  const config = {
    percent: rate,
    shape: "circle",
    width: 200,
    height: 200,
    outline: {
      border: 2,
      distance: 4,
    },
    wave: {
      length: 128,
    },
  };
  return <Liquid {...config} />;
};

export default BatteryChart;
