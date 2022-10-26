import React from "react";
import Battery from "../../components/Battery/Battery.component";
import DeviceCluster from "../../components/Device/DeviceCluster/DeviceCluster.component";
import Header from "../../components/Header/Header.component";
import History from "../../components/History/History.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import GenerationAndConsumption from "../../components/Solar/GenerationAndConsumption/GenerationAndConsumption.component";
import SolarPanelStatus from "../../components/Solar/SolarPanelStatus/SolarPanelStatus.component";
import Temperature from "../../components/Temperature/Temperature.component";
import "./HomeScreen.style.css";

const HomeScreen = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-main">
        <Header />
        <div className="home-main-bricks">
          <div className="gac-container">
            <GenerationAndConsumption />
          </div>
          <div className="battery-container">
            <Battery />
          </div>
          <div className="solar-container">
            <SolarPanelStatus />
          </div>
          <div className="history-container">
            <History />
          </div>
          <div className="temp-container">
            <Temperature />
          </div>
          <div className="device-container">
            <DeviceCluster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
