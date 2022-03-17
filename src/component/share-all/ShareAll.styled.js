import styled from "styled-components";
import Select from "react-select";

export const ShareAllStyled = styled.div`
position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: ${({ theme }) => theme.modalContentBg};
  border-radius: 4px;
  height: max-content;
  width: 45%;
  margin: auto;
  text-align: center;
  @media (max-width: 743px) {
    height: max-content;
    width: 75%;
  }
  @media (max-width: 600px) {
    height: max-content;
    width: 90%;
  }
`;
export const SelectStyled = styled(Select)`
  width: 70%;
  margin: 1rem auto 0 auto;
  .css-1s2u09g-control {
    text-align: start;
    /* background: black !important; */
    &:focus {
    }
  }
`;
export const InputLabelStyled = styled.div`
text-align: center;
`;

export const LabelStyled = styled.label`
  font-size: 13px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 67px;
  margin: auto;
  color: ${({ theme }) => theme.color};
`;

export const InputNameStyled = styled.input`
  width: 70%;
  margin: 1rem auto;
  height: 35px;
  text-align: start;
  border: 1px solid #999;
  border-radius: 5px;
  padding: 0 4px;
  font-size: 15px;
  color: ${({ theme }) => theme.shareInputColor};
`;
export const CheckBoxStyled = styled.input``;

export const UserControlStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 2rem auto 0 auto;
`;
export const UserButton = styled.p`
  color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.color};
  padding: 8px;
  border-radius: 4px;
`;
