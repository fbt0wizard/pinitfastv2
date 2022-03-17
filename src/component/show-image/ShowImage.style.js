import styled from "styled-components";

export const ShowImageStyled = styled.div`
  height: max-content;
  width: 50%;
  padding: 0.7rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: ${({ theme }) => theme.modalContentBg};
  @media (max-width: 743px) {
    height: max-content;
    width: 75%;
  }
  @media (max-width: 600px) {
    height: max-content;
    width: 90%;
  }
`;

export const CloseBtnStyled = styled.button`
  position: absolute;
  right: 2px;
  top: 3px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const ContStyled = styled.div`
  text-align: center;
  padding: 9px 9px;
  border-radius: 9px;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  width: max-content;
  margin: auto;
`;

export const OptionButtonStyled = styled.button`
  background: none;
  color: ${({ theme }) => theme.color};
  border: none;
  font-size: 14px;
  margin: 7px 13px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 650px) {
    font-size: 13px;
    font-weight: 500;
  }
`;
