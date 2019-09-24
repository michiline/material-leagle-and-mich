import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,500|Source+Code+Pro|Source+Serif+Pro|Bubbler+One');
  html, body, #root {
    height: 100%;
  }
  html {
    font-size: 62.5%;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
  }
`

// font-family: 'Roboto', 'Source Serif Pro','Source Code Pro', monospace;
// font-weight: 400;
// line-height: 1.2;
// letter-spacing: .2rem;

export default Global
