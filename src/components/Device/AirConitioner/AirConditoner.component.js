import React from "react";
import IconButton from "../../Button/IconButton/IconButton.component";
import { GiWaterDrop, GiComputerFan } from "react-icons/gi";
import { style } from "./AirConditioner.style";
import { accent1, accent2, dark1 } from "../../../styles/ColorScheme";
import { AppState } from "../../../context/GlobalState";
import { motion } from "framer-motion";
import AirConditionerControl from "./AirConditionerControl.component";
import Humidity from "./Humidity/Humidity.component";
import FanFunction from "./FanFunction/FanFunction.component";
import HumidityFunction from "./HumidityFunction/HumidityFunction.component";
import "./AirCondition.style.css";

const AirConditioner = () => {
  const { acControls, setAcControls } = AppState();
  console.log(acControls.moister);
  return (
    <div style={style["ac-container"]}>
      <div style={style["ac-container-header"]}>
        <p style={style["ac-container-header-name"]} className="lg-text bold">
          Climate Control
        </p>
        <div style={style["ac-container-header-control"]}>
          <motion.div
            className="ac-container-header-control-box"
            onClick={() =>
              setAcControls((control) => ({
                ...control,
                moister: !control.moister,
              }))
            }
            whileTap={{ scale: 0.95 }}
            style={{ marginRight: "5px" }}
          >
            <IconButton backgroundColor={acControls.moister ? accent1 : dark1}>
              <GiWaterDrop size={25} color={accent2} />
            </IconButton>
          </motion.div>
          <div className="humidity-bar-container">
            <Humidity />
          </div>
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
      </div>
      <div className="air-condition-function">
        <FanFunction />
        <HumidityFunction />
      </div>
      <div style={style["ac-container-body"]}>
        <AirConditionerControl />
      </div>
    </div>
  );
};

export default AirConditioner;
