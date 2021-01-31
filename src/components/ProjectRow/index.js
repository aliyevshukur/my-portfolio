import React from "react";

import { RowWrapper } from "./style";
import { SingleProject } from "../SingleProject";

export const ProjectRow = ({ projects, secondType }) => {
  return (
    <RowWrapper>
      <SingleProject
        reverse={secondType ? false : true}
        name={projects[0].name}
        desc={projects[0].desc}
      />
      <SingleProject
        left
        reverse={secondType ? true : false}
        name={projects[1].name}
        desc={projects[1].desc}
      />
    </RowWrapper>
  );
};
