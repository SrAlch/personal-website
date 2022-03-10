import React from "react";

// Styles
import PersonalLogo from "../../images/logoBlack.png";
import { Wrapper, Content, LogoImg } from "./Splash.styles";

const Splash: React.FC = () => (
    <Wrapper>
        <Content>
            <LogoImg src={PersonalLogo} alt='Personal-logo' />
        </Content>
    </Wrapper>
);


export default Splash;
