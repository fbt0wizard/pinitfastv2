import styled from "styled-components";

export const ShareStyled = styled.div`
  margin: 10px 56px 56px 56px;
  text-align: start;
`;

export const BackButtonStyled = styled.button`
  color: ${({ theme }) => theme.color};
  background: none;
  border: 1.5px solid ${({ theme }) => theme.color};
  padding: 5px 10px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const InputWrapperStyled = styled.div`
  text-align: center;
`;
