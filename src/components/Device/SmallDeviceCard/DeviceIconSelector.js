import { RiWifiLine } from "react-icons/ri";
import { BiFridge } from "react-icons/bi";
import { TfiPlug } from "react-icons/tfi";
import { CgMusicSpeaker } from "react-icons/cg";
import { FiMonitor } from "react-icons/fi";
import { GrStatusUnknown } from "react-icons/gr";

const DeviceIconSelector = ({ device }) => {
  device = device.toLowerCase();
  switch (device) {
    case "wi-fi":
      return <RiWifiLine size={20} color="#22252d" />;
    case "wi-fi":
      return <RiWifiLine size={20} color="#22252d" />;
    case "wi-fi":
      return <RiWifiLine size={20} color="#22252d" />;
    case "tv":
      return <FiMonitor size={20} color="#22252d" />;
    case "music":
      return <CgMusicSpeaker size={20} color="#22252d" />;
    case "sockets":
      return <TfiPlug size={20} color="#22252d" />;
    case "fridge":
      return <BiFridge size={20} color="#22252d" />;
    default:
      return <GrStatusUnknown size={20} color="#22252d" />;
  }
};

export default DeviceIconSelector;
