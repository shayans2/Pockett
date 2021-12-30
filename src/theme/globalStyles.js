import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    ${'' /* overscroll-behavior: none; */}
    position: fixed;
    inset: 0;
    box-sizing: border-box;
    font-family: "Montserrat", Tahoma;
    background-color: #14242a;
  }
`;
