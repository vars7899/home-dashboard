import React from "react";
import { AppState } from "../../../context/GlobalState";
import { ROOMData } from "../../../Data/ROOM";
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
                  <SmallDeviceCard
                    key={`room-appliance-small-card-${index}`}
                    type={item.name}
                    status={item.status}
                  />
                  //   <p>{JSON.stringify(item)}</p>
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
