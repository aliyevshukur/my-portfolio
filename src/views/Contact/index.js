import React from "react";
import { CustomInput, CustomButton, CustomTextArea } from "../../components";
import { css } from "styled-components";

import { ContactWrapper } from "./style";
import {
  ContactText,
  ContactForm,
  ContactImg,
  ContactHero,
  FormSection,
} from "./style.js";
import ContactMe from "../../img/contact-me.svg";

export const Contact = () => {
  return (
    <ContactWrapper>
      <ContactHero>
        <ContactImg src={ContactMe} />
        <ContactText>What can I do for you?</ContactText>
      </ContactHero>
      <ContactForm>
        <FormSection>
          <CustomInput label="name" />
          <CustomInput label="surname" />
        </FormSection>
        <CustomInput type="long" label="email" />
        <CustomTextArea
          id="details"
          type="text-area"
          label="details"
          rows="5"
          cols="50"
        />
        <CustomButton
          title="send"
          width="150px"
          height="55px"
          type="action"
          fontSize="18px"
          style={() =>
            css`
              align-self: end;
            `
          }
        />
      </ContactForm>
    </ContactWrapper>
  );
};
