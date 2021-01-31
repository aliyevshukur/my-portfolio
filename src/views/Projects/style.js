import styled from "styled-components";
import { Wrapper } from "../defaultPageStyle";

export const ProjectWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.darkText};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
