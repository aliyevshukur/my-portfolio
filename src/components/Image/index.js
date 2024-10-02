import { useState } from "react";
import styled from "styled-components";
import { Fade } from "transitions-kit";

export const Image = ({ inView, ...imageProps }) => {
  const [status, setStatus] = useState("loading");

  return (
    <>
      <Fade appear={false} in={status === "loading"} unmountOnExit>
        <LoadingDiv>loading...</LoadingDiv>
      </Fade>

      {inView && (
        <Fade in={status === "loaded"}>
          <img
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

const LoadingDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  font-size: 32px;
`;
