import React from "react";
import { motion } from "framer-motion";
import {
  dark1,
  dark2,
  accent2,
  accent2Light2,
  accent1,
} from "../../../../styles/ColorScheme";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { GiAtSea } from "react-icons/gi";
import "./HumidityFunction.style.css";
import { AppState } from "../../../../context/GlobalState";
import IconButton from "../../../Button/IconButton/IconButton.component";

const HumidityFunction = () => {
  const { acControls, setAcControls } = AppState();
  // function to update the humidity level
  function alterMoister(direction) {
    if (
      acControls.moisterLevel === 0 &&
      !acControls.moister &&
      direction === "down"
    )
      return;
    if (!acControls.moister) {
      setAcControls((controls) => ({
        ...controls,
        moister: true,
      }));
    }
    switch (direction) {
      case "up": {
        if (acControls.moisterLevel === 100) return;
        return setAcControls((controls) => ({
          ...controls,
          moisterLevel: controls.moisterLevel++,
        }));
      }
      case "down": {
        if (acControls.moisterLevel === 0) return;
        if (acControls.moisterLevel === 1) {
          return setAcControls((controls) => ({
            ...controls,
            moister: false,
            moisterLevel: controls.moisterLevel--,
          }));
        }
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
      <motion.div
        className="humidity-function-left-icon"
        onClick={() =>
          setAcControls((control) => ({
            ...control,
            moister: !control.moister,
          }))
        }
        whileTap={{ scale: 0.95 }}
      >
        <IconButton backgroundColor={acControls.moister ? accent2 : dark2}>
          <GiAtSea
            size={35}
            color={acControls.moister ? dark1 : accent2Light2}
          />
        </IconButton>
      </motion.div>

      <div
        className="humidity-function-right-text threeXl-text"
        style={{ color: accent2 }}
      >
        <p>
          {acControls.moisterLevel < 10 && "0"}
          {acControls.moisterLevel}
        </p>
        <span
          style={{
            color: accent2Light2,
          }}
        >
          %
        </span>
      </div>
      <div
        className="humidity-function-left-text sm-text"
        style={{
          color: accent2Light2,
        }}
      >
        Humidity
      </div>
      <div className="humidity-function-right-function">
        <motion.div
          style={{ backgroundColor: dark2 }}
          onClick={() => alterMoister("down")}
          whileTap={{ scale: 0.95, backgroundColor: accent1 }}
        >
          <MdOutlineArrowBackIos size={15} color={accent2} />
        </motion.div>
        <motion.div
          style={{ backgroundColor: dark2 }}
          onClick={() => alterMoister("up")}
          whileTap={{ scale: 0.95, backgroundColor: accent1 }}
        >
          <MdOutlineArrowForwardIos size={15} color={accent2} />
        </motion.div>
      </div>
    </div>
  );
};

export default HumidityFunction;
