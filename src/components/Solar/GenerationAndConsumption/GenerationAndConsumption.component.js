import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import GACChart from "./GACChart.component";
import "./GenerationAndConsumption.style.css";
import TotalCard from "./TotalCard.component";
import { motion } from "framer-motion";

const GenerationAndConsumption = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <motion.div className="gac" whileHover={{ scale: 1.009 }}>
      <div className="gac-header">
        <p className="gac-header-name">Solar generation and consumption</p>
        <div className="gac-header-select">
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
            s
            style={{
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <div className="gac-main">
        <div className="gac-main-cards">
          <TotalCard
            type="Total Generation"
            totalNumber={17.86}
            minNumber={2.5}
            maxNumber={13.7}
          />
          <TotalCard
            type="Total Consumption"
            totalNumber={3.2}
            minNumber={1.3}
            maxNumber={9.3}
          />
        </div>
        <div className="gac-main-graph">
          <GACChart />
        </div>
      </div>
    </motion.div>
  );
};

export default GenerationAndConsumption;
