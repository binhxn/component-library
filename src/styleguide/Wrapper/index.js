// ThemeProvider wrapper for Styleguide

// Enable the sx prop by adding the jsx comment
// to the top of your component file and importing jsx from Theme UI
// https://theme-ui.com/getting-started

import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
