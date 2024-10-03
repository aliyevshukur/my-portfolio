import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "transitions-kit";

export const Image = ({ inView, width, ...imageProps }) => {
  const [status, setStatus] = useState("loading");

  return (
    <>
      <Fade appear={false} in={status === "loading"} unmountOnExit>
        <LoadingDiv width={width} />
      </Fade>

      {inView && (
        <Fade in={status === "loaded"}>
          <ImageToLoad
            {...imageProps}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("failed")}
          />
        </Fade>
      )}

      <Fade in={status === "failed"} mountOnEnter unmountOnExit>
        <div>error</div>
      </Fade>
    </>
  );
};

const loadAnimation = (width) => {
  // console.log(`Width in keyframes ${width}`);

  return keyframes`
  from {transform: translateX(0);}
  to {transform: translateX(${width}px);}
`;
};

const LoadingDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 32px;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primaryDarker} 0%,
    ${({ theme }) => theme.primary} 100%
  );
  overflow: hidden;

  &::before {
    content: "";
    width: 20%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${({ width }) => loadAnimation(width)} 2s infinite;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.primary} 0%,
      ${({ theme }) => theme.primaryDarker} 100%
    );
  }
`;

const ImageToLoad = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
