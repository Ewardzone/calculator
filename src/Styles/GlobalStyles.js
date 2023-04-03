import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: grey;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
