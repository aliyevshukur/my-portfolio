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
`;

export const ContentHeader = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.darkText};
  margin-bottom: ${(props) => props.theme.spacing(1)}px;
`;

export const ContentText = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.darkText};
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
