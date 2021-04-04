import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-bottom: ${(props) => (props.last ? 0 : 70)}px;
`;

const NavIcon = styled.div`
  color: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.darkText};
`;

const NavLink = styled(Link)``;

export const NavItem = ({ icon, to, isActive, last, onClick }) => {
  return (
    <Wrapper last={last} onClick={onClick}>
      <NavLink to={to}>
        <NavIcon isActive={isActive}>{icon}</NavIcon>
      </NavLink>
    </Wrapper>
  );
};
