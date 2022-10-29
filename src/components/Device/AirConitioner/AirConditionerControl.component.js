import React from "react";
import { AppState } from "../../../context/GlobalState";
import {
  accent1H,
  accent1L,
  accent1S,
  accent2,
  dark1,
} from "../../../styles/ColorScheme";
import IconButton from "../../Button/IconButton/IconButton.component";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import "./AirConditionerControl.style.css";

// Component --> Marker Point on the Circular control
const MarkerMark = () => {
  const { acControls, setAcControls } = AppState();
  const limitArray = Array.from(
    { length: (acControls.temperature - 10) * 2 },
    (x) => 0
  );

  return (
    <div
      className="acc-temp-marker-container"
      style={{ transform: "rotate(-122.5deg)" }}
    >
      {limitArray.map((item, index) => (
        <div
          className="marker-mark"
          style={{
            position: "absolute",
            left: "50%",
            transform: `rotate(${index * 5}deg)`,
            transformOrigin: "0px 145px",
            background: `hsl(${
              accent1H - acControls.temperature * 7
            },${accent1S}%,${accent1L}%)`,
          }}
        ></div>
      ))}
    </div>
  );
};

// Component --> Air Condition Control Dial with other controls
const AirConditionerControl = () => {
  const { acControls, setAcControls } = AppState();

  // Function to increase the room temperature
  function handleTempIncrement() {
    if (acControls.temperature < acControls.tempUpperLimit) {
      setAcControls((control) => ({
        ...control,
        temperature: control.temperature + control.tempStep,
      }));
    }
  }
  // Function to decrease the room temperature
  function handleTempDecrement() {
    if (acControls.temperature > acControls.tempLowerLimit) {
      setAcControls((control) => ({
        ...control,
        temperature: control.temperature - control.tempStep,
      }));
    }
  }

  return (
    <div className="acc-container">
      <div className="acc-container-left">
        <div className="acc-input">
          <IconButton backgroundColor={dark1} onClick={handleTempIncrement}>
            <RiAddLine size={25} color={accent2} />
          </IconButton>
        </div>
        <div className="acc-temp">
          <div
            className="acc-temp-circle"
            style={{
              backgroundColor: `hsl(${
                accent1H - acControls.temperature * 7
              },${accent1S}%,${accent1L}%)`,
            }}
          ></div>
          <div
            className="acc-temp-inner-circle"
            style={{
              background: `url("https://res.cloudinary.com/dfcaehp0b/image/upload/v1667080182/887acca2ca2b132ec07f8c5f565cf1ae_tra6jx.gif")`,
              // `url("https://res.cloudinary.com/dfcaehp0b/image/upload/v1667080182/887acca2ca2b132ec07f8c5f565cf1ae_tra6jx.gif")`
              backgroundPosition: "center center",
              height: "98%",
              width: "98%",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="acc-temp-blend"
            style={{
              backdropFilter: `blur(40px)`,
            }}
          ></div>
          <div
            className="acc-temp-inner-text fiveXl-text"
            style={{ color: accent2 }}
          >
            {parseInt(acControls?.temperature)}
            <div className="temp-right-side">
              <span className="lg-text degree-symbol">°C</span>
              <span className="lg-text after-decimal">
                {acControls?.temperature.toString().split(".")[1]
                  ? "." + acControls?.temperature.toString().split(".")[1]
                  : "  "}
              </span>
            </div>
          </div>

          <MarkerMark />
        </div>
        <div className="acc-input">
          <IconButton backgroundColor={dark1} onClick={handleTempDecrement}>
            <RiSubtractLine size={25} color={accent2} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AirConditionerControl;
