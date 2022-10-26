import React from "react";
import SolarApplianceSwitch from "./SolarApplianceSwitch.component";
import "./SolarTransferStatusBar.style.css";

const SolarTransferStatusBar = ({
  handleOperationFunc,
  operateSolar,
  operateBattery,
  operateGrid,
  operateHome,
  operateInverter,
}) => {
  return (
    <div className="stsb">
      <div className="stsb-header">Solar controls</div>
      <div className="stsb-menu-cluster">
        <SolarApplianceSwitch
          componentName="solar panels"
          handleOperationFunc={handleOperationFunc}
          operationEntry="solar"
          currentValue={operateSolar}
        />
        <SolarApplianceSwitch
          componentName="Inverter"
          handleOperationFunc={handleOperationFunc}
          operationEntry="inverter"
          currentValue={operateInverter}
        />
        <SolarApplianceSwitch
          componentName="Battery Supply"
          handleOperationFunc={handleOperationFunc}
          operationEntry="battery"
          currentValue={operateBattery}
        />
        <SolarApplianceSwitch
          componentName="Grid Supply"
          handleOperationFunc={handleOperationFunc}
          operationEntry="grid"
          currentValue={operateGrid}
        />
        <SolarApplianceSwitch
          componentName="Home Supply"
          handleOperationFunc={handleOperationFunc}
          operationEntry="home"
          currentValue={operateHome}
        />
      </div>
    </div>
  );
};

export default SolarTransferStatusBar;
