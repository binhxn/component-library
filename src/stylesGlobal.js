import { createGlobalStyle } from 'styled-components';
// Create global CSS - acts as base css
export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *,
	*:before,
	*:after {
 		box-sizing: border-box;
	}

  h1, h2, h3, h4, p {
    font-size: initial;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }
`;
