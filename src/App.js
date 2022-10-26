import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen.screen";
import "./App.css";
import DeviceScreen from "./pages/DeviceScreen/DeviceScreen.screen";
import SolarScreen from "./pages/SolarScreen/SolarScreen.screen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/devices" element={<DeviceScreen />} />
        <Route path="solar" element={<SolarScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
