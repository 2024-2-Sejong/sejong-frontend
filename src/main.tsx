import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import SUITThin from "./fonts/SUIT-Thin.woff2";
import SUITExtraLight from "./fonts/SUIT-ExtraLight.woff2";
import SUITLight from "./fonts/SUIT-Light.woff2";
import SUITRegular from "./fonts/SUIT-Regular.woff2";
import SUITMedium from "./fonts/SUIT-Medium.woff2";
import SUITSemiBold from "./fonts/SUIT-SemiBold.woff2";
import SUITBold from "./fonts/SUIT-Bold.woff2";
import SUITExtraBold from "./fonts/SUIT-ExtraBold.woff2";
import SUITHeavy from "./fonts/SUIT-Heavy.woff2";
import App from "./App";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'SUIT';
    font-weight: 100;
    src: url(${SUITThin}) format('woff2');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 200;
    src: url(${SUITExtraLight}) format('woff2');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 300;
    src: url(${SUITLight}) format('woff2');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 400;
    src: url(${SUITRegular}) format('woff2');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 500;
    src: url(${SUITMedium}) format('woff2');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 600;
    src: url(${SUITSemiBold}) format('woff2');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 700;
    src: url(${SUITBold}) format('woff2');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 800;
    src: url(${SUITExtraBold}) format('woff2');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 900;
    src: url(${SUITHeavy}) format('woff2');
  }
  
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'SUIT', sans-serif; /* Use SUIT font */
  font-weight: 500; /* Set default font-weight to 500 */
  line-height: 1.2;
}


/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

button{
  border: none;
  outline: none;
  background-color: inherit ;
  cursor: pointer;
}

input{
  outline: none;
}

:root{
  --primary-color:#5526FF;
  --white-color:#ffffff;
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);