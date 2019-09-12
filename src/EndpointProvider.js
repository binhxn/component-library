import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import StylesGlobal from './stylesGlobal.js';

const EndpointProvider = props => (
  <ThemeProvider theme={theme}>
    <>
      <StylesGlobal />
      {props.children}
    </>
  </ThemeProvider>
);

export default EndpointProvider;
export { EndpointProvider };
