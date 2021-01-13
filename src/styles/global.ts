import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #E0E0E0;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
