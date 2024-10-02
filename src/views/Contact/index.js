import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { css } from "styled-components";
import { CustomButton, CustomInput, CustomTextArea } from "../../components";

import ContactMe from "../../img/contact-me.svg";
import { ContactWrapper } from "./style";
import {
  ContactForm,
  ContactHero,
  ContactImg,
  ContactText,
  FormSection,
} from "./style.js";

export const Contact = () => {
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7rhg0vp", "template_gkirw0t", form.current, {
        publicKey: "rLnpJS826oflJDRw2",
      })
      .then(
        (result) => {
          console.log("Successfully sent email: ", result.text);
        },
        (error) => {
          console.log("Error sending email: ", error.text);
        },
      );
  };

  return (
    <ContactWrapper>
      <ContactHero>
        <ContactImg src={ContactMe} />
        <ContactText>What can I do for you?</ContactText>
      </ContactHero>

      <ContactForm onSubmit={onSubmit} ref={form}>
        <FormSection>
          <CustomInput type='half' label='name' name='user_name' />
          <CustomInput type='half' label='subject' name='user_subject' />
        </FormSection>
        <CustomInput label='email' name='user_email' />
        <CustomTextArea
          id='details'
          type='text-area'
          name='message'
          label='message'
          rows='5'
          cols='50'
        />
        <CustomButton
          title='send'
          width='150px'
          height='55px'
          type='action'
          fontSize='18px'
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
