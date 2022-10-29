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
import { GiComputerFan } from "react-icons/gi";
import "./FanFunction.style.css";
import { AppState } from "../../../../context/GlobalState";
import IconButton from "../../../Button/IconButton/IconButton.component";

const FanFunction = () => {
  const { acControls, setAcControls } = AppState();
  const fanSpeed = acControls?.fanSpeed;
  const fanOperation = acControls?.fan;

  // Function --> to update the fan speed of the air conditioner
  function alterFanSpeed(direction) {
    switch (direction) {
      case "up":
        setAcControls((controls) => ({
          ...controls,
          fanSpeed: controls.fanSpeed++,
        }));
        break;
      case "down":
        setAcControls((controls) => ({
          ...controls,
          fanSpeed: controls.fanSpeed--,
        }));
        break;
      default:
        return;
    }
  }

  return (
    <div
      className="fan-function"
      style={{
        backgroundColor: dark1,
      }}
    >
      <div className="fan-function-left-icon">
        <IconButton backgroundColor={acControls.fan ? accent1 : dark1}>
          <GiComputerFan size={35} color={accent2} />
        </IconButton>
      </div>

      <div className="fan-function-right-text">
        <div className="humidity-bars">
          <div
            className="hb hb-bar1"
            style={{
              background: fanOperation && fanSpeed >= 1 ? accent1 : dark1,
            }}
          ></div>
          <div
            className="hb hb-bar2"
            style={{
              background: fanOperation && fanSpeed >= 2 ? accent1 : dark1,
            }}
          ></div>
          <div
            className="hb hb-bar3"
            style={{
              background: fanOperation && fanSpeed >= 3 ? accent1 : dark1,
            }}
          ></div>
          <div
            className="hb hb-bar4"
            style={{
              background: fanOperation && fanSpeed >= 4 ? accent1 : dark1,
            }}
          ></div>
          <div
            className="hb hb-bar5"
            style={{
              background: fanOperation && fanSpeed >= 5 ? accent1 : dark1,
            }}
          ></div>
        </div>
      </div>
      <div
        className="fan-function-left-text sm-text"
        style={{
          color: accent2Light2,
        }}
      >
        Fan Speed
      </div>
      <div className="fan-function-right-function">
        <motion.div
          style={{ backgroundColor: accent2Light2 }}
          onClick={() => alterFanSpeed("down")}
          whileTap={{ scale: 0.95, backgroundColor: accent1 }}
        >
          <MdOutlineArrowBackIos size={15} color={accent2} />
        </motion.div>
        <motion.div
          style={{ backgroundColor: accent2Light2 }}
          onClick={() => alterFanSpeed("up")}
          whileTap={{ scale: 0.95, backgroundColor: accent1 }}
        >
          <MdOutlineArrowForwardIos size={15} color={accent2} />
        </motion.div>
      </div>
    </div>
  );
};

export default FanFunction;
