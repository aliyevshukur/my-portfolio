import React from "react";
import { InputWrapper, InputLabel, Input } from "./style.js";

export const CustomInput = ({ label, type, value }) => {
  return (
    <InputWrapper type={type}>
      <InputLabel>{label}</InputLabel>
      <Input value={value} />
    </InputWrapper>
  );
};
