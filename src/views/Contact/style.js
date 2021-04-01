import styled from "styled-components";
import { Wrapper } from "../defaultPageStyle";

export const ContactWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.darkText};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContactImg = styled.img`
  width: 500px;
`;

export const ContactText = styled.h1`
  font-size: 3vw;
  line-height: 60px;
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.25);
  height: 600px;
  width: 660px;
  flex-shrink: 0;
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
