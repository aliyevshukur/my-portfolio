import React from "react";
import { ButtonWrapper, ButtonShadow, ButtonText, ButtonMain } from "./style";

export const CustomButton = ({
  title,
  type,
  width,
  height,
  style,
  fontSize,
}) => {
  return (
    <ButtonWrapper type={type} width={width} height={height} style={style}>
      <ButtonMain>
        <ButtonText fontSize={fontSize}>{title}</ButtonText>
      </ButtonMain>
      {/* BG color changes to purple when type="action" */}
      <ButtonShadow type={type} />
    </ButtonWrapper>
  );
};
