import React from "react";
import { AreaWrapper, Input } from "./style.js";
import { InputLabel } from "../CustomInput/style.js";
export const CustomTextArea = ({ label, type, value, rows, cols }) => {
  return (
    <AreaWrapper rows={rows} cols={cols}>
      <InputLabel>{label}</InputLabel>
      <Input value={value} type={type} />
    </AreaWrapper>
  );
};
