import React from "react";
import { ButtonMain, ButtonShadow, ButtonText, ButtonWrapper } from "./style";

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
    <ButtonWrapper>
      <ButtonMain
        type={type}
        width={width}
        height={height}
        style={style}
        onClick={onClick}
        href={href}
        target={target}
      >
        <ButtonText fontSize={fontSize}>{title}</ButtonText>
      </ButtonMain>
      {/* BG color changes to purple when type="action" */}
      <ButtonShadow type={type} />
    </ButtonWrapper>
  );
};
