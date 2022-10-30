import React from "react";
import ColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.min.css";
import "./LightColorWheel.style.css";
import { AppState } from "../../../context/GlobalState";

const LightColorWheel = () => {
  const { colorWheel, setColorWheel } = AppState();
  const onInput = (hue) => {
    setColorWheel((prev) => {
      return {
        ...prev,
        hue,
      };
    });
  };
  return (
    <div
      className="lcw"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ColorPicker
        {...colorWheel}
        onInput={onInput}
        style={{ height: "260px", width: "260px" }}
      />
    </div>
  );
};

export default LightColorWheel;
