import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme';

const stories = require.context(
  '../src',
  true,
  /\.story\.(js|ts|jsx|tsx|mdx)$/,
);

// Component theme wrapper
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(stories, module);
