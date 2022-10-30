import { createContext, useContext, useState } from "react";
import { ROOMData } from "../Data/ROOM";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [roomList, setRoomList] = useState(ROOMData);
  const [selectedZone, setSelectedZone] = useState(1);
  const [acControls, setAcControls] = useState({
    fan: true,
    fanSpeed: 7,
    moister: false,
    moisterLevel: 67,
    timer: false,
    timerTime: 6,
    swing: true,
    temperature: 20,
    tempUpperLimit: 35,
    tempLowerLimit: 10,
    tempStep: 0.5,
    mode: 2,
  });
  const [ambientLight, setAmbientLight] = useState(false);
  const [userColorPalette, setUserColorPalette] = useState([
    "#FFCF99",
    "#2EC4B6",
    "#E71D36",
    "#011627",
    "#FF9F1C",
  ]);
  const [colorWheel, setColorWheel] = useState({
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  return (
    <AppContext.Provider
      value={{
        roomList,
        setRoomList,
        selectedZone,
        setSelectedZone,
        acControls,
        setAcControls,
        ambientLight,
        setAmbientLight,
        userColorPalette,
        setUserColorPalette,
        colorWheel,
        setColorWheel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};
