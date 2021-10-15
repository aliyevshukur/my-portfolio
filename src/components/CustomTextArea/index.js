import React from "react";

import { Input } from "./style.js";
import { InputLabel } from "../CustomInput/style.js";
import { InputWrapper } from "../CustomInput/style";

export const CustomTextArea = ({ label, type, value, rows, cols, name }) => {
  return (
    <InputWrapper rows={rows} cols={cols}>
      <InputLabel>{label}</InputLabel>
      <Input value={value} type={type} name={name} />
    </InputWrapper>
  );
};
