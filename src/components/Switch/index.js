import React, { useState } from "react";
import { IconContext } from "react-icons";
import { TiWeatherNight, TiWeatherSunny } from "react-icons/ti";
import { SwitchButtonIcon, ThemeSwitchBtn } from "./style";

export default function Switch({ onClick, isDarkMode }) {
  console.log(`isDark in Switch ${isDarkMode}`);
  return (
    <IconContext.Provider value={{ size: "21px" }}>
      <ThemeSwitchBtn onClick={onClick} isDarkMode={isDarkMode}>
        <SwitchButtonIcon isDarkMode={isDarkMode}>
          {isDarkMode ? (
            <TiWeatherNight width={21} height={21} />
          ) : (
            <TiWeatherSunny width={21} height={21} />
          )}
        </SwitchButtonIcon>
      </ThemeSwitchBtn>
    </IconContext.Provider>
  );
}
