import React, { useState } from "react";
import { accent2, dark2 } from "../../../styles/ColorScheme";
import { AppState } from "../../../context/GlobalState";
import AirConditionerControl from "./AirConditionerControl.component";
import FanFunction from "./FanFunction/FanFunction.component";
import HumidityFunction from "./HumidityFunction/HumidityFunction.component";
import TimerFunction from "./TimerFunction/TimerFunction.component";
import "./AirCondition.style.css";
import ModeFunction from "./ModeFunction/ModeFunction.component";
import SwitchButton from "../../Button/SwitchButton/SwitchButton.component";
import { AnimatePresence, motion } from "framer-motion";

const AirConditioner = () => {
  const [showMoreFunction, setShowMoreFunction] = useState(false);
  const { acFunction, setAcFunction } = AppState();

  return (
    <motion.div
      layout
      className="ac-container"
      style={{ background: dark2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="ac-container-header">
        <p
          style={{ color: accent2 }}
          className="ac-container-header-name lg-text bold"
        >
          Climate Control
        </p>
        <div className="ac-container-header-btn">
          <SwitchButton
            status={acFunction}
            handleChange={() => setAcFunction((current) => !current)}
          />
        </div>
      </div>
      <div className="ac-container-body">
        <AirConditionerControl />
        <ModeFunction
          showMoreFunction={showMoreFunction}
          setShowMoreFunction={setShowMoreFunction}
        />
      </div>
      <AnimatePresence>
        {showMoreFunction && (
          <motion.div
            className="air-condition-function"
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            exit={{ opacity: 0, x: 1000 }}
          >
            <FanFunction />
            <HumidityFunction />
            <TimerFunction />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AirConditioner;
