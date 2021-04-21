import React from "react";
import styled, { keyframes } from "styled-components";

import { Link } from "react-router-dom";

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
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.lightText};
  position: absolute;
  top: 50%;
  left: 60px;
  z-index: 2;
  transform: translate(0%, -50%);
  box-shadow: 8px -10px 10px -10px rgba(0, 0, 0, 0.75),
    8px 0px 10px -10px rgba(0, 0, 0, 0.75),
    8px 10px 10px -10px rgba(0, 0, 0, 0.75);
  transition: all 0.3s ease-in;
`;

const Wrapper = styled.div`
  margin-bottom: ${(props) => (props.last ? 0 : 70)}px;
  ${({ isLocked }) => isLocked && "pointer-events: none"};
  ${({ isActive }) => isActive && "pointer-events: none"};
  position: relative;

  &:hover > ${Tooltip} {
    visibility: visible;
    width: 180px;
  }
`;

const NavIcon = styled.div`
  color: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.darkText};
`;

const NavLink = styled(Link)``;
