import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Wrapper, MehIcon } from "./style";
import {
  NavContext,
  NavConsumer,
} from "../../components/LeftNavigation/NavContext";

export const NotFound = () => {
  const { setVisible } = useContext(NavContext);
  const { pathname } = useLocation();
  useEffect(() => {
    setVisible(false);
    return () => {
      setVisible(true);
    };
  }, []);
  return (
    // <NavConsumer>
    <Wrapper>
      <MehIcon />
      <h1>404 not found</h1>
    </Wrapper>
    // </NavConsumer>
  );
};
