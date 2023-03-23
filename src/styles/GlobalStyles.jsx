import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: rgb(241, 241, 224);
        --color-secondary: #5DCED8;
        --color-background: blue;
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
