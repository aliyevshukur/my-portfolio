import styled from "styled-components";

export const ProjectWrapper = styled.div`
  overflow: hidden;
  display: inline-block;
`;
export const Paralelogram = styled.div`
  width: 500px;
  height: 200px;
  position: relative;

  ${({ reverse, left }) => {
    if (left && reverse) {
      return "clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);";
    } else if (left) {
      return "clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);";
    } else if (reverse) {
      return "clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);";
    } else {
      return "clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);";
    }
  }};
`;

export const Image = styled.img``;

export const DarkMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));

  /* &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    cursor: pointer;
  } */
`;

export const Details = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px 20px;
  ${({ left, reverse }) =>
    left ? "padding: 5px 60px 5px 20px;" : "padding: 5px 20px 5px 45px;"}
`;

export const Name = styled.p`
  color: #ffffff;
  font-size: 30px;
`;

export const Desc = styled.p`
  color: #ffffff;
  font-size: 16px;
`;
