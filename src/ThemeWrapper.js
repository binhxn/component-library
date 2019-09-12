// ThemeProvider wrapper for Styleguide

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import StylesGlobal from './stylesGlobal.js';

export default props => (
  <ThemeProvider theme={theme}>
    <>
      <StylesGlobal />
      {props.children}
    </>
  </ThemeProvider>
);
