import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: calc(100 % - ${(props) => props.theme.leftNavWidth}); */
  height: 100%;
 
  position: absolute;
  top: 0;
  right: 0;
  left: ${(props) => props.theme.leftNavWidth};
`;
