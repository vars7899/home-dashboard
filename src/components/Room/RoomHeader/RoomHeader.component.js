import React from "react";
import { AppState } from "../../../context/GlobalState";
import { SelectRoomIcon } from "../RoomIcon.function";
import { accent1, accent2 } from "../../../styles/ColorScheme";
import "./RoomHeader.style.css";

const activeRoom = {
  borderColor: accent1,
  background: "-webkit-linear-gradient(top, #FFFFFF00, #5A57EC)",
  background: "-moz-linear-gradient(top, #FFFFFF00, #5A57EC)",
  background: `linear-gradient(to bottom, #FFFFFF00, ${accent1}30)`,
};

const RoomHeader = () => {
  const { roomList, selectedZone, setSelectedZone } = AppState();

  return (
    <div className="room-header">
      {roomList.map((roomName, index) => {
        return (
          <div
            key={`room-name-button-${index}`}
            className="room-header-room-name-container"
            style={selectedZone === roomName._id ? activeRoom : {}}
            onClick={() => setSelectedZone(roomName._id)}
          >
            <div className="room-header-room-name-container-icon">
              {SelectRoomIcon(roomName.type, 20, accent2)}
            </div>
            <div
              className="room-header-room-name-container-name"
              style={{ color: accent2 }}
            >
              {roomName.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomHeader;
