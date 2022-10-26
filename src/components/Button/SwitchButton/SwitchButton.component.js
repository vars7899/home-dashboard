import React from "react";
import Switch from "react-switch";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { accent1, accent2, dark1, dark2 } from "../../../styles/ColorScheme";

const labelStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  fontWeight: "500",
  color: accent2,
  //   background: "red",
};

const PowerIcon = ({ status }) => {
  return (
    <div>
      <MdOutlinePowerSettingsNew
        size={20}
        color={status ? accent1 : accent2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          padding: "2px",
        }}
      />
    </div>
  );
};

const SwitchButton = ({ status, handleChange }) => {
  return (
    <Switch
      checked={status}
      height={30}
      width={72}
      uncheckedIcon={<p style={labelStyle}>OFF</p>}
      checkedIcon={<p style={labelStyle}>ON</p>}
      uncheckedHandleIcon={<PowerIcon status={status} />}
      checkedHandleIcon={<PowerIcon status={status} />}
      onChange={handleChange}
      offColor={dark1}
      onColor={dark1}
      offHandleColor={dark2}
      onHandleColor={dark2}
    />
  );
};

export default SwitchButton;
