// ThemeProvider wrapper for Styleguide

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import GlobalStyles from './globalStyles.js';

export default props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {props.children}
    </>
  </ThemeProvider>
);
