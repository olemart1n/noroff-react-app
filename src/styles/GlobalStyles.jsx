import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: blue;
        --color-secondary: #5DCED8;
        --color-background: rgb(241, 241, 224);
        --color-button: #efef92;
        --color-link: grey
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`;

export default GlobalStyle;
