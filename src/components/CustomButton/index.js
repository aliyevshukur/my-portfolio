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
  href,
  target,
}) => {
  return (
    <ButtonWrapper
      type={type}
      width={width}
      height={height}
      style={style}
      onClick={onClick}
      href={href}
      target={target}
    >
      <ButtonMain>
        <ButtonText fontSize={fontSize}>{title}</ButtonText>
      </ButtonMain>
      {/* BG color changes to purple when type="action" */}
      <ButtonShadow type={type} />
    </ButtonWrapper>
  );
};
