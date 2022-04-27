import styled from "styled-components";

export const Wrapper = styled.div`
    background: rgba(0, 0, 0 , 0.5);
    position: relative;
    width: 100vw;
    height: 80px;
    z-index: 1;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 0 auto;

    .routes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 800px;
        min-width: 400px;
        height: 100%;
    }
`;
