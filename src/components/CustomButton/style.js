import styled from "styled-components";

import { devices } from "../../GlobalStyle";

export const ButtonWrapper = styled.div`
  ${(props) => props.style}

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scaleY(0.95);
  }
`;

export const ButtonMain = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px 5px 0px 0px;

  /* If button type is action button swap the colors */
  background-color: ${({ theme, type }) =>
    type === "action" ? theme.secondary : theme.darkText};
  color: ${({ theme, type }) => (type === "action" ? "white" : theme.primary)};
`;

export const ButtonShadow = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  background-color: ${({ theme, type }) =>
    type === "action" ? theme.secondary : theme.darkText};
  width: 100%;
  height: 6px;
  border-radius: 0 0 5px 5px;
  border: none;
`;

export const ButtonText = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
`;
