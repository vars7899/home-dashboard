import React from "react";
import { HISTORYData } from "../../Data/HISTORY";
import "./History.style.css";
import { motion } from "framer-motion";
import HistoryCard from "./HistoryCard.component";

const History = () => {
  return (
    <motion.div className="history" whileHover={{ scale: 1.009 }}>
      <div className="history-header">
        <p>History</p>
        <p className="history-more">view more</p>
      </div>
      {HISTORYData.map((history, index) => (
        <HistoryCard
          key={`history-card-${index}`}
          device={history.device}
          status={history.status}
          date={history.date}
          user={history.user}
        />
      ))}
    </motion.div>
  );
};

export default History;
