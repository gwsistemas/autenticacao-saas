import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: 8px;
}

html, body {
  padding: 0;
  margin: 0;
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Open Sans', sans-serif;;
  font-weight: 400;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
  border: 0;
  &:focus {
    outline: none;
    outline: 0;
  }
  &:disabled {
    cursor: not-allowed;
  }
}

form, iframe {
  padding: 0;
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}

a {
  background-color: transparent;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
  outline-width: 0;
}

img {
  width: 100%;
  display: block;
  height: auto;
}

@media screen and (min-width: 1170px) {
  html {
    font-size: 10px;
  }
}


`
