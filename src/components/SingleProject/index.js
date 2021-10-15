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
      <Image src={image} />

      <ProjectContent>
        <Details>
          <Name>{name}</Name>
          <Desc>{desc}</Desc>
        </Details>
        <Buttons>
          <CustomButton
            title="live"
            type="action"
            width="80px"
            height="28px"
            target="_blank"
            href={liveLink}
          />
          <CustomButton
            title="github"
            width="80px"
            height="28px"
            target="_blank"
            href={githubLink}
          />
        </Buttons>
      </ProjectContent>
    </ProjectWrapper>
  );
};
