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
    moisterLevel: 36,
    temperature: 20,
    tempUpperLimit: 35,
    tempLowerLimit: 10,
    tempStep: 0.5,
    mode: 2,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};
