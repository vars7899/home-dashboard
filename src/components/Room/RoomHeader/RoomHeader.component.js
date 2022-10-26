import React from "react";
import { AppState } from "../../../context/GlobalState";
import "./RoomHeader.style.css";

const RoomHeader = () => {
  const { roomList } = AppState();
  return <div className="room-header"></div>;
};

export default RoomHeader;
