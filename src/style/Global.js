import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Montserrat:400,500,700|Lobster:400,500|Poiret+One:400,500');
  html, body, #root {
    height: 100%;
  }
  html {
    font-size: 62.5%;
    @media only screen and (max-width: 400px) {
      font-size: 56.25%;
    }
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
