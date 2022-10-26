import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./HistoryCard.style.css";

const HistoryCard = ({ device, user, status, date }) => {
  return (
    <motion.div className="history-card" whileHover={{ scale: 1.009 }}>
      <div className="history-card-header">
        <p className="history-card-device">{device}</p>
        <p className="history-card-date">{date}</p>
      </div>
      <div className="history-card-details">
        <p className="device-status">Turned {status ? "ON" : "OFF"} </p>
        <p>by {user}</p>
      </div>
    </motion.div>
  );
};

HistoryCard.protoTypes = {
  device: PropTypes.string,
  user: PropTypes.string,
  status: PropTypes.bool,
  date: PropTypes.any,
};

export default HistoryCard;
