import React from "react";
import { CustomButton } from "../CustomButton/index.js";
import {
  ProjectWrapper,
  ProjectContent,
  Image,
  Details,
  Buttons,
  Name,
  Desc,
} from "./style.js";

export const SingleProject = ({ image, name, desc, liveLink, githubLink }) => {
  return (
    <ProjectWrapper>
      <Image src="https://www.w3schools.com/w3css/img_lights.jpg" />

      <ProjectContent>
        <Details>
          <Name>{name}</Name>
          <Desc>{desc}</Desc>
        </Details>
        <Buttons>
          <CustomButton title="live" type="action" width="80px" height="28px" />
          <CustomButton title="github" width="80px" height="28px" />
        </Buttons>
      </ProjectContent>
    </ProjectWrapper>
  );
};
