import React from "react";

import { SingleProject } from "../../components/SingleProject";
import neotravel from "../../img/neotravel.png";
import noted from "../../img/noted.png";
import planteResonance from "../../img/planet-resonance-page.png";
import travel from "../../img/travel.png";
import { ContentWrapper, PageLabel, ProjectWrapper } from "./style";

export const Projects = () => {
  // Every 2 projects must be written as seperate array
  const projects = [
    {
      name: "Travel Overload",
      desc: "Place to share your experiences and read about others travel stories.",
      techStack: "React, SCSS, Node.js, Express.js, MongoDB, Mongoose",
      liveLink: "https://travel-overload.vercel.app/login",
      githubLink: "https://github.com/aliyevshukur/travel-overload",
      image: travel,
    },
    {
      name: "Plante Resonance",
      desc: "Website for the company that sells latest technology speakers.",
      techStack:
        "React, SCSS, Typescript, Node.js, Express.js, MongoDB, Mongoose",
      liveLink: "https://sales-db-app.vercel.app/",
      githubLink: "https://github.com/aliyevshukur/sales-db-app",
      image: planteResonance,
    },
    {
      name: "Noted! App",
      desc: "Your virtual board to put your sticky notes.",
      techStack: "React, SCSS, DNDKit, Node.js, Express.js, MongoDB, Mongoose",
      liveLink: "https://note-taking-website-two.vercel.app/",
      githubLink: "https://github.com/aliyevshukur/note-taking-website",
      image: noted,
    },
  ];

  return (
    <ProjectWrapper>
      <PageLabel>Projects</PageLabel>
      {projects.map((project, ind) => (
        <SingleProject
          name={project.name}
          desc={project.desc}
          techStack={project.techStack}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
          key={ind}
          image={project.image}
        />
      ))}
    </ProjectWrapper>
  );
};
