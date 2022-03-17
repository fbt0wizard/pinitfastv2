import styled from "styled-components";

export const DisplayImageStyled = styled.div`
  height: max-content;
  margin: 0 3px;
`;

export const ImgStyledBox = styled.img`
  max-height: 110px;
  cursor: pointer;
  margin: 4px;
  @media (max-width: 650px) {
    max-width: 100%;
  }
`;

export const DocumentNameStyled = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 13px;
`;
