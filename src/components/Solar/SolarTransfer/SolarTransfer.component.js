import React, { useState } from "react";
import solarCell from "../../../assets/solar-cell.png";
import batteryPack from "../../../assets/battery-pack.png";
import powerTower from "../../../assets/power-tower.png";
import home from "../../../assets/home.png";
import controlPanel from "../../../assets/control-panel.png";
import SolarAppliance from "./SolarAppliance.component";
import "./SolarTransfer.style.css";
import SolarConnection from "./SolarConnection.component";
import { AnimatePresence } from "framer-motion";
import SolarTransferStatusBar from "./SolarTransferStatusBar.component";

const SolarTransfer = () => {
  const [operateSolar, setOperateSolar] = useState(true);
  const [operateInverter, setOperateInverter] = useState(true);
  const [operateBattery, setOperateBattery] = useState(true);
  const [operateGrid, setOperateGrid] = useState(true);
  const [operateHome, setOperateHome] = useState(true);

  const handleOperation = (equipment) => {
    switch (equipment) {
      case "solar":
        setOperateSolar((operateSolar) => !operateSolar);
        break;
      case "inverter":
        setOperateInverter((operateInverter) => !operateInverter);
        setOperateBattery((operateBattery) => !operateBattery);
        setOperateGrid((operateGrid) => !operateGrid);
        setOperateHome((operateHome) => !operateHome);
        break;
      case "battery":
        if (!operateInverter) return;
        setOperateBattery((operateBattery) => !operateBattery);
        break;
      case "grid":
        if (!operateInverter) return;
        setOperateGrid((operateGrid) => !operateGrid);
        break;
      case "home":
        if (!operateInverter) return;
        setOperateHome((operateHome) => !operateHome);
        break;
    }
  };
  return (
    <div className="transfer-container">
      <div className="solar-transfer">
        <SolarAppliance
          imageSource={solarCell}
          classNameSource="solar-diagram"
          handleOperationFunc={handleOperation}
          operationEntry="solar"
          currentSystemState={operateSolar}
        />
        <SolarAppliance
          imageSource={controlPanel}
          classNameSource="inverter-diagram"
          handleOperationFunc={handleOperation}
          operationEntry="inverter"
          height={140}
          width={140}
          currentSystemState={operateInverter}
        />
        <SolarAppliance
          imageSource={batteryPack}
          classNameSource="battery-diagram"
          handleOperationFunc={handleOperation}
          operationEntry="battery"
          currentSystemState={operateBattery}
        />
        <SolarAppliance
          imageSource={powerTower}
          classNameSource="grid-diagram"
          handleOperationFunc={handleOperation}
          operationEntry="grid"
          currentSystemState={operateGrid}
        />
        <SolarAppliance
          imageSource={home}
          classNameSource="home-diagram"
          handleOperationFunc={handleOperation}
          operationEntry="home"
          currentSystemState={operateHome}
        />
        {/* Arrow list for every Node */}
        <AnimatePresence>
          <SolarConnection
            isDash={true}
            lineColor="#82C09A"
            startID="solar--solar-diagram"
            endID="inverter--inverter-diagram"
            isConnectionMade={operateSolar}
          />
          <SolarConnection
            startID="inverter--inverter-diagram"
            endID="battery--battery-diagram"
            isDash={true}
            withTail={true}
            lineColor="#3C7A89"
            isConnectionMade={operateBattery && operateInverter}
          />
          <SolarConnection
            startID="inverter--inverter-diagram"
            endID="grid--grid-diagram"
            lineColor="#D56062"
            isConnectionMade={operateInverter && operateGrid}
          />
          <SolarConnection
            startID="inverter--inverter-diagram"
            endID="home--home-diagram"
            lineColor="#D56062"
            isConnectionMade={operateInverter && operateHome}
          />
        </AnimatePresence>
      </div>
      <div className="solar-transfer-status">
        <SolarTransferStatusBar
          handleOperationFunc={handleOperation}
          operateSolar={operateSolar}
          operateBattery={operateBattery}
          operateGrid={operateGrid}
          operateHome={operateHome}
          operateInverter={operateInverter}
        />
      </div>
    </div>
  );
};

export default SolarTransfer;
