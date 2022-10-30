import React, { useRef, useState } from "react";
import LightColorWheel from "../LightColorWheel/LightColorWheel.component";
import {
  accent2,
  accent2Light2,
  dark2,
  dark1,
  accent1,
} from "../../../styles/ColorScheme";
import "./LightSettingPanel.style.css";
import { MdOutlineContentCopy } from "react-icons/md";
import SwitchButton from "../../Button/SwitchButton/SwitchButton.component";
import { AppState } from "../../../context/GlobalState";
import ColorButton from "../../Button/ColorButton/ColorButton.component";
import IconButton from "../../Button/IconButton/IconButton.component";
import { IoAdd } from "react-icons/io5";
import RangeSlider from "../../Button/RangeSlider/RangeSlider.component";
import { VscSettings } from "react-icons/vsc";

const LightSettingPanel = () => {
  const {
    ambientLight,
    setAmbientLight,
    userColorPalette,
    colorWheel,
    setColorWheel,
    setUserColorPalette,
  } = AppState();
  const currentColor = useRef();
  const [showSetting, setShowSetting] = useState(false);

  // Function --> Copies current selected color
  function handleCopy() {
    var el = document.createElement("input");
    el.setAttribute("value", currentColor.current.innerHTML);
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  // Function --> add color to the user palette
  function handleAddColor() {
    setUserColorPalette((prev) => [
      ...prev,
      {
        hue: colorWheel.hue,
        saturation: colorWheel.saturation,
        luminosity: colorWheel.luminosity,
        alpha: colorWheel.alpha,
      },
    ]);
  }

  // Function --> update color wheel to selected color
  function handleColorWheelColor(updatedColor) {
    console.log(updatedColor);
    setColorWheel(updatedColor);
  }

  return (
    <div
      className="lsp"
      style={{
        background: dark2,
      }}
    >
      <div className="lsp-header">
        <div
          className="lsp-header-text lg-text bold"
          style={{ color: accent2 }}
        >
          Ambient Light
        </div>
        <div className="lsp-header-btn">
          <div
            className="setting"
            onClick={() => {
              setShowSetting((prev) => !prev);
            }}
          >
            <VscSettings size={25} color={showSetting ? accent1 : accent2} />
          </div>
          <SwitchButton
            status={ambientLight}
            handleChange={() => setAmbientLight((current) => !current)}
          />
        </div>
      </div>
      <div className="lsp-main">
        <LightColorWheel />
        <div className="lsp-main-content">
          <div className="lsp-main-setting">
            <div className="lsp-main-setting-right">
              <div
                className="lsp-main-setting-color-text md-text bold"
                style={{ color: accent2 }}
              >
                Current Color
              </div>
              <div
                className="lsp-main-setting-color"
                style={{
                  color: accent2Light2,
                }}
              >
                <p
                  className="lsp-main-setting-color-color md-text bold"
                  ref={currentColor}
                  id="myColor"
                >
                  HSLA ({colorWheel.hue.toFixed(2)},{colorWheel.saturation}%,
                  {colorWheel.luminosity}%,
                  {colorWheel.alpha})
                </p>
                <div className="copy-operation" onClick={handleCopy}>
                  <MdOutlineContentCopy size={20} color={accent2} />
                </div>
              </div>

              {showSetting && (
                <>
                  {" "}
                  <p
                    className="lsp-header-text md-text bold"
                    style={{ color: accent2 }}
                  >
                    Hue
                  </p>
                  <div className="lsp-main-setting-box">
                    <RangeSlider
                      givenValue={colorWheel.hue}
                      givenMin={0}
                      givenMax={360}
                      givenType="hue"
                    />
                  </div>
                  <p
                    className="lsp-header-text md-text bold"
                    style={{ color: accent2 }}
                  >
                    Saturation
                  </p>
                  <div className="lsp-main-setting-box">
                    <RangeSlider
                      givenValue={colorWheel.saturation}
                      givenMin={0}
                      givenMax={100}
                      givenType="saturation"
                    />
                  </div>
                  <p
                    className="lsp-header-text md-text bold"
                    style={{ color: accent2 }}
                  >
                    Luminosity
                  </p>
                  <div className="lsp-main-setting-box">
                    <RangeSlider
                      givenValue={colorWheel.luminosity}
                      givenMin={0}
                      givenMax={100}
                      givenType="luminosity"
                    />
                  </div>
                  <p
                    className="lsp-header-text md-text bold"
                    style={{ color: accent2 }}
                  >
                    Alpha
                  </p>
                  <div className="lsp-main-setting-box">
                    <RangeSlider
                      givenValue={colorWheel.alpha}
                      givenMin={0}
                      givenMax={1}
                      givenStep={0.1}
                      givenType="alpha"
                    />
                  </div>{" "}
                </>
              )}
            </div>
          </div>
          <div className="lsp-main-color">
            <div
              className="lsp-main-color-header sm-text"
              style={{ color: accent2Light2 }}
            >
              User Palette
            </div>
            <div className="lsp-main-color-palette">
              {userColorPalette.map((color, index) => (
                <ColorButton
                  givenColor={color}
                  key={`user-color-${index}`}
                  onClick={handleColorWheelColor}
                />
              ))}
              <IconButton
                backgroundColor={accent2Light2}
                onClick={handleAddColor}
              >
                <IoAdd size={25} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightSettingPanel;
