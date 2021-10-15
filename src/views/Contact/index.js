import React, { useRef } from "react";
import { CustomInput, CustomButton, CustomTextArea } from "../../components";
import { css } from "styled-components";
import emailjs from "emailjs-com";

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
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("testttt", e.target);
    emailjs
      .sendForm(
        "service_sy4lpqg",
        "template_29x661y",
        e.target,
        "user_thLS7cIlaVIKNDN1Btvnm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <ContactWrapper>
      <ContactHero>
        <ContactImg src={ContactMe} />
        <ContactText>What can I do for you?</ContactText>
      </ContactHero>

      <ContactForm onSubmit={onSubmit} ref={form}>
        <FormSection>
          <CustomInput type="half" label="name" name="name" />
          <CustomInput type="half" label="subject" name="subject" />
        </FormSection>
        <CustomInput label="email" name="email" />
        <CustomTextArea
          id="details"
          type="text-area"
          name="message"
          label="message"
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
              align-self: flex-end;
            `
          }
          onClick={() => form.current.requestSubmit()}
        />
      </ContactForm>
    </ContactWrapper>
  );
};
