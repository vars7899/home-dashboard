import React from "react";
import IconButton from "../../Button/IconButton/IconButton.component";
import { IoAdd, IoGrid, IoReorderFour } from "react-icons/io5";
import { accent1, accent2Light1 } from "../../../styles/ColorScheme";
import RoomHeader from "../../Room/RoomHeader/RoomHeader.component";
import { motion } from "framer-motion";
import "./DeviceContainer.style.css";
import RoomAppliance from "../../Room/RoomAppliance/RoomAppliance.component";
import { AppState } from "../../../context/GlobalState";

const DeviceContainer = () => {
  const { listType, setListType } = AppState();

  return (
    <div className="device-container">
      <div className="device-container-header">
        <p className="device-container-name xxl-text bold text-accent2">
          Devices
        </p>
        <div className="device-container-function">
          <div
            className="layout-control-button"
            onClick={() => {
              setListType((prev) => !prev);
            }}
          >
            <IconButton>
              {listType ? (
                <IoReorderFour size={25} color={accent2Light1} />
              ) : (
                <IoGrid size={25} color={accent2Light1} />
              )}
            </IconButton>
          </div>
          <IconButton backgroundColor={accent1}>
            <IoAdd size={25} />
          </IconButton>
        </div>
      </div>
      <motion.div layout className="device-container-zones">
        <div className="device-container-zones-header">
          <RoomHeader />
        </div>
        <RoomAppliance />
      </motion.div>
    </div>
  );
};

export default DeviceContainer;
