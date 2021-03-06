/* Colors */
const colors = {
  primary: {
    carbon: '#222222',
    slateGrey: '#383E54',
    endpointBlue: '#0084B4',
    turquoise: '#00A7B4',
    paleGrey: '#F4F5F7',
  },
  secondary: {
    watermelon: '#ED5564',
    tangerine: '#F46600',
    marigold: '#ED9E00',
    aloe: '#69C423',
    aqua: '#00BBB7',
    mist: '#C2CED7',
    air: '#E5F2F7',
    stone: '#858585',
    smoke: '#A2A2A2',
    doveGrey: '#C5C5C5',
    cloud: '#F0F0F0',
  },
  white: '#fff',
  black: '#000',
};

const {
  primary: { endpointBlue, turquoise, slateGrey },
  white,
  // code: { func, keyword, background, comment, operator, string, punctuation }
} = colors;

/* Typography */
// const fonts = {
//   body: 'system-ui, sans-serif',
//   heading: '"Avenir Next", sans-serif',
//   monospace: 'Menlo, monospace'
// };

// const heading = {
//   fontFamily: 'heading',
//   // lineHeight: 'heading', // not defined in lineHeight values, only solid, title, and copy
//   fontWeight: 'heading'
// };

// const body = {
//   fontFamily: 'body',
//   fontWeight: 'body'
// };

/* Main Theme */

export default {
  borders: {
    // Need to redo or modify in component as variant
    primary: `1px solid ${endpointBlue}`,
    secondary: `1px solid ${turquoise}`,
    tertiary: `1px solid ${slateGrey}`,
  },
  outline: {
    primary: `1px solid ${endpointBlue}`,
    secondary: `1px solid ${turquoise}`,
    tertiary: `1px solid ${slateGrey}`,
  },
  bg: {
    primary: endpointBlue,
    secondary: turquoise,
  },
  // breakpoints: ['32em', '48em', '64em'],
  breakpoints: ['768px'],
  // breakpoints: {
  //   sm: '32em',
  //   md: '48em',
  //   lg: '64em'
  // },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [14, 18, 22, 26, 28, 36, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    text: '#000',
    background: white,
    blue: ['#0084b4', '#0076a2', '#006990'],
    primary: ['#0084b4', '#0076a2', '#006990'], // I'm indecisive with blue/primary
    turquoise: ['#00a7b4', '#0096a2', '#008590'],
    secondary: ['#00a7b4', '#0096a2', '#008590'], // I'm indecisive with turquoise/secondary
    white: ['#ffffff', '#e5e5e5', '#cccccc'],
    tertiary: ['#ffffff', '#e5e5e5', '#cccccc'], // I'm indecisive with white/tertiary
    // tertiary: slateGrey,
    red: ['#e60000', '#cf0000', '#b80000'],
    slateGrey: ['#5f6476', '#4b5165', '#383e54'],
    modes: {
      //
      dark: {
        text: white,
        background: '#000',
        primary: '#0cf',
        secondary: '#f0e',
        gray: '#222',
        lightgray: '#111',
      },
    },
  },
  lineHeights: {
    solid: 1,
    heading: 1.25,
    body: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  space: [0, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  holyGrail: {
    panel: '16em',
  },
};
