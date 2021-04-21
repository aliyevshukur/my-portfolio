import React, { useContext, useEffect } from "react";

import {
  Wrapper,
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
      <NotFoundImage src={NotFoundRobot} />
      <NotFoundContent>
        <Button>
          <StyledLink to="/">Go Home</StyledLink>
        </Button>
      </NotFoundContent>
    </Wrapper>
  );
};
