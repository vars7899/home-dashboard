import React from "react";
import { BsSpeedometer2, BsCalendar3 } from "react-icons/bs";
import { TbBoxMargin } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { SlSupport } from "react-icons/sl";
import { FaSolarPanel } from "react-icons/fa";
import { BiDevices } from "react-icons/bi";

export const MenuIconSelector = ({ type }) => {
  switch (type) {
    case "Dashboard":
      return <BsSpeedometer2 size={20} color="#f0f0f0" />;
    case "Zones Control":
      return <TbBoxMargin size={20} color="#f0f0f0" />;
    case "Settings":
      return <AiOutlineSetting size={20} color="#f0f0f0" />;
    case "Support":
      return <SlSupport size={20} color="#f0f0f0" />;
    case "Calender":
      return <BsCalendar3 size={20} color="#f0f0f0" />;
    case "Solar":
      return <FaSolarPanel size={20} color="#f0f0f0" />;
    case "Devices":
      return <BiDevices size={20} color="#f0f0f0" />;
    default:
      return <BsSpeedometer2 size={20} color="#f0f0f0" />;
  }
};
