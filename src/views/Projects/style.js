import styled from "styled-components";
import { devices } from "../../GlobalStyle";
import { Wrapper } from "../defaultPageStyle";

export const ProjectsWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.primary};
  height: 100%;
  overflow: auto;
  padding: 65px 0px;
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1400px;

  @media ${devices.desktop} {
    width: 1200px;
  }

  @media ${devices.laptopL} {
    width: 900px;
  }
  @media ${devices.laptopM} {
    width: 800px;
  }

  @media ${devices.laptop} {
    width: 660px;
  }

  @media ${devices.tablet} {
    width: auto;
    max-width: 500px;
    padding: 0px 30px;
  }

  @media ${devices.mobileL} {
    width: 350px;
  }
  @media ${devices.mobileM} {
    width: 300px;
  }
  @media ${devices.mobileS} {
    width: 250px;
  }
`;

export const PageLabel = styled.h1`
  color: ${({ theme }) => theme.darkText};
  font-size: 2.5rem;
  position: relative;



  &::before {
    content: "";
    display: block;
    height: 100%;
    width 3px;
    background-color: ${({ theme }) => theme.secondary};
    position: absolute;
    top: 0;
    left: -4px;
  }
`;
