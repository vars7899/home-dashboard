import React from "react";
import { accent1, dark1, accent2 } from "../../../../styles/ColorScheme";
import { AppState } from "../../../../context/GlobalState";
import { GiComputerFan } from "react-icons/gi";
import IconButton from "../../../Button/IconButton/IconButton.component";
import { motion } from "framer-motion";

import "./Humidity.style.css";

const Humidity = () => {
  const { acControls, setAcControls } = AppState();
  const fanSpeed = acControls?.fanSpeed;
  const fanOperation = acControls?.fan;

  // Function --> to update the fan speed of the air conditioner
  function alterFanSpeed(direction) {
    switch (direction) {
      case "add":
        setAcControls((controls) => ({
          ...controls,
          fanSpeed: controls.fanSpeed++,
        }));
        break;
      case "remove":
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
    <div className="humidity">
      {/* <div className="humidity-bars">
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
      </div> */}
      <motion.div
        className="ac-container-header-control-box"
        onClick={() =>
          setAcControls((control) => ({
            ...control,
            fan: !control.fan,
          }))
        }
        whileTap={{ scale: 0.95 }}
      >
        <IconButton backgroundColor={acControls.fan ? accent1 : dark1}>
          <GiComputerFan size={25} color={accent2} />
        </IconButton>
      </motion.div>
    </div>
  );
};

export default Humidity;
