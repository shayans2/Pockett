import { createGlobalStyle } from 'styled-components';
import { isAndroid } from 'react-device-detect';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    position: ${isAndroid ? 'relative' : 'fixed'};
    inset: ${isAndroid ? 'auto' : 0};
    box-sizing: border-box;
    font-family: "Montserrat", Tahoma;
    background-color: #14242a;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none; 
    -moz-user-select: none;
    -ms-user-select: none; 
     user-select: none; 
  }
`;
