import { InView } from "react-intersection-observer";
import styled from "styled-components";
import { Image } from "../Image";

export const AsyncImage = ({ ...imageProps }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <ImageWrapper id='Async-image' ref={ref}>
          <Image inView={inView} {...imageProps} />
        </ImageWrapper>
      )}
    </InView>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
