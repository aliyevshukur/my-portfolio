import React from "react";
import {
  ProjectWrapper,
  Paralelogram,
  Image,
  DarkMask,
  Details,
  Name,
  Desc,
} from "./style.js";

export const SingleProject = ({ reverse, left, image, name, desc }) => {
  return (
    <ProjectWrapper>
      <Paralelogram reverse={reverse} left={left}>
        <DarkMask />
        <Details>
          <Name>{name}</Name>
          <Desc>{desc}</Desc>
        </Details>
        <Image
          reverse={reverse}
          left={left}
          src="https://www.w3schools.com/w3css/img_lights.jpg"
        />
      </Paralelogram>
    </ProjectWrapper>
  );
};
