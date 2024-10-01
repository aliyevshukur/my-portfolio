import styled from "styled-components";

import { devices } from "../../GlobalStyle";

export const NavWrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
  transition: background-color 0.5s ease-in-out;
  height: 100%;
  overflow: visible;
  z-index: 1;

  @media ${devices.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.toggleMenu ? "100%" : "auto")};
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const NavContent = styled.nav`
  background-color: ${(props) => props.theme.primary};
  transition: background-color 0.5s ease-in-out;
  width: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  z-index: 1;
  border-radius: 0 30px 30px 0;
  box-shadow: ${(props) => props.theme.boxShadow};

  &.menu-open-enter {
    transform: translateX(-110%);
  }

  &.menu-open-enter-active {
    transform: translateX(0%);
    transition: transform 500ms;
  }

  &.menu-open-exit {
    transform: translateX(0%);
  }

  &.menu-open-exit-active {
    transform: translateX(-110%);
    transition: transform 500ms;
  }

  @media ${devices.tablet} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const NavOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* z-index: -1; */
`;
