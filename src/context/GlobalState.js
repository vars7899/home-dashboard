import { createContext, useContext, useState } from "react";
import { ROOMData } from "../Data/ROOM";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [roomList, setRoomList] = useState(ROOMData);
  const [selectedZone, setSelectedZone] = useState(1);
  const [acFunction, setAcFunction] = useState(true);
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
    { alpha: 1, hue: 43.80650611935693, luminosity: 50, saturation: 100 },
    { hue: 343.35688968341026, saturation: 100, luminosity: 50, alpha: 1 },
    { hue: 101.10574310498565, saturation: 100, luminosity: 50, alpha: 1 },
    { hue: 183.19247300028272, saturation: 100, luminosity: 50, alpha: 1 },
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
        setAcFunction,
        acFunction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};
