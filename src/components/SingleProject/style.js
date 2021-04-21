import styled from "styled-components";
import { devices } from "../../GlobalStyle";

export const ProjectWrapper = styled.div`
  width: 500px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  margin: 30px;
`;

export const Image = styled.img`
  width: 100%;
  height: 190px;
  border-radius: 5px 5px 0 0;
`;

export const ProjectContent = styled.div`
  height: 85px;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 5px 5px;
  padding: 0 9px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* margin-left: 2px; */
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.lightText};
  text-decoration: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.lightText};
  font-size: 13px;
  line-height: 1.2em;
  max-height: 2.4em;
  overflow: hidden;
`;
