import React, { useContext, useState, useEffect } from "react";
import { withTheme } from "styled-components";
import { useLocation } from "react-router-dom";
import { FiBookOpen, FiCpu, FiGitBranch } from "react-icons/fi";
import { IconContext } from "react-icons";

import { NavContent, NavWrapper } from "./style";
import { BurgerMenu } from "../BurgerMenu";
import { NavContext } from "./NavContext";
import { CSSTransition } from "react-transition-group";
import { size } from "../../GlobalStyle";
import { NavItem } from "../NavItem";

export const LeftNavigation = withTheme(() => {
  const [toggleMenu, setToggleMenu] = useState(true); // Shows, hides naivgation with animation
  const { pathname } = useLocation();
  const { isVisible } = useContext(NavContext); // Hides navigation when it's not needed

  const routes = ["/", "/projects", "/contact"];
  const currentScreen = routes.indexOf(pathname);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < size.tablet) setToggleMenu(false);
    else setToggleMenu(true);
  };

  const navItems = [
    {
      to: {
        pathname: "/",
        state: { prevScreen: currentScreen, routes },
      },
      isActive: pathname === "/",
      icon: <FiCpu />,
    },
    {
      to: {
        pathname: "/projects",
        state: { prevScreen: currentScreen, routes },
      },
      isActive: pathname === "/projects",
      icon: <FiGitBranch />,
    },
    {
      to: {
        pathname: "/contact",
        state: { prevScreen: currentScreen, routes },
      },
      isActive: pathname === "/contact",
      icon: <FiBookOpen />,
      last: true,
    },
  ];

  return (
    <NavWrapper toggleMenu={toggleMenu}>
      <BurgerMenu
        onClick={() => setToggleMenu(!toggleMenu)}
        isToggled={toggleMenu}
      />
      <CSSTransition
        in={toggleMenu}
        unmountOnExit
        timeout={500}
        classNames="menu-open"
      >
        <NavContent isVisible={isVisible}>
          <IconContext.Provider value={{ size: "1.3em" }}>
            {navItems.map(({ to, isActive, icon, last }, ind) => (
              <NavItem
                to={to}
                isActive={isActive}
                icon={icon}
                last={last}
                key={ind}
              />
            ))}
          </IconContext.Provider>
        </NavContent>
      </CSSTransition>
    </NavWrapper>
  );
});
