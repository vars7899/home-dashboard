export const handleOperation = (
  equipment,
  operateSolar,
  operateBattery,
  operateGrid,
  operateInverter,
  operateHome,
  setOperateBattery,
  setOperateInverter,
  setOperateGrid,
  setOperateHome,
  setOperateSolar
) => {
  switch (equipment) {
    case "solar":
      setOperateSolar((operateSolar) => !operateSolar);
      break;
    case "inverter":
      setOperateInverter((operateInverter) => !operateInverter);
      setOperateBattery((operateBattery) => !operateBattery);
      setOperateGrid((operateGrid) => !operateGrid);
      setOperateHome((operateHome) => !operateHome);
      break;
    case "battery":
      if (!operateInverter) return;
      setOperateBattery((operateBattery) => !operateBattery);
      break;
    case "grid":
      if (!operateInverter) return;
      setOperateGrid((operateGrid) => !operateGrid);
      break;
    case "home":
      if (!operateInverter) return;
      setOperateHome((operateHome) => !operateHome);
      break;
  }
};
