import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { GACData } from "../../../Data/GAC";

const GACChart = () => {
  const config = {
    data: GACData,
    width: 500,
    height: 320,
    xField: "date",
    yField: "value",
    point: {
      size: 5,
    },
    seriesField: "type",
    color: ({ type }) => {
      return type === "Generation" ? "#988fe3" : "#f0ce87";
    },
  };

  return <Line {...config} />;
};

export default GACChart;
