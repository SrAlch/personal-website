import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <h1>DANIEL CONTERO</h1>
            </Link>
            <div className="routes">
                <Link to='/'>
                    <h2>BLOG</h2>
                </Link>
                <Link to='/'>
                    <h2>Contact</h2>
                </Link>
                <Link to='/'>
                    <h2>Dowload CV</h2>
                </Link>
            </div>
        </Content>
    </Wrapper>
);

export default Header;