import React from "react";
import Header from "../../components/Header/Header.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import SolarEnergyChart from "../../components/Solar/SolarEnergyChart/SolarEnergyChart.component";
import SolarGauge from "../../components/Solar/SolarGauge/SolarGauge.component";
import SolarTransfer from "../../components/Solar/SolarTransfer/SolarTransfer.component";
import "./SolarScreen.style.css";

const SolarScreen = () => {
  return (
    <div className="solar-screen">
      <Sidebar />
      <div className="solar-screen-main">
        <Header />
        <div className="solar-screen-information">
          <div className="ss-gauge">
            <SolarGauge />
          </div>
          <div className="ss-chart">
            <SolarEnergyChart />
          </div>
        </div>
        <div className="solar-tranfer-container">
          <SolarTransfer />
        </div>
      </div>
    </div>
  );
};

export default SolarScreen;
