import styled from "styled-components";

import { devices } from "../../GlobalStyle";

export const ButtonWrapper = styled.a`
  ${(props) => props.style}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  /* If button type is action button swap the colors */
  background-color: ${({ theme, type }) =>
    type === "action" ? theme.secondary : theme.darkText};
  color: ${({ theme, type }) =>
    type === "action" ? theme.darkText : theme.secondary};

  @media ${devices.mobileL} {
    min-width: ${({ width }) => `${width.slice(0, -2) * 0.8}px`};
    height: ${({ height }) => `${height.slice(0, -2) * 0.8}px`};
  }

  @media ${devices.mobileM} {
    min-width: ${({ width }) => `${width.slice(0, -2) * 0.7}px`};
    height: ${({ height }) => `${height.slice(0, -2) * 0.7}px`};
  }

  @media ${devices.mobileS} {
    min-width: ${({ width }) => `${width.slice(0, -2) * 0.6}px`};
    height: ${({ height }) => `${height.slice(0, -2) * 0.6}px`};
  }
`;

export const ButtonMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ButtonShadow = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  background-color: ${({ theme, type }) =>
    type === "action" ? theme.secondary : theme.darkText};
  width: 100%;
  height: 14%;
  border-radius: 0 0 3px 3px;
`;

export const ButtonText = styled.p`
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize || "13px"};
  font-weight: bold;

  @media ${devices.mobileL} {
    font-size: ${({ fontSize }) =>
      fontSize ? `${fontSize.slice(0, -2) * 0.9}px` : "calc(13px*0.9)"};
  }

  @media ${devices.mobileM} {
    font-size: ${({ fontSize }) =>
      fontSize ? `${fontSize.slice(0, -2) * 0.8}px` : "calc(13px*0.8)"};
  }

  @media ${devices.mobileS} {
    font-size: ${({ fontSize }) =>
      fontSize ? `${fontSize.slice(0, -2) * 0.65}px` : "calc(13px*0.65)"};
  }
`;
