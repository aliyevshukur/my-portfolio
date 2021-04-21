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
  const [toggleMenu, setToggleMenu] = useState(true);
  const [isTabletMode, setIsTabletMode] = useState(false);
  const [isLocked, toggleLinkLock] = useState();
  const { isVisible, setNavItems } = useContext(NavContext);
  const { pathname } = useLocation();

  const routes = ["/", "/projects", "/contact"];
  const currentScreen = routes.indexOf(pathname);
  const navItems = [
    {
      to: {
        pathname: "/",
        state: { prevScreen: currentScreen, routes },
      },
      isActive: pathname === "/",
      icon: <FiCpu />,
      tooltip: "Home",
    },
    {
      to: {
        pathname: "/projects",
        state: { prevScreen: currentScreen, routes },
      },
      isActive: pathname === "/projects",
      icon: <FiGitBranch />,
      tooltip: "Projects",
    },
    {
      to: {
        pathname: "/contact",
        state: { prevScreen: currentScreen, routes },
      },
      isActive: pathname === "/contact",
      icon: <FiBookOpen />,
      tooltip: "Contact",
      last: true,
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setNavItems(navItems);
  }, [currentScreen]);

  const handleResize = () => {
    if (window.innerWidth < size.tablet) {
      setToggleMenu(false);
      setIsTabletMode(true);
    } else {
      setToggleMenu(true);
      setIsTabletMode(false);
    }
  };

  // Prevents users to spam switching between screens by locking navigation
  const lockLink = () => {
    toggleLinkLock(true);
    setTimeout(() => toggleLinkLock(false), 1000);
  };

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
            {navItems.map(({ to, isActive, icon, tooltip, last }, ind) => (
              <NavItem
                to={to}
                isActive={isActive}
                icon={icon}
                last={last}
                key={ind}
                onClick={() => isTabletMode && setToggleMenu(false)}
                isLocked={isLocked}
                lockLink={lockLink}
                tooltip={tooltip}
              />
            ))}
          </IconContext.Provider>
        </NavContent>
      </CSSTransition>
    </NavWrapper>
  );
});
