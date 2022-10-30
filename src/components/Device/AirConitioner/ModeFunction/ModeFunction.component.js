import React from "react";
import { accent2, dark1 } from "../../../../styles/ColorScheme";
import { AppState } from "../../../../context/GlobalState";
import IconTextButton from "../../../Button/IconTextButton/IconTextButton.component";
import { TbWind } from "react-icons/tb";
import { MdOutlineThermostatAuto } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { GiHeatHaze, GiStrikingArrows } from "react-icons/gi";
import "./ModeFunction.style.css";

const ModeFunction = ({ showMoreFunction, setShowMoreFunction }) => {
  const { acControls, setAcControls } = AppState();
  // Function to update the climate control mode
  function updateAcMode(event) {
    setAcControls((controls) => ({
      ...controls,
      mode: event,
    }));
  }
  return (
    <div className="acc-mode-types">
      <div onClick={() => updateAcMode(1)}>
        <IconTextButton
          givenText={"Dry"}
          givenBackground={acControls.mode === 1 ? accent2 : dark1}
          textColor={acControls.mode === 1 ? dark1 : accent2}
        >
          <TbWind size={25} color={acControls.mode === 1 ? dark1 : accent2} />
        </IconTextButton>
      </div>
      <div onClick={() => updateAcMode(2)}>
        <IconTextButton
          givenText={"Auto"}
          givenBackground={acControls.mode === 2 ? accent2 : dark1}
          textColor={acControls.mode === 2 ? dark1 : accent2}
        >
          <MdOutlineThermostatAuto
            size={25}
            color={acControls.mode === 2 ? dark1 : accent2}
          />
        </IconTextButton>
      </div>
      <div onClick={() => updateAcMode(3)}>
        <IconTextButton
          givenText={"Cool"}
          givenBackground={acControls.mode === 3 ? accent2 : dark1}
          textColor={acControls.mode === 3 ? dark1 : accent2}
        >
          <FaRegSnowflake
            size={25}
            color={acControls.mode === 3 ? dark1 : accent2}
          />
        </IconTextButton>
      </div>
      <div onClick={() => updateAcMode(4)}>
        <IconTextButton
          givenText={"Heat"}
          givenBackground={acControls.mode === 4 ? accent2 : dark1}
          textColor={acControls.mode === 4 ? dark1 : accent2}
        >
          <GiHeatHaze
            size={25}
            color={acControls.mode === 4 ? dark1 : accent2}
          />
        </IconTextButton>
      </div>
      <div
        onClick={() =>
          setAcControls((controls) => ({
            ...controls,
            swing: !controls.swing,
          }))
        }
      >
        <IconTextButton
          givenText={"Swing"}
          givenBackground={acControls.swing ? accent2 : dark1}
          textColor={acControls.swing ? dark1 : accent2}
        >
          <GiStrikingArrows
            size={25}
            color={acControls.swing ? dark1 : accent2}
          />
        </IconTextButton>
      </div>
      <div onClick={() => setShowMoreFunction((controls) => !controls)}>
        <IconTextButton
          givenText={"Settings"}
          givenBackground={showMoreFunction ? accent2 : dark1}
          textColor={showMoreFunction ? dark1 : accent2}
        >
          <VscSettings size={25} color={showMoreFunction ? dark1 : accent2} />
        </IconTextButton>
      </div>
    </div>
  );
};

export default ModeFunction;
