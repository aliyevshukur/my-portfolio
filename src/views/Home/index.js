import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  HomeWrapper as Wrapper,
  ContentHeader,
  ContentText,
  HomeContent,
  ContentImage,
  Name,
} from "./style";
import WebDev from "../../img/web-dev.svg";
import { CustomButton } from "../../components";
import { NavContext } from "../../components/LeftNavigation/NavContext";

export const Home = () => {
  const { navItems } = useContext(NavContext);
  const history = useHistory();

  return (
    <Wrapper>
      <HomeContent>
        <ContentHeader>
          Hi, I'm <Name>Shukur</Name> Aliyev
        </ContentHeader>
        <ContentText>
          Front end developer who loves to write clean and efficient code
        </ContentText>
        <CustomButton
          title="See Projects"
          width="140px"
          height="55px"
          type="action"
          onClick={() => {
            history.push(navItems[1]?.to);
          }}
        />
      </HomeContent>
      <ContentImage src={WebDev} />
    </Wrapper>
  );
};
