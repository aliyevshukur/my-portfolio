import styled from "styled-components";
import { Wrapper } from "../defaultPageStyle";

export const ProjectWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.primary};
  height: 100%;
  overflow: auto;
  padding: 0px 40px;
`;

export const PageLabel = styled.h1`
  color: ${({ theme }) => theme.darkText};
  font-size: 2.5rem;
  padding: 25px 0 30px 90px;
  width: 100%;
`;
