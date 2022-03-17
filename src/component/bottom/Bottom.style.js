import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

export const BottomStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.inputBackground};
  position: relative;
`;

export const UploadingStyled = styled.div`
  position: absolute;
  background: green;
  padding: 11px 11px;
  border-radius: 30px;
  bottom: 77px;
  left: 6px;
  transform: translateX(-115%);
`;

export const PictureStyled = styled.div`
  font-size: 28px;
`;

export const DocumentStyled = styled.div`
  font-size: 28px;
`;

export const OpenModal = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  cursor: pointer;
`;

export const TextArea = styled(TextareaAutosize)`
  resize: none;
  flex-grow: 8;
  margin: 5px;
  border-radius: 30px;
  font-size: 17px;
  padding: 5px 13px;
  border: none;
  outline: 1px darkgrey;
  background-color: ${({ theme }) => theme.textAreaBackground};
  color: ${({ theme }) => theme.color};
  &:focus {
    border: none;
  }
`;

export const SendButton = styled.button`
  margin: 5px;
  background-color: ${({ theme }) => theme.textAreaBackground};
  border: none;
  font-size: 27px;
  color: ${({ theme }) => theme.pinButtonColor};
  border-radius: 50%;
  padding: 7px 8px 0px 8px;
  cursor: pointer;
`;
