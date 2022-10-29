import React from "react";
import { motion } from "framer-motion";
import {
  dark1,
  accent2,
  accent2Light2,
  accent1,
} from "../../../../styles/ColorScheme";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";
import "./HumidityFunction.style.css";
import { AppState } from "../../../../context/GlobalState";

const HumidityFunction = () => {
  const { acControls, setAcControls } = AppState();
  // function to update the humidity level
  function alterMoister(direction) {
    switch (direction) {
      case "up": {
        return setAcControls((controls) => ({
          ...controls,
          moisterLevel: controls.moisterLevel++,
        }));
      }
      case "down": {
        return setAcControls((controls) => ({
          ...controls,
          moisterLevel: controls.moisterLevel--,
        }));
      }
    }
  }
  return (
    <div
      className="humidity-function"
      style={{
        backgroundColor: dark1,
      }}
    >
      <div className="humidity-function-left">
        <div className="humidity-function-left-icon">
          <GiWaterDrop size={25} color={accent2} />
        </div>
        <div
          className="humidity-function-left-text sm-text"
          style={{
            color: accent2Light2,
          }}
        >
          Humidity
        </div>
      </div>
      <div className="humidity-function-right">
        <div
          className="humidity-function-right-text xl-text"
          style={{ color: accent2 }}
        >
          {acControls.moisterLevel}
          <span
            style={{
              color: accent2Light2,
            }}
          >
            %
          </span>
        </div>
        <div className="humidity-function-right-function">
          <motion.div
            style={{ backgroundColor: accent2Light2 }}
            onClick={() => alterMoister("down")}
            whileTap={{ scale: 0.95, backgroundColor: accent1 }}
          >
            <MdOutlineArrowBackIos size={15} color={accent2} />
          </motion.div>
          <motion.div
            style={{ backgroundColor: accent2Light2 }}
            onClick={() => alterMoister("up")}
            whileTap={{ scale: 0.95, backgroundColor: accent1 }}
          >
            <MdOutlineArrowForwardIos size={15} color={accent2} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HumidityFunction;
