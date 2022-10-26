import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [roomList, setRoomList] = useState([]);

  return (
    <AppContext.Provider value={{ roomList, setRoomList }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};
