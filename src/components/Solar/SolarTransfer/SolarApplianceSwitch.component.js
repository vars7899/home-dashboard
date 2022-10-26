import React from "react";
import Switch from "react-switch";
import "./SolarTransferStatusBar.style.css";

const SolarApplianceSwitch = ({
  componentName,
  handleOperationFunc,
  currentValue,
  operationEntry,
}) => {
  return (
    <div className="stsb-menu-container">
      <p>
        {componentName}
        <span>{currentValue ? "ON" : "OFF"}</span>
      </p>
      <Switch
        checked={currentValue}
        height={24}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => handleOperationFunc(operationEntry)}
      />
    </div>
  );
};

export default SolarApplianceSwitch;
