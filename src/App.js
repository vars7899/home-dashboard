import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen.screen";
import DeviceScreen from "./pages/DeviceScreen/DeviceScreen.screen";
import SolarScreen from "./pages/SolarScreen/SolarScreen.screen";
import "./styles/FontSize.style.css";
import "./styles/ColorScheme.style.css";
import "./App.css";
import { AppContextProvider } from "./context/GlobalState";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/devices" element={<DeviceScreen />} />
          <Route path="solar" element={<SolarScreen />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
