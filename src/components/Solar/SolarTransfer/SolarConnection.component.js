import React from "react";
import Xarrow from "react-xarrows";
import { motion } from "framer-motion";

const SolarConnection = ({
  isDash,
  lineColor,
  strokeThickness = 4,
  headThickness = 2.5,
  tailThickness = 2.5,
  startID,
  endID,
  withTail = false,
  isConnectionMade,
}) => {
  return (
    <motion.div
      initial={{}}
      animate={{ opacity: [0.5, 2] }}
      transition={{
        repeat: Infinity,
        duration: 0.5,
        repeatType: "mirror",
      }}
      exit={{ rotate: 360 }}
    >
      {isConnectionMade && (
        <Xarrow
          start={startID}
          end={endID}
          headSize={headThickness}
          tailSize={tailThickness}
          animateDrawing={true}
          dashness={isDash}
          color={lineColor}
          showTail={withTail}
          strokeWidth={strokeThickness}
        />
      )}
    </motion.div>
  );
};

export default SolarConnection;
