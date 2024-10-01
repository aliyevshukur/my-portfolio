import React, { useContext, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineContacts } from "react-icons/ai";
import { PiBlueprint } from "react-icons/pi";
import { TbHome } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { withTheme } from "styled-components";

import { size } from "../../GlobalStyle";
import { BurgerMenu } from "../BurgerMenu";
import { NavItem } from "../NavItem";
import { NavContext } from "./NavContext";
import { NavContent, NavOverlay, NavWrapper } from "./style";

export const LeftNavigation = withTheme(() => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [isTabletMode, setIsTabletMode] = useState(false);
  const [isNavItemLocked, toggleNavItemLock] = useState();

  const { isVisible, navItems, setNavItems, routes } = useContext(NavContext);
  const { pathname } = useLocation();

  const currentScreen = routes.indexOf(pathname);
  const navItemsData = [
    {
      to: {
        pathname: "/",
        state: { prevScreen: currentScreen, routes },
      },
      isActive: pathname === "/",
      icon: <TbHome />,
      tooltip: "Home",
    },
    {
      to: {
        pathname: "/projects",
        state: { prevScreen: currentScreen, routes },
      },
      isActive: pathname === "/projects",
      icon: <PiBlueprint />,
      tooltip: "Projects",
    },
    {
      to: {
        pathname: "/contact",
        state: { prevScreen: currentScreen, routes },
      },
      isActive: pathname === "/contact",
      icon: <AiOutlineContacts />,
      tooltip: "Contact",
      last: true,
    },
  ];

  useEffect(() => {
    if (window.innerWidth <= size.tablet) {
      setToggleMenu(false);
      setIsTabletMode(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setNavItems(navItemsData);
  }, [currentScreen]);

  const handleResize = () => {
    if (window.innerWidth <= size.tablet) {
      setToggleMenu(false);
      setIsTabletMode(true);
    } else {
      setToggleMenu(true);
      setIsTabletMode(false);
    }
  };

  // Prevents users to spam switching between screens by locking navigation
  const lockNavItem = () => {
    toggleNavItemLock(true);
    setTimeout(() => toggleNavItemLock(false), 1000);
  };

  // Hide navigation on switching pages in tablet mode
  const onNavItemClick = () => {
    if (isTabletMode) {
      setToggleMenu(false);
    }
  };

  return (
    <NavWrapper toggleMenu={toggleMenu}>
      {isTabletMode && toggleMenu && <NavOverlay />}

      <BurgerMenu
        onClick={() => setToggleMenu(!toggleMenu)}
        isToggled={toggleMenu}
      />

      <CSSTransition
        in={toggleMenu}
        unmountOnExit
        timeout={500}
        classNames='menu-open'
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
                onClick={() => onNavItemClick()}
                isLocked={isNavItemLocked}
                lockLink={lockNavItem}
                tooltip={tooltip}
              />
            ))}
          </IconContext.Provider>
        </NavContent>
      </CSSTransition>
    </NavWrapper>
  );
});
