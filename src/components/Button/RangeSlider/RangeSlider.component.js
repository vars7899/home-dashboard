import React from "react";
import Slider from "rc-slider";
import { accent1, accent2 } from "../../../styles/ColorScheme";
import "rc-slider/assets/index.css";
import { AppState } from "../../../context/GlobalState";

const RangeSlider = ({
  givenMin,
  givenMax,
  givenValue,
  givenType,
  givenStep = 1,
}) => {
  const { setColorWheel } = AppState();
  console.log(givenType);
  return (
    <div style={{ width: "100%" }}>
      <Slider
        min={givenMin}
        max={givenMax}
        step={givenStep}
        trackStyle={{ backgroundColor: accent1 }}
        handleStyle={{ backgroundColor: accent2 }}
        value={givenValue}
        onChange={(current) =>
          setColorWheel((prev) => ({
            ...prev,
            [givenType]: current,
          }))
        }
      />
    </div>
  );
};

export default RangeSlider;
