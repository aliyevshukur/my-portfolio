import styled from "styled-components";
import { Wrapper } from "../defaultPageStyle";

export const ProjectWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.darkText};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
