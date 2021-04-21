import React, { useContext } from "react";
import { Link } from "react-router-dom";

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
  return (
    <Wrapper>
      <HomeContent>
        <ContentHeader>
          <Name>Shukur</Name> Aliyev
        </ContentHeader>
        <ContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          recusandae dicta, non, optio neque accusamus officia aut quidem
          corporis fugiat sit laboriosam voluptas totam? Consequatur id libero
          quia deleniti eum.
        </ContentText>
        <CustomButton
          as={Link}
          to={navItems[1]?.to ? navItems[1]?.to : ""}
          title="See Projects"
          width="140px"
          height="55px"
          type="action"
        />
      </HomeContent>
      <ContentImage src={WebDev} />
    </Wrapper>
  );
};
