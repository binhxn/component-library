# System-One - Design System [![Netlify Status](https://api.netlify.com/api/v1/badges/65d4517b-d01a-4aba-8ee5-bfc299f16755/deploy-status)](https://app.netlify.com/sites/binh-component-library/deploys)

Customized theme-based style props for building design systems with React.

## Features

- `styled-components`
- `styled-systems`
- `react-styleguidist` for component style guide

## Installation

```
yarn add @system-one/react
```

or

```
npm install @system-one/react
```

Since this component is based off the concept of _theme-based styling_, you will need to install and wrap your root component with `styled-components`' **ThemeProvider**:

```
import { ThemeProvider } from 'styled-components';
import { theme } from '@system-one/react';

const App = props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

## Available Scripts

In the project directory, you can run:

### `yarn guide`

Runs Styleguidist server

Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn guide:build`

Builds HTML version of component library to production. Updates will be reflected in **[here](https://binh-component-library.netlify.com/)**.
