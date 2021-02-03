import styled from "styled-components";
import { Wrapper } from "../defaultPageStyle";

export const ContactWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.darkText};
`;

export const ContactText = styled.h1``;
export const ContactForm = styled.form``;
