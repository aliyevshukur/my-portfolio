import React, { useEffect, useRef, useState } from "react";
import { BsFiletypeScss } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiTypescript } from "react-icons/si";
import { AsyncImage } from "../AsyncImage/index.js";
import { CustomButton } from "../CustomButton/index.js";
import {
  Buttons,
  Desc,
  Details,
  IconName,
  Name,
  SingleProjectContent,
  SingleProjectImage,
  SingleProjectWrapper,
  TechStack,
  TechStackLabel,
} from "./style.js";
export const SingleProject = ({
  image,
  name,
  desc,
  techStack,
  liveLink,
  githubLink,
}) => {
  const [singleProjectImgWidth, setSingleProjectImgWidth] = useState(0);
  const SingleProjectImageRef = useRef();

  useEffect(() => {
    setSingleProjectImgWidth(SingleProjectImageRef.current?.offsetWidth);
  }, []);

  const pickIcons = (name) => {
    const size = "10px";
    switch (name) {
      case "React":
        return <FaReact width={size} height={size} />;
      case "Node.js":
        return <FaNodeJs width={size} height={size} />;
      case "Express.js":
        return <SiExpress width={size} height={size} />;
      case "SCSS":
        return <BsFiletypeScss width={size} height={size} />;
      case "MongoDB":
        return <SiMongodb width={size} height={size} />;
      case "Mongoose":
        return <SiMongoose width={size} height={size} />;
      case "TypeScript":
        return <SiTypescript width={size} height={size} />;
      default:
        return <FaReact width={size} height={size} />;
    }
  };
  return (
    <SingleProjectWrapper>
      <SingleProjectImage
        ref={SingleProjectImageRef}
        width={singleProjectImgWidth}
      >
        <AsyncImage src={image} width={singleProjectImgWidth} />
        <div className="image-description" onClick={() => window.open(liveLink)}> Go to live site</div>
      </SingleProjectImage>

      <SingleProjectContent>
        <Details>
          <Name>{name}</Name>
          <Desc>{desc}</Desc>
          <TechStack>
            <TechStackLabel>Tech Stack:</TechStackLabel>
            {techStack.split(", ").map((name, index) => (
              <IconName key={index}>
                {pickIcons(name)} {name}
              </IconName>
            ))}
          </TechStack>
        </Details>
        <Buttons>
          <CustomButton
            title='live'
            type='action'
            width='80px'
            height='28px'
            target='_blank'
            href={liveLink}
          />
          <CustomButton
            title='github'
            width='80px'
            height='28px'
            target='_blank'
            href={githubLink}
          />
        </Buttons>
      </SingleProjectContent>
    </SingleProjectWrapper>
  );
};
