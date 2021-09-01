import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

html, body, #main {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
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

`
