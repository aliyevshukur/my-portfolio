import React from "react";
import { ButtonWrapper, ButtonShadow, ButtonText, ButtonMain } from "./style";

export const CustomButton = ({
  title,
  type,
  width = "100px",
  height = "50px",
  style,
  fontSize,
  onClick,
  to,
  as,
}) => {
  return (
    <ButtonWrapper
      type={type}
      width={width}
      height={height}
      style={style}
      onClick={onClick}
      to={to}
      as={as}
    >
      <ButtonMain>
        <ButtonText fontSize={fontSize}>{title}</ButtonText>
      </ButtonMain>
      {/* BG color changes to purple when type="action" */}
      <ButtonShadow type={type} />
    </ButtonWrapper>
  );
};
