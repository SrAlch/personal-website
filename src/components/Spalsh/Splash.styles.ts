import styled from "styled-components";


export const Wrapper = styled.div`
    background: black;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    animation: animationCorner 2s forwards;

    @-webkit-keyframes animationCorner {
        0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: 0% 0%;
                    transform-origin: 0% 0%;
        }
        100% {
            -webkit-transform: scale(0.01);
                    transform: scale(0.01);
            -webkit-transform-origin: 0% 0%;
                    transform-origin: 0% 0%;
        }
    }
    @keyframes animationCorner {
        0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: 0% 0%;
                    transform-origin: 0% 0%;
        }
        100% {
            -webkit-transform: scale(0.01);
                    transform: scale(0.01);
            -webkit-transform-origin: 0% 0%;
                    transform-origin: 0% 0%;
        }
    }

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const LogoImg = styled.img`
    position: fixed;
    width: 241px;
    animation: animationLogo 12s forwards;
`;
