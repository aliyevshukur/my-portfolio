import React from "react";
import { ProjectRow } from "../../components/ProjectRow";

import { ProjectWrapper as Wrapper, ContentWrapper } from "./style";

export const Projects = () => {
  // Every 2 projects must be written as seperate array
  const projects = [
    [
      {
        name: "Neotravel",
        desc:
          "Mobile application that gathers hotels around the world for users to explore.",
        link: "https://github.com/aliyevshukur/neotravel",
      },
      {
        name: "Notes App",
        desc: "Website for taking simple notes.",
        link: "https://github.com/aliyevshukur/note-taking-website",
      },
    ],
    [
      {
        name: "Shop List",
        desc:
          "Handy grocery list application. Add products, select quantities and check off items.",
        link: "https://github.com/aliyevshukur/shop-list",
      },

      {
        name: "Travel Overload",
        desc:
          "Place to share your experiences and read about others travel stories. ",
        link: "https://github.com/aliyevshukur/travel-overload",
      },
    ],
    [
      {
        name: "Shop List",
        desc:
          "Handy grocery list application. Add products, select quantities and check off items.",
        link: "https://github.com/aliyevshukur/shop-list",
      },

      {
        name: "Travel Overload",
        desc:
          "Place to share your experiences and read about others travel stories. ",
        link: "https://github.com/aliyevshukur/travel-overload",
      },
    ],
  ];

  return (
    <Wrapper>
      <ContentWrapper>
        {projects.map((projectsArr, index) => (
          <ProjectRow
            projects={projectsArr}
            secondType={index % 2 === 0 ? true : false}
          />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};
