import React from "react";

import { ContactWrapper } from "./style";
import { ContactText, ContactForm } from "./style.js";

export const Contact = () => {
  return (
    <ContactWrapper>
      <ContactText>What can I do for you?</ContactText>
      <ContactForm></ContactForm>
    </ContactWrapper>
  );
};
