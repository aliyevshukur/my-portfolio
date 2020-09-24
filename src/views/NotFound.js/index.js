import React, { useContext, useEffect } from "react";

import {
  Wrapper,
  MehIcon,
  Button,
  StyledLink,
  NotFoundContent,
  NotFoundImage,
} from "./style";
import { NavContext } from "../../components/LeftNavigation/NavContext";
import NotFoundRobot from "../../img/not-found-robot.svg";

export const NotFound = () => {
  const { setVisible } = useContext(NavContext);
  useEffect(() => {
    setVisible(false);
    return () => {
      setVisible(true);
    };
  }, [setVisible]);
  return (
    <Wrapper>
      {/* <MehIcon /> */}
      <NotFoundImage src={NotFoundRobot} />
      <NotFoundContent>
        {/* <h1>404 not found</h1> */}
        <Button>
          <StyledLink to="/">Go Home</StyledLink>
        </Button>
      </NotFoundContent>
    </Wrapper>
  );
};
