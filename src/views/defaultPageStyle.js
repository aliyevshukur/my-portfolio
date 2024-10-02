import styled from "styled-components";
import { devices } from "../GlobalStyle";

export const PageContainer = styled.div`
  width: 100%;
  position: relative;
  @media ${devices.tablet} {
    margin-left: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;

  /* SLIDE DOWN */
  &.slide-down-enter {
    transform: translateY(100%);
  }

  &.slide-down-enter-active {
    transform: translateY(0%);
    transition: transform 1000ms ease-in-out;
  }

  &.slide-down-exit {
    transform: translateY(0%);
  }

  &.slide-down-exit-active {
    transform: translateY(-100%);
    transition: transform 1000ms ease-in-out;
  }

  /* SLIDE UP */
  &.slide-up-enter {
    transform: translateY(-100%);
  }

  &.slide-up-enter-active {
    transform: translateY(0%);
    transition: transform 1000ms ease-in-out;
  }

  &.slide-up-exit {
    transform: translateY(0%);
  }

  &.slide-up-exit-active {
    transform: translateY(100%);
    transition: transform 1000ms ease-in-out;
  }
`;
