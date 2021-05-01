import { createGlobalStyle } from 'styled-components';
import 'vendors/normalize.css';

const GlobalStyle = createGlobalStyle`
   html {
    box-sizing: border-box;
    font-size: 62.5%;
    
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Space Mono', monospace;
    overflow-x: hidden;
  }


   
  h1, h2, h3, h4, h5, span, label, strong {
    margin: 0;
    font-family: 'BioRhyme', serif;
  }

  p {
    color: ${({ theme }) => theme.colors.textGrey}
  }
  
  button {
    padding: 0;
    cursor: pointer;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
