import styled from "styled-components";

import { devices } from "../../GlobalStyle";
import { Wrapper } from "../defaultPageStyle";

export const HomeWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.primary};
  transition: background-color 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  position: relative;

  @media ${devices.tablet} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const HomeAbout = styled.div`
  margin-top: ${(props) => props.theme.spacing(3)}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1000px;
  flex-grow: 1;
`;

export const ContentHeader = styled.h1`
  font-size: 3.5rem;
  color: ${(props) => props.theme.darkText};
  margin-bottom: 3rem;
`;

export const ContentText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.darkText};
  margin-bottom: 2rem;
`;

export const ContentImage = styled.img`
  max-width: 700px;
  min-width: 500px;
  height: auto;
  flex-grow: 1;

  @media ${devices.laptopM} {
    min-width: 400px;
  }

  @media ${devices.laptop} {
    max-width: 400px;
    min-width: 250px;
  }
`;

export const Name = styled.span`
  color: ${(props) => props.theme.secondary};
`;

export const HomeButtons = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const ReferanceLink = styled.a``;
export const ReferanceLinkImage = styled.img`
  width: 30px;
  height: 30px;
  &:hover {
    filter: brightness(90%);
    transition: ease-in-out 0.5s;
  }
`;
