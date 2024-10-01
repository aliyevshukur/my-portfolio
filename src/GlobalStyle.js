import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const size = {
  mobileS: "320",
  mobileM: "375",
  mobileL: "425",
  tablet: "768",
  laptop: "1024",
  laptopM: "1300",
  laptopL: "1440",
  desktop: "1920",
  desktopL: "2560",
};

export const devices = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopM: `(max-width: ${size.laptopM}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  desktopL: `(max-width: ${size.desktopL}px)`,
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box
  }

  html, body, #root {
    height: 100%;
    font-family: 'Archia', sans-serif;
    overflow: hidden;

    @media ${devices.desktopL} {
      font-size: 150%;
    }

    @media ${devices.desktop} {
      font-size: 120%;
    }

    @media ${devices.laptopL} {
      font-size: 100%;
    }

    @media ${devices.laptopM} {
      font-size: 80%;
    }

    @media ${devices.laptop} {
      font-size: 60%;
    }

    @media ${devices.mobileL} {
      font-size: 48%;
    }

    @media ${devices.mobileM} {
      font-size: 40%;
    }

  }

  @font-face {
    font-family: "Open-Sans";
    src: local('Archia'), url(./fonts/archia-regular-webfont.ttf) format('truetype');
  }

`;

export default GlobalStyle;
