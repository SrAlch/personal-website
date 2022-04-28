import styled from "styled-components";

export const Wrapper = styled.div`
    background: url("../../media/bg_bggenerator_com.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 900px;
    position: relative;
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