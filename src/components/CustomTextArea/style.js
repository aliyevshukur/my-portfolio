import styled from "styled-components";

export const AreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Input = styled.textarea`
  background-color: ${({ theme }) => theme.primary};
  height: 125px;
  resize: none;
  padding: 14px 8px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.darkText};
  font-size: 16px;
  color: ${({ theme }) => theme.darkText};

  &:focus {
    outline: none;
    /* padding: 13px 7px; */
    border: 1px solid ${({ theme }) => theme.secondary};
  }
`;
