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
import { GiClockwork } from "react-icons/gi";
import "./TimerFunction.style.css";
import { AppState } from "../../../../context/GlobalState";
import IconButton from "../../../Button/IconButton/IconButton.component";

const TimerFunction = () => {
  const { acControls, setAcControls } = AppState();
  // function to update the timer level
  function alterTime(direction) {
    if (acControls.timerTime === 0 && !acControls.timer && direction === "down")
      return;
    if (!acControls.timer) {
      setAcControls((controls) => ({
        ...controls,
        timer: true,
      }));
    }
    switch (direction) {
      case "up": {
        if (acControls.timerTime >= 24) return;
        return setAcControls((controls) => ({
          ...controls,
          timerTime: controls.timerTime++,
        }));
      }
      case "down": {
        if (acControls.timerTime === 0) return;
        if (acControls.timerTime === 1) {
          return setAcControls((controls) => ({
            ...controls,
            timer: false,
            timerTime: controls.timerTime--,
          }));
        }
        return setAcControls((controls) => ({
          ...controls,
          timerTime: controls.timerTime--,
        }));
      }
    }
  }
  console.log(acControls.timerTime);
  return (
    <div
      className="timer-function"
      style={{
        backgroundColor: dark1,
      }}
    >
      <div
        className="timer-function-left-icon"
        onClick={() =>
          setAcControls((control) => ({
            ...control,
            timer: !control.timer,
          }))
        }
        whileTap={{ scale: 0.95 }}
      >
        <IconButton backgroundColor={acControls.timer ? accent2 : dark2}>
          <GiClockwork
            size={35}
            color={acControls.timer ? dark1 : accent2Light2}
          />
        </IconButton>
      </div>

      <div
        className="timer-function-right-text threeXl-text"
        style={{ color: accent2 }}
      >
        <p>
          {acControls.timerTime < 10 && "0"}
          {acControls.timerTime}
        </p>
        <span
          style={{
            color: accent2Light2,
          }}
        >
          Hr
        </span>
      </div>
      <div
        className="timer-function-left-text sm-text"
        style={{
          color: accent2Light2,
        }}
      >
        Timer
      </div>
      <div className="timer-function-right-function">
        <motion.div
          style={{ backgroundColor: dark2 }}
          onClick={() => alterTime("down")}
          whileTap={{ scale: 0.95, backgroundColor: accent1 }}
        >
          <MdOutlineArrowBackIos size={15} color={accent2} />
        </motion.div>
        <motion.div
          style={{ backgroundColor: dark2 }}
          onClick={() => alterTime("up")}
          whileTap={{ scale: 0.95, backgroundColor: accent1 }}
        >
          <MdOutlineArrowForwardIos size={15} color={accent2} />
        </motion.div>
      </div>
    </div>
  );
};

export default TimerFunction;
