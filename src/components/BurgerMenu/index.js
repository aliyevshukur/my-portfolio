import React from "react";
import styled from "styled-components";

import { devices } from "../../GlobalStyle";

const BurgerWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: none;
  position: absolute;
  top: 20px;
  left: 20px;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
const BurgerItem = styled.div`
  width: 100%;
  height: 7px;
  background-color: ${(props) => props.theme.secondary};
`;

export const BurgerMenu = (props) => {
  return (
    <BurgerWrapper onClick={props.onClick}>
      <BurgerItem />
      <BurgerItem />
      <BurgerItem />
    </BurgerWrapper>
  );
};
