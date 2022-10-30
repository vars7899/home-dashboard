import React from "react";
import LightColorWheel from "../LightColorWheel/LightColorWheel.component";
import {
  accent2,
  accent2Light2,
  dark1,
  dark2,
} from "../../../styles/ColorScheme";
import "./LightSettingPanel.style.css";
import SwitchButton from "../../Button/SwitchButton/SwitchButton.component";
import { AppState } from "../../../context/GlobalState";
import ColorButton from "../../Button/ColorButton/ColorButton.component";
import IconButton from "../../Button/IconButton/IconButton.component";
import { IoAdd } from "react-icons/io5";
import RangeSlider from "../../Button/RangeSlider/RangeSlider.component";

const LightSettingPanel = () => {
  const { ambientLight, setAmbientLight, userColorPalette, colorWheel } =
    AppState();
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
          <SwitchButton
            status={ambientLight}
            handleChange={() => setAmbientLight((current) => !current)}
          />
        </div>
      </div>
      <div className="lsp-main">
        <div className="lsp-main-setting">
          <div className="lsp-main-setting-left">
            <div
              className="lsp-main-setting-color-text sm-text bold"
              style={{ color: accent2 }}
            >
              Current Color
            </div>
            <p
              className="lsp-header-text sm-text bold"
              style={{ color: accent2 }}
            >
              Hue
            </p>
            <p
              className="lsp-header-text sm-text bold"
              style={{ color: accent2 }}
            >
              Saturation
            </p>
            <p
              className="lsp-header-text sm-text bold"
              style={{ color: accent2 }}
            >
              Luminosity
            </p>
            <p
              className="lsp-header-text sm-text bold"
              style={{ color: accent2 }}
            >
              Alpha
            </p>
          </div>
          <div className="lsp-main-setting-right">
            <div
              className="lsp-main-setting-color"
              style={{
                color: accent2,
              }}
            >
              <p className="lsp-main-setting-color-color sm-text bold">
                ({colorWheel.hue.toFixed(2)},{colorWheel.saturation}%,
                {colorWheel.luminosity}%,
                {colorWheel.alpha})
              </p>
            </div>
            <div className="lsp-main-setting-box">
              <RangeSlider
                givenValue={colorWheel.hue}
                givenMin={0}
                givenMax={360}
                givenType="hue"
              />
            </div>
            <div className="lsp-main-setting-box">
              <RangeSlider
                givenValue={colorWheel.saturation}
                givenMin={0}
                givenMax={100}
                givenType="saturation"
              />
            </div>
            <div className="lsp-main-setting-box">
              <RangeSlider
                givenValue={colorWheel.luminosity}
                givenMin={0}
                givenMax={100}
                givenType="luminosity"
              />
            </div>
            <div className="lsp-main-setting-box">
              <RangeSlider
                givenValue={colorWheel.alpha}
                givenMin={0}
                givenMax={1}
                givenStep={0.1}
                givenType="alpha"
              />
            </div>
          </div>
        </div>
        <LightColorWheel />
        <div className="lsp-main-color">
          <div
            className="lsp-main-color-header sm-text"
            style={{ color: accent2Light2 }}
          >
            User Palette
          </div>
          <div className="lsp-main-color-palette">
            {userColorPalette.map((color) => (
              <ColorButton givenColor={color} />
            ))}
            <IconButton backgroundColor={accent2Light2}>
              <IoAdd size={25} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightSettingPanel;
