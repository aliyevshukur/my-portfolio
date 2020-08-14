import styled from "styled-components";
import { FiMeh } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: ${(props) => props.theme.darkText};
    font-size: 8vw;
    margin-bottom: 20px;
  }
`;

export const NotFoundContent = styled.div``;

export const MehIcon = styled(FiMeh)`
  color: ${(props) => props.theme.darkText};
  width: 150px;
  height: 150px;
  margin-bottom: 70px;
`;
export const Button = styled.div`
  background: ${(props) => props.theme.secondary};
  padding: ${(props) => props.theme.spacing(0.5)}px
    ${(props) => props.theme.spacing(1)}px;
  display: inline-block;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primary};
  font-size: 20px;
`;
