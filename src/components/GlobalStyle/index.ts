import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font: 14px 'Century Gothic', Futura, sans-serif;
    background-color: #dcdcdc;
  }
  a {
    text-decoration: none;
  }
  ul,
  ol {
    list-style: none;
  }
  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
`;
