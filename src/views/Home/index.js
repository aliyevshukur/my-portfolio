import React from "react";

import {
  HomeWrapper as Wrapper,
  ContentHeader,
  ContentText,
  HomeContent,
  ContentImage,
  Name,
} from "./style";
import OldPC from "../../img/old-pc.svg";
import WebDev from "../../img/web-dev.svg";
import Bait from "../../img/bait.gif";

export const Home = () => {
  return (
    <Wrapper>
      {/* <HomeContent>
        <ContentHeader>
          <Name>Shukur</Name> Aliyev
        </ContentHeader>
        <ContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          recusandae dicta, non, optio neque accusamus officia aut quidem
          corporis fugiat sit laboriosam voluptas totam? Consequatur id libero
          quia deleniti eum.
        </ContentText>
      </HomeContent>
      <ContentImage src={WebDev} /> */}
      <img src={Bait} />
    </Wrapper>
  );
};
