import styled from "styled-components";

import { Wrapper } from "../defaultPageStyle";
import { devices } from "../../GlobalStyle";

export const ContactWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.darkText};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media ${devices.laptopM} {
    flex-direction: column;
    justify-content: flex-start;
    overflow: scroll;
  }
`;

export const ContactHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${devices.laptopM} {
    margin-bottom: 40px;
  }
`;

export const ContactImg = styled.img`
  width: 500px;

  @media ${devices.laptopL} {
    width: 450px;
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
  font-size: 50px;
  line-height: 60px;

  @media ${devices.laptopL} {
    font-size: 40px;
  }

  @media ${devices.mobileL} {
    font-size: 30px;
    line-height: 60px;
  }
  @media ${devices.mobileM} {
    font-size: 27px;
    line-height: 30px;
  }

  @media ${devices.mobileS} {
    font-size: 23px;
    line-height: 30px;
  }
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 660px;
  flex-shrink: 0;

  @media ${devices.laptopL} {
    padding: 40px;
    width: 594px;
  }

  @media ${devices.tablet} {
    width: 468px;
  }

  @media ${devices.mobileL} {
    width: 390px;
    padding: 20px;
  }
  @media ${devices.mobileM} {
    width: 320px;
    padding: 20px;
  }

  @media ${devices.mobileS} {
    width: 270px;
    padding: 20px;
  }
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
