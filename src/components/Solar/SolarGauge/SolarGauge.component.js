import React, { useState, useEffect } from "react";
import "./SolarGauge.style.css";
import SoloGauge from "./SoloGauge.component";

const SolarGauge = () => {
  // create random rate control data for each gauge
  const [controlRate, setControlRate] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const generateControlRate = setInterval(() => {
      setControlRate(() => {
        return [
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
        ];
      });
    }, 1000);
    // cleanup the setInterval
    return () => clearInterval(generateControlRate);
  }, [controlRate]);

  return (
    <div className="solar-gauge">
      <div className="solar-gauge-container">
        <SoloGauge currentRate={controlRate[0]} GaugeName="UPS capacity" />
      </div>
      <div className="solar-gauge-container">
        <SoloGauge currentRate={controlRate[2]} GaugeName="UPS temp" />
      </div>
      <div className="solar-gauge-container">
        <SoloGauge currentRate={controlRate[4]} GaugeName="UPS load" />
      </div>
      <div className="solar-gauge-container">
        <SoloGauge currentRate={controlRate[6]} GaugeName="Power generation" />
      </div>
      <div className="solar-gauge-container">
        <SoloGauge currentRate={controlRate[1]} GaugeName="Inverter Capacity" />
      </div>
      <div className="solar-gauge-container">
        <SoloGauge currentRate={controlRate[3]} GaugeName="Inverter temp" />
      </div>
      <div className="solar-gauge-container">
        <SoloGauge currentRate={controlRate[5]} GaugeName="Inverter Load" />
      </div>

      <div className="solar-gauge-container">
        <SoloGauge currentRate={controlRate[7]} GaugeName="Power consumption" />
      </div>
    </div>
  );
};

export default SolarGauge;
