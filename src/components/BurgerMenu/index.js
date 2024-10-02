import React from "react";
import styled from "styled-components";

import { devices } from "../../GlobalStyle";

const BurgerWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: none;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: ${(props) =>
      props.isToggled ? "center" : "space-between"};
    align-items: flex-start;
  }

  @media ${devices.mobileL} {
    width: 28px;
    height: 28px;
  }

  div {
    width: ${(props) => (props.isToggled ? "55%" : "100%")};
    transition: width 0.5s;
  }

  div:nth-child(1) {
    transform: ${(props) =>
      props.isToggled ? "rotate(-45deg)" : "rotate(0deg)"};
    /* translateY(-50%); */
    border-radius: 5px 5px 0 0;
  }

  div:nth-child(3) {
    transform: ${(props) =>
      props.isToggled ? "rotate(45deg)" : "rotate(0deg)"};
    border-radius: 0 0 5px 5px;
  }

  div:nth-child(2) {
    align-self: center;
  }
`;
const BurgerItem = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${(props) => props.theme.secondary};

  @media ${devices.mobileL} {
    height: 4px;
  }
`;

export const BurgerMenu = (props) => {
  return (
    <BurgerWrapper onClick={props.onClick} isToggled={props.isToggled}>
      <BurgerItem />
      <BurgerItem />
      <BurgerItem />
    </BurgerWrapper>
  );
};
