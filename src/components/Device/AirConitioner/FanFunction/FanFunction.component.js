import React from "react";
import { motion } from "framer-motion";
import {
  dark1,
  accent2,
  accent2Light2,
  accent1,
  dark2,
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
    if (!fanOperation) {
      setAcControls((controls) => ({
        ...controls,
        fan: true,
      }));
    }
    switch (direction) {
      case "up":
        if (fanSpeed === 10) return;
        return setAcControls((controls) => ({
          ...controls,
          fanSpeed: controls.fanSpeed++,
        }));
      case "down":
        if (fanSpeed === 0) return;
        if (fanSpeed === 1) {
          return setAcControls((controls) => ({
            ...controls,
            fan: false,
            fanSpeed: controls.fanSpeed--,
          }));
        }
        return setAcControls((controls) => ({
          ...controls,
          fanSpeed: controls.fanSpeed--,
        }));
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
      <motion.div
        className="fan-function-left-icon"
        onClick={() =>
          setAcControls((control) => ({
            ...control,
            fan: !control.fan,
          }))
        }
        whileTap={{ scale: 0.95 }}
      >
        <IconButton backgroundColor={acControls.fan ? accent2 : dark2}>
          <GiComputerFan
            size={35}
            color={acControls.fan ? dark1 : accent2Light2}
          />
        </IconButton>
      </motion.div>

      <div className="fan-function-right-text">
        <div className="humidity-bars">
          <div
            className="hb hb-bar1"
            style={{
              background: fanOperation && fanSpeed >= 1 ? accent2 : dark2,
            }}
          ></div>
          <div
            className="hb hb-bar2"
            style={{
              background: fanOperation && fanSpeed >= 2 ? accent2 : dark2,
            }}
          ></div>
          <div
            className="hb hb-bar3"
            style={{
              background: fanOperation && fanSpeed >= 3 ? accent2 : dark2,
            }}
          ></div>
          <div
            className="hb hb-bar4"
            style={{
              background: fanOperation && fanSpeed >= 4 ? accent2 : dark2,
            }}
          ></div>
          <div
            className="hb hb-bar5"
            style={{
              background: fanOperation && fanSpeed >= 5 ? accent2 : dark2,
            }}
          ></div>
          <div
            className="hb hb-bar6"
            style={{
              background: fanOperation && fanSpeed >= 6 ? accent2 : dark2,
            }}
          ></div>
          <div
            className="hb hb-bar7"
            style={{
              background: fanOperation && fanSpeed >= 7 ? accent2 : dark2,
            }}
          ></div>
          <div
            className="hb hb-bar8"
            style={{
              background: fanOperation && fanSpeed >= 8 ? accent2 : dark2,
            }}
          ></div>
          <div
            className="hb hb-bar9"
            style={{
              background: fanOperation && fanSpeed >= 9 ? accent2 : dark2,
            }}
          ></div>
          <div
            className="hb hb-bar10"
            style={{
              background: fanOperation && fanSpeed >= 10 ? accent2 : dark2,
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
        <p>Fan Speed</p>
      </div>
      <div className="fan-function-right-function">
        <motion.div
          style={{ backgroundColor: dark2 }}
          onClick={() => alterFanSpeed("down")}
          whileTap={{ scale: 0.95, backgroundColor: accent1 }}
        >
          <MdOutlineArrowBackIos size={15} color={accent2} />
        </motion.div>
        <motion.div
          style={{ backgroundColor: dark2 }}
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
