import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const size = {
  mobileS: "320",
  mobileM: "375",
  mobileL: "425",
  tablet: "768",
  laptop: "1024",
  laptopL: "1440",
  desktop: "2560",
};

export const devices = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  desktopL: `(max-width: ${size.desktop}px)`,
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box
  }

  html, body, #root {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
  }
`;

export default GlobalStyle;
