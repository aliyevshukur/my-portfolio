import styled from "styled-components";
import { FiMeh } from "react-icons/fi";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: ${(props) => props.theme.secondary};
    font-size: 8vw;
  }
`;

export const MehIcon = styled(FiMeh)`
  color: ${(props) => props.theme.secondary};
  width: 150px;
  height: 150px;
  margin-bottom: 90px;
`;
