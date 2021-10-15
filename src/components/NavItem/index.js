import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { devices } from "../../GlobalStyle";

export const NavItem = ({
  icon,
  to,
  isActive,
  last,
  onClick,
  isLocked,
  lockLink,
  tooltip,
}) => {
  return (
    <Wrapper
      last={last}
      onClick={() => {
        onClick();
        lockLink();
      }}
      isLocked={isLocked}
      isActive={isActive}
    >
      <NavLink to={to}>
        <NavIcon isActive={isActive}>{icon}</NavIcon>
      </NavLink>
      <Tooltip>{tooltip}</Tooltip>
    </Wrapper>
  );
};

const Tooltip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 0;
  height: 70px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.lightText};

  position: absolute;
  top: 50%;
  left: 60px;
  transform: translate(0%, -50%);

  visibility: hidden;
  z-index: 2;
  opacity: 0%;
  border-radius: 0 10px 10px 0;
  transition: width 0.3s ease-out, opacity 0.3s;
  box-shadow: rgba(99, 99, 99, 0.2) 8px 0px 8px 0px;
`;

const Wrapper = styled.div`
  margin-bottom: ${(props) => (props.last ? 0 : 70)}px;
  ${({ isLocked }) => isLocked && "pointer-events: none"};
  ${({ isActive }) => isActive && "pointer-events: none"};
  position: relative;

  &:hover > ${Tooltip} {
    visibility: visible;
    width: 180px;
    opacity: 100%;
  }

  @media ${devices.tablet} {
    &:hover > ${Tooltip} {
      visibility: hidden;
      width: 0;
      opacity: 0%;
    }
  }
`;

const NavIcon = styled.div`
  color: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.darkText};
`;

const NavLink = styled(Link)``;
