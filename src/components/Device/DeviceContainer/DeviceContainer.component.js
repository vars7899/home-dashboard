import React from "react";
import IconButton from "../../Button/IconButton/IconButton.component";
import { IoAdd, IoGrid } from "react-icons/io5";
import { accent1, accent2Light1 } from "../../../styles/ColorScheme";
import "./DeviceContainer.style.css";
import RoomHeader from "../../Room/RoomHeader/RoomHeader.component";

const DeviceContainer = () => {
  return (
    <div className="device-container">
      <div className="device-container-header">
        <p className="device-container-name xl-text bold text-accent2">
          Devices
        </p>
        <div className="device-container-function">
          <IconButton>
            <IoGrid size={25} color={accent2Light1} />
          </IconButton>
          <IconButton backgroundColor={accent1}>
            <IoAdd size={25} />
          </IconButton>
        </div>
      </div>
      <div className="device-container-zones-header">
        <RoomHeader />
      </div>
    </div>
  );
};

export default DeviceContainer;
