import { createContext, useContext, useState } from "react";
import { ROOMData } from "../Data/ROOM";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [roomList, setRoomList] = useState(ROOMData);
  const [selectedZone, setSelectedZone] = useState(1);

  return (
    <AppContext.Provider
      value={{ roomList, setRoomList, selectedZone, setSelectedZone }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};
