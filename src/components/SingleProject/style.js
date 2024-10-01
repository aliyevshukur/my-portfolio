import styled from "styled-components";
import { devices } from "../../GlobalStyle";

export const ProjectWrapper = styled.div`
  width: 900px;
  display: flex;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  margin: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media ${devices.laptop} {
    width: 650px;
  }

  @media ${devices.tablet} {
    width: 450px;
  }

  @media ${devices.mobileL} {
    width: 350px;
  }
`;

export const Image = styled.img`
  width: 40%;
  aspet-ratio: 2 / 1;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const ProjectContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 0 0 5px 5px;
  padding: 15px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
`;

export const Buttons = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 10px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.lightText};
  text-decoration: bold;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.lightText};
  font-size: 0.9rem;
  line-height: 1.2em;
  max-height: 2.4em;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const TechStack = styled.div`
  font-size: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const IconName = styled.div`
  display: inline-block;
  padding: 2px 3px;
  border-radius: 5px;
  background-color: #f0f0f0;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TechStackLabel = styled.div`
  font-size: 1.1rem;
  flex-basis: 100%;
`;
