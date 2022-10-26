import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./SolarTransfer.style.css";

const SolarAppliance = ({
  imageSource,
  classNameSource,
  handleOperationFunc,
  operationEntry,
  height = 120,
  width = 120,
  currentSystemState,
}) => {
  const animation = useAnimation();
  // Setting up equipment animation;
  useEffect(() => {
    if (currentSystemState) {
      animation.start({
        opacity: [0.25, 1],
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.25,
        },
      });
      console.log("Solar operating");
    } else {
      animation.set({ opacity: 1 });
      animation.stop();
    }
  }, [currentSystemState]);

  return (
    <motion.div
      animate={animation}
      onClick={() => handleOperationFunc(operationEntry)}
      className={classNameSource}
      id={`${operationEntry}--${classNameSource}`}
    >
      <img
        src={imageSource}
        alt="diagram"
        height={height}
        width={width}
        style={{
          objectFit: "",
        }}
      />
    </motion.div>
  );
};

export default SolarAppliance;
