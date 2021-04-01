import styled from "styled-components";

import { devices } from "../../GlobalStyle";

export const NavWrapper = styled.div`
  height: 100%;

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
  width: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.75);

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
