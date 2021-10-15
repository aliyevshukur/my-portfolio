import React from "react";

import { ProjectWrapper, ContentWrapper, PageLabel } from "./style";
import { SingleProject } from "../../components/SingleProject";
import travel from "../../img/travel.png";
import neotravel from "../../img/neotravel.png";

export const Projects = () => {
  // Every 2 projects must be written as seperate array
  const projects = [
    {
      name: "Neotravel",
      desc:
        "Mobile application that gathers hotels around the world for users to explore.",
      liveLink: "",
      githubLink: "https://github.com/aliyevshukur/neotravel",
      image: neotravel,
    },
    {
      name: "Travel Overload",
      desc:
        "Place to share your experiences and read about others travel stories. ",
      liveLink: "https://travel-overload.netlify.app",
      githubLink: "https://github.com/aliyevshukur/travel-overload",
      image: travel,
    },
    {
      name: "Notes App",
      desc: "Website for taking simple notes.",
      liveLink: "",
      githubLink: "https://github.com/aliyevshukur/note-taking-website",
    },

    {
      name: "Shop List",
      desc:
        "Handy grocery list application. Add products, select quantities and check off items.",
      liveLink: "",
      githubLink: "https://github.com/aliyevshukur/shop-list",
    },

    {
      name: "Travel Overload",
      desc:
        "Place to share your experiences and read about others travel stories. ",
      liveLink: "https://travel-overload.netlify.app/home",
      githubLink: "https://github.com/aliyevshukur/travel-overload",
    },

    {
      name: "Shop List",
      desc:
        "Handy grocery list application. Add products, select quantities and check off items.",
      liveLink: "",
      githubLink: "https://github.com/aliyevshukur/shop-list",
    },
  ];

  return (
    <ProjectWrapper>
      <ContentWrapper>
        <PageLabel>Projects</PageLabel>
        {projects.map((project, ind) => (
          <SingleProject
            name={project.name}
            desc={project.desc}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            key={ind}
            image={project.image}
          />
        ))}
      </ContentWrapper>
    </ProjectWrapper>
  );
};
