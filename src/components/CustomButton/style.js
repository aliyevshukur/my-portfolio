import styled from "styled-components";

export const ButtonWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  min-width: ${({ width }) => width};
  height: ${({ height }) => height};
  /* line-height: ${({ height }) => height}; */

  /* If button type is action button swap the colors */
  background-color: ${({ theme, type }) =>
    type === "action" ? theme.secondary : theme.darkText};
  color: ${({ theme, type }) =>
    type === "action" ? theme.darkText : theme.secondary};
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  ${(props) => props.style}
`;

export const ButtonMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ButtonShadow = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  background-color: ${({ theme, type }) =>
    type === "action" ? theme.secondary : theme.darkText};
  width: 100%;
  height: 14%;
  border-radius: 0 0 3px 3px;
`;

export const ButtonText = styled.p`
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize || "13px"};
  font-weight: bold;
`;
