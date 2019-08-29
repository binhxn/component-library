import { createGlobalStyle } from 'styled-components';
// Create global CSS - acts as base css
export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  *,
	*:before,
	*:after {
 		box-sizing: inherit;
	}

  h1, h2, h3, h4, h5, h6 {
    font-family: '${props => props.theme.fonts.heading}';
  }`;
