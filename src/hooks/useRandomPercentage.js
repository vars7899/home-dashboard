import { useState, useEffect } from "react";

const useRandomPercentage = () => {
  const [rate, setRate] = useState(0);
  useEffect(() => {
    const tempInterval = setInterval(() => {
      setRate(() => Math.random() * 0.05 + 0.65);
      console.log(rate);
    }, 5000);
    return () => clearInterval(tempInterval);
  }, [rate]);

  return rate;
};

export default useRandomPercentage;
