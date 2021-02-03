import React from "react";
import { ButtonWrapper, ButtonShadow, ButtonText, ButtonMain } from "./style";

export const CustomButton = ({ title, type, width, height }) => {
  return (
    <ButtonWrapper type={type} width={width} height={height}>
      <ButtonMain>
        <ButtonText>{title}</ButtonText>
      </ButtonMain>
      <ButtonShadow type={type} />
    </ButtonWrapper>
  );
};
