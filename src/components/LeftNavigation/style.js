import styled, { css } from "styled-components";
import { TiHomeOutline, TiDeviceDesktop, TiContacts } from "react-icons/ti";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export const NavWrapper = styled.h1`
  background-color: ${(props) => props.theme.lightText};
  height: 100%;
  max-width: ${(props) => props.theme.leftNavWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  color: red;
  font-size: 24px;
  box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const IconWrapper = styled(IconContext.Provider)``;

export const StyledLink = styled(Link)`
  color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.darkText};
  margin-bottom: ${(props) => (props.last ? 0 : 70)}px;
`;

const sharedIcon = css``;

export const HomeIcon = styled(TiHomeOutline)`
  ${sharedIcon}
  &:hover {
    color: "red";
  }
`;

export const ProjectIcon = styled(TiDeviceDesktop)`
  ${sharedIcon}
`;

export const ContactIcon = styled(TiContacts)`
  ${sharedIcon}
`;
