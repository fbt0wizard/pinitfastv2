import styled from "styled-components";

export const ImgStyled = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 5px;
  @media (max-width: 650px) {
    /* max-height: 300px; */
    max-width: 305px;
  }
`;

export const ImageNameStyled = styled.p`
color: ${({theme}) => theme.color};
font-size: 13.5px;
font-style: italic;
${(props) => props.details}
`
