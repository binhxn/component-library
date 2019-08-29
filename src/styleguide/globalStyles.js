import { createGlobalStyle } from 'styled-components';
// Create global CSS - acts as base css
export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    /* ${props => props.theme.fonts.body}; */
  }

  *,
	*:before,
	*:after {
 		box-sizing: inherit;
	}

  h1, h2, h3, h4, p {
    font-size: initial;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;
