import styled from "styled-components";
import { devices } from "../../GlobalStyle";

const sizes = {
  big: {
    width: "70px",
    height: "40px",
    circleSize: "25px",
  },
  medium: {
    width: "55px",
    height: "32px",
    circleSize: "21px",
  },
  small: {
    width: "40px",
    height: "23px",
    circleSize: "15px",
  },
};

export const ThemeSwitchBtn = styled.div`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  align-self: start;
  width: ${sizes.medium.width};
  height: ${sizes.medium.height};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  padding: 5px;

  position: absolute;
  top: 40px;
  right: 40px;

  @media ${devices.desktopL} {
    width: ${sizes.big.width};
    height: ${sizes.big.height};
  }

  @media ${devices.laptopL} {
    width: ${sizes.medium.width};
    height: ${sizes.medium.height};
  }

  @media ${devices.laptop} {
    width: ${sizes.small.width};
    height: ${sizes.small.height};
  }
`;

export const SwitchButtonIcon = styled.div`
  width: ${sizes.medium.circleSize};
  height: ${sizes.medium.circleSize};

  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#151515" : "#e6e6e6")};

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: ${({ isDarkMode }) => {
    console.log(`isDarkMode  in style ${isDarkMode}`);
    return isDarkMode ? "5px" : "26px";
  }};
  transform: rotate(${({ isDarkMode }) => (isDarkMode ? "180" : "0")}deg);
  transition: all 0.3s ease-out;

  @media ${devices.desktopL} {
    width: ${sizes.big.circleSize};
    height: ${sizes.big.circleSize};
    right: ${({ isDarkMode }) => (isDarkMode ? "7px" : "36px")};
  }

  @media ${devices.laptopL} {
    width: ${sizes.medium.circleSize};
    height: ${sizes.medium.circleSize};
    right: ${({ isDarkMode }) => (isDarkMode ? "6px" : "26px")};
  }

  @media ${devices.laptop} {
    width: ${sizes.small.circleSize};
    height: ${sizes.small.circleSize};
    right: ${({ isDarkMode }) => (isDarkMode ? "5px" : "20px")};
  }
`;
