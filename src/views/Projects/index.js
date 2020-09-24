import React from "react";

import { ProjectWrapper as Wrapper, ContentWrapper } from "./style";

export const Projects = () => {
  const projects = [
    {
      name: "Neotravel",
      desc:
        "Mobile application that gathers hotels around the world for users to explore.",
      link: "https://github.com/aliyevshukur/neotravel",
    },
    {
      name: "Notes App",
      desc: "Website ",
      link: "https://github.com/aliyevshukur/neotravel",
    },
  ];

  return (
    <Wrapper>
      <h1>Projects</h1>
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
};
