import styled from "styled-components";

import { devices } from "../../GlobalStyle";

export const NavWrapper = styled.nav`
  background-color: ${(props) => props.theme.primary};
  height: 100%;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
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
