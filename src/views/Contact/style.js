import styled from "styled-components";

import { devices } from "../../GlobalStyle";
import { Wrapper } from "../defaultPageStyle";

export const ContactWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.darkText};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 50px;

  @media ${devices.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    overflow: scroll;
  }

  @media ${devices.tablet} {
    padding: 50px 15px;
  }
`;

export const ContactHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  @media ${devices.laptopM} {
    margin-bottom: 40px;
  }
`;

export const ContactImg = styled.img`
  max-width: 500px;

  @media ${devices.laptopL} {
    width: 450px;
  }

  @media ${devices.laptop} {
    width: 350px;
  }

  @media ${devices.tablet} {
    max-width: 350px;
    width: auto;
  }

  @media ${devices.mobileL} {
    margin-top: 20px;
    width: 360px;
  }
  @media ${devices.mobileM} {
    margin-top: 20px;
    width: 300px;
  }

  @media ${devices.mobileS} {
    margin-top: 20px;
    width: 250px;
  }
`;

export const ContactText = styled.h1`
  font-size: 3.1rem;
  line-height: 3.75rem;
`;
export const ContactForm = styled.form`
  max-width: 660px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
  padding: 60px;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media ${devices.laptopL} {
    padding: 40px;
    max-width: 594px;
  }

  @media ${devices.laptop} {
    max-width: 500px;
  }

  @media ${devices.tablet} {
    max-width: 410px;
  }

  @media ${devices.mobileL} {
    max-width: 340px;
    padding: 20px;
  }

  @media ${devices.mobileM} {
    max-width: 270px;
    padding: 10px;
  }

  @media ${devices.mobileS} {
    max-width: 270px;
  }
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
