import styled from "styled-components";

import { devices } from "../../GlobalStyle";

export const NavWrapper = styled.div`
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
    transform: translateX(-100%);
  }

  &.menu-open-enter-active {
    transform: translateX(0%);
    transition: transform 500ms;
  }

  &.menu-open-exit {
    transform: translateX(0%);
  }

  &.menu-open-exit-active {
    transform: translateX(-100%);
    transition: transform 500ms;
  }

  @media ${devices.tablet} {
    display: ${(props) => (props.toggleMenu ? "flex" : "none")};
  }
`;

export const NavIcon = styled.div`
  color: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.darkText};
  margin-bottom: ${(props) => (props.last ? 0 : 70)}px;
`;
