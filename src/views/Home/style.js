import styled from "styled-components";
import { Wrapper } from "../defaultPageStyle";

export const HomeWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing(6)}px;
`;

export const HomeContent = styled.div`
  max-width: 700px;
  margin-left: 40px;
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
  max-width: 100%;
  height: auto;
`;
