import React, { useContext, useState } from "react";
import { withTheme } from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { FiBookOpen, FiCpu, FiGitBranch } from "react-icons/fi";
import { IconContext } from "react-icons";

import { NavWrapper, NavIcon } from "./style";
import { BurgerMenu } from "../BurgerMenu";
import { NavContext } from "./NavContext";
import { CSSTransition } from "react-transition-group";

export const LeftNavigation = withTheme(() => {
  const { pathname } = useLocation();
  const { isVisible } = useContext(NavContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const routes = ["/", "/projects", "/contact"];
  const currentScreen = routes.indexOf(pathname);

  return (
    <>
      <BurgerMenu
        onClick={() => {
          console.log("hi");
          setToggleMenu(!toggleMenu);
        }}
      />
      <CSSTransition in={toggleMenu} timeout={500} classNames="menu-open">
        <NavWrapper isVisible={isVisible} toggleMenu={toggleMenu}>
          <IconContext.Provider value={{ size: "1.3em" }}>
            <Link
              to={{
                pathname: "/",
                state: { prevScreen: currentScreen, routes },
              }}
            >
              <NavIcon isActive={pathname === "/"}>
                <FiCpu />
              </NavIcon>
            </Link>

            <Link
              to={{
                pathname: "/projects",
                state: { prevScreen: currentScreen, routes },
              }}
            >
              <NavIcon isActive={pathname === "/projects"}>
                <FiGitBranch />
              </NavIcon>
            </Link>

            <Link
              to={{
                pathname: "/contact",
                state: { prevScreen: currentScreen, routes },
              }}
            >
              <NavIcon isActive={pathname === "/contact"} last>
                <FiBookOpen />
              </NavIcon>
            </Link>
          </IconContext.Provider>
        </NavWrapper>
      </CSSTransition>
    </>
  );
});
