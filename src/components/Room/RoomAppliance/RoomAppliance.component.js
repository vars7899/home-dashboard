import React from "react";
import { AppState } from "../../../context/GlobalState";
import { ROOMData } from "../../../Data/ROOM";
import AirConditioner from "../../Device/AirConitioner/AirConditoner.component";
import DeviceCard from "../../Device/DeviceCard/DeviceCard.component";
import { motion } from "framer-motion";
import LightSettingPanel from "../../Lights/LightSettingPanel/LightSettingPanel.component";
import "./RoomAppliance.style.css";

const RoomAppliance = () => {
  const { selectedZone, listType } = AppState();
  return (
    <div className="room-appliance-container">
      <motion.div
        initial={{ height: "100%" }}
        // animate={{ opacity: 1 }}
        // transition={{ opacity: { ease: "linear" }, layout: { duration: 0.3 } }}
        className="air-condition-container"
      >
        <AirConditioner />
      </motion.div>
      <div className="light-container">
        <LightSettingPanel />
      </div>
      <div className="room-appliance">
        {ROOMData.filter((currentID) => currentID._id === selectedZone).map(
          (roomName, index) => {
            return (
              <div
                key={`current-room-active-${index}`}
                className="room-appliance-cluster"
                style={
                  listType
                    ? {
                        gridTemplateColumns: "1fr",
                      }
                    : {
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(350px, 1fr))",
                      }
                }
              >
                {roomName?.appliance.map((item, index) => {
                  return (
                    <DeviceCard
                      key={`room-appliance-small-card-${index}`}
                      status={item.status}
                      name={item.name}
                      companyName={item.brand}
                      imageLink={item.image}
                    />
                  );
                })}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RoomAppliance;
