import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --color-background: rgb(241, 241, 224);
    --color-logo: #5dced8;
    --color-zilla: #76d4d9;
    --color-yellow: #efef92;
    --color-icon: #4c4c4a;
    --color-grey: #b5b4b4;
    --break-medium: 450px;
    --break-large: 650px;
    --icon-small: 1.5rem;
    --icon-big: 2.4rem;
    --font-primary: Geneva, Tahoma, sans-serif;
    --font-small: 0.8rem;
    --font-medium: 1rem;
    --font-large: 1.2rem;
    --font-big: 1.5rem;
    --search-small: 1.2rem;
    --search-big: 2.3rem;
    --logo-big: 3.5rem;
    --logo-small: 1.2rem;
}
#root {
    max-width: 1400px;
    margin: auto;
}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .page-wrapper {
        height: 100dvh;
        height: 100vh;
        display:grid;
        font-family: 'Poppins', sans-serif;
        grid-template-rows:
            auto
            1fr
            auto

    }

    .visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

`;

export default GlobalStyle;
