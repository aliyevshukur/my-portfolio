import { InView } from "react-intersection-observer";
import styled from "styled-components";
import { devices } from "../../GlobalStyle";
import { Image } from "../Image";

export const AsyncImage = (imageProps) => {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <ImageWrapper ref={ref}>
          <Image inView={inView} {...imageProps} />
        </ImageWrapper>
      )}
    </InView>
  );
};

const ImageWrapper = styled.div`
  width: 40%;
  aspet-ratio: 2 / 1;
  aspet-ratio: 2 / 1;
  position: relative;

  @media ${devices.tablet} {
    width: 100%;
  }
`;
