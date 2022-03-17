import styled from "styled-components";

export const DashboardStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: ${({theme}) => theme.backgroundImg};
    background-position: center;
    background-size: auto;
    transition: all 0.70s linear;
`