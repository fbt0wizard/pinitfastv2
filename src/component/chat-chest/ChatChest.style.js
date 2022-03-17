import styled from "styled-components";

export const ChatChestStyled = styled.div``;

export const DataWrapper = styled.div`
  width: max-content;
  padding: 10px 21px 4px 21px;
  background-color: ${({ theme }) => theme.chatBackground};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 30px;
  max-width: 94%;
  margin: 16px 9px;
  margin: ${(props) => props.switch} !important;
  box-sizing: ${(props) => props.box};
  ${(props) => props.additional}
`;

export const PStyled = styled.p`
  word-wrap: break-word;
  color: ${({ theme }) => theme.color};
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  line-height: 23px;
  white-space: pre-line;
  a {
    text-decoration: none;
    color: darkgoldenrod;
  }
`;

export const ControlStyled = styled.div`
  margin-top: 6px;
  border-top: 1px solid ${({ theme }) => theme.chatDivider};
  padding-top: 6px;
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

export const Time = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 11px;
`;

export const Delete = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 11px;
  display: flex;
  margin-left: 10px;
  cursor: pointer;
`;

export const Share = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 11px;
  display: flex;
  margin-left: 10px;
  cursor: pointer;
`;

export const Sender = styled.div`
  margin-left: 8px;
  color: ${({theme}) => theme.senderColor};
  font-size: 13px;
  font-style: italic;
`
