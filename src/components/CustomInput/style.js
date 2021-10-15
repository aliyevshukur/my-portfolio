import styled from "styled-components";

import { devices } from "../../GlobalStyle";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  ${({ type }) => type === "half" && "width: 48%;"}

  @media ${devices.mobileM} {
    margin-bottom: 25px;
  }

  @media ${devices.mobileS} {
    margin-bottom: 20px;
  }
`;
export const InputLabel = styled.label`
  text-transform: uppercase;
  color: ${({ theme }) => theme.darkText};
  margin-bottom: 14px;

  @media ${devices.mobileL} {
    font-size: 13px;
  }

  @media ${devices.mobileM} {
    font-size: 12px;
  }

  @media ${devices.mobileS} {
    font-size: 11px;
  }
`;
export const Input = styled.input`
  background-color: ${({ theme }) => theme.primary};
  padding: 14px 8px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.darkText};

  &:focus {
    outline: none;
    /* padding: 13px 7px; */
    border: 1px solid ${({ theme }) => theme.secondary};
  }

  @media ${devices.mobileL} {
    padding: calc(14px * 0.8) calc(8px * 0.8);

    &:focus {
      padding: calc((14px * 0.8) - 1px) calc((8px * 0.8) - 1px);
    }
  }

  @media ${devices.mobileM} {
    padding: calc(14px * 0.6) calc(8px * 0.6);

    &:focus {
      padding: calc((14px * 0.6) - 1px) calc((8px * 0.6) - 1px);
    }
  }

  @media ${devices.mobileS} {
    padding: calc(14px * 0.5) calc(8px * 0.5);

    &:focus {
      padding: calc((14px * 0.5) - 1px) calc((8px * 0.5) - 1px);
    }
  }
`;
