import React from "react";
import DeviceContainer from "../../components/Device/DeviceContainer/DeviceContainer.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import "./DeviceScreen.style.css";

const DeviceScreen = () => {
  return (
    <div className="device-screen">
      <Sidebar />
      <div className="device-main">
        <DeviceContainer />
      </div>
    </div>
  );
};

export default DeviceScreen;
