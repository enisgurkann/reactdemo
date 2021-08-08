import { createGlobalStyle } from 'styled-components';
import UbuntuBold from '../assets/fonts/Ubuntu-Bold.ttf';
import UbuntuLight from '../assets/fonts/Ubuntu-Light.ttf';
import UbuntuRegular from '../assets/fonts/Ubuntu-Regular.ttf';
import UbuntuMedium from '../assets/fonts/Ubuntu-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }
  * {
    font-family: 'Ubuntu', sans-serif;
    color: #000;
    font-size: 14px;
    box-sizing: border-box; 
    letter-spacing: 2;
    text-align: left;
  }
  body{ 
    margin: 0;
  }

  #root {
    min-height: 100vh;
  }
`;
