import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    background-color: black;
    color: white;
  }

  html {
    font-size: 10px;

    @media screen and (max-width: 400px){
      font-size: 8px;
    }
  }

  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    border: none;
    outline: none;

    :focus {
      outline: none;
    }
  }
`;
