import React from "react";

import {
  HomeWrapper as Wrapper,
  ContentHeader,
  ContentText,
  HomeContent,
  ContentImage,
} from "./style";
import OldPC from "../../img/old-pc.svg";

export const Home = () => {
  return (
    <Wrapper>
      <HomeContent>
        <ContentHeader>Shukur Aliyev</ContentHeader>
        <ContentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          recusandae dicta, non, optio neque accusamus officia aut quidem
          corporis fugiat sit laboriosam voluptas totam? Consequatur id libero
          quia deleniti eum.
        </ContentText>
      </HomeContent>
      <ContentImage src={OldPC} />
    </Wrapper>
  );
};
