import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    } 
    
    *{
        box-sizing: border-box;
    }

    h1, h2, h3 {
        font-family: 'Roboto Mono', monospace;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 700;
        }

        h2 {
            font-size: 1.6rem;
            font-weight: 500;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 400;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`;