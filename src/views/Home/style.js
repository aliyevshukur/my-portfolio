import styled from "styled-components";

import { Wrapper } from "../defaultPageStyle";
import { devices } from "../../GlobalStyle";

export const HomeWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${devices.laptop} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const HomeContent = styled.div`
  max-width: 600px;
  margin-top: ${(props) => props.theme.spacing(3)}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContentHeader = styled.h1`
  font-size: 64px;
  color: ${(props) => props.theme.darkText};
  margin-bottom: ${(props) => props.theme.spacing(1)}px;

  @media ${devices.mobileL} {
    font-size: 40px;
  }

  @media ${devices.mobileS} {
    font-size: 35px;
  }
`;

export const ContentText = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.darkText};
  margin-bottom: ${(props) => props.theme.spacing(1)}px;

  @media ${devices.mobileL} {
    font-size: 20px;
  }

  @media ${devices.mobileS} {
    font-size: 18px;
  }
`;

export const ContentImage = styled.img`
  width: 500px;
  height: auto;

  @media ${devices.tablet} {
    width: 300px;
  }
`;

export const Name = styled.span`
  color: ${(props) => props.theme.secondary};
`;
