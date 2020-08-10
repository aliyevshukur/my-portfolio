import React from "react";
import { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  NavWrapper,
  HomeIcon,
  ProjectIcon,
  ContactIcon,
  IconWrapper,
} from "./style";
// import Logo from "../../../public/img/logo.svg";

export const LeftNavigation = withTheme((props) => {
  const { pathname } = useLocation();

  return (
    <NavWrapper>
      {/* <img src={Logo} /> */}
      <IconWrapper value={{ size: "1.3em" }}>
        <Link to={prepateLocation(pathname, "/")}>
          <HomeIcon isActive={pathname === "/"} />
        </Link>
        <Link to={prepateLocation(pathname, "/projects")}>
          <ProjectIcon isActive={pathname === "/projects"} />
        </Link>
        <Link to={prepateLocation(pathname, "/contact")}>
          <ContactIcon isActive={pathname === "/contact"} last />
        </Link>
      </IconWrapper>
    </NavWrapper>
  );
});

const prepateLocation = (prevPath, currentPath) => {
  if (currentPath === "/") {
    console.log("h down");
    return { pathname: currentPath, state: { animation: "slide-down" } };
  }

  if (currentPath === "/contact") {
    console.log("c up");

    return { pathname: currentPath, state: { animation: "slide-up" } };
  }

  if (currentPath === "/projects" && prevPath === "/") {
    console.log("p down");

    return { pathname: currentPath, state: { animation: "slide-up" } };
  }

  if (currentPath === "/projects" && prevPath === "/contact") {
    console.log("p down");

    return { pathname: currentPath, state: { animation: "slide-down" } };
  }
};
