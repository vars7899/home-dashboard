import React from "react";
import { AppState } from "../../../context/GlobalState";
import { ROOMData } from "../../../Data/ROOM";
import DeviceCard from "../../Device/DeviceCard/DeviceCard.component";
import SmallDeviceCard from "../../Device/SmallDeviceCard/SmallDeviceCard.component";
import "./RoomAppliance.style.css";

const RoomAppliance = () => {
  const { selectedZone } = AppState();
  return (
    <div className="room-appliance">
      {ROOMData.filter((currentID) => currentID._id === selectedZone).map(
        (roomName, index) => {
          return (
            <div
              key={`current-room-active-${index}`}
              className="room-appliance-cluster"
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
  );
};

export default RoomAppliance;
