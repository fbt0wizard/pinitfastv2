import styled from "styled-components";

export const ImageCol = styled.div`
display: flex;
max-width: 97%;
`

export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: ${({theme}) => theme.modalBackground};
    display: flex;
    align-items: center;
    justify-content: center;
`