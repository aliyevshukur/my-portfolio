import styled from "styled-components";
import { Wrapper } from "../defaultPageStyle";

export const ProjectWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.primary};
  height: 100%;
  overflow: auto;
  padding: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PageLabel = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 40px;
  padding: 25px 0 30px 90px;
  width: 100%;
`;
