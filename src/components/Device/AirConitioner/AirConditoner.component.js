import React from "react";
import { accent2, dark2 } from "../../../styles/ColorScheme";
import { AppState } from "../../../context/GlobalState";
import AirConditionerControl from "./AirConditionerControl.component";
import FanFunction from "./FanFunction/FanFunction.component";
import HumidityFunction from "./HumidityFunction/HumidityFunction.component";
import TimerFunction from "./TimerFunction/TimerFunction.component";
import "./AirCondition.style.css";
import ModeFunction from "./ModeFunction/ModeFunction.component";

const AirConditioner = () => {
  const { acControls } = AppState();
  console.log(acControls.moister);
  return (
    <div className="ac-container" style={{ background: dark2 }}>
      <div className="ac-container-header">
        <p
          style={{ color: accent2 }}
          className="ac-container-header-name lg-text bold"
        >
          Climate Control
        </p>
      </div>
      <div className="ac-container-body">
        <AirConditionerControl />
        <ModeFunction />
      </div>
      <div className="air-condition-function">
        <FanFunction />
        <HumidityFunction />
        <TimerFunction />
      </div>
    </div>
  );
};

export default AirConditioner;
